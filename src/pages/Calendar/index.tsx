import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { createPortal } from 'react-dom';
import Calendar from 'react-calendar';
import type { CalendarProps } from 'react-calendar';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import 'react-calendar/dist/Calendar.css';
import api from '../../lib/axios';
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { Switch } from "../../components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Alert, AlertDescription } from "../../components/ui/alert";
import { Badge } from "../../components/ui/badge";
import { Clock, Bell, Tag, X, Trash2 } from 'lucide-react';

type ViewMode = 'month' | 'list';
type Category = 'Work' | 'Personal' | 'Important' | 'Meeting' | 'Others';

interface Event {
  _id: string;
  title: string;
  date: string;
  description: string;
  category: Category;
  reminder: boolean;
  reminderTime: string;
  notified: boolean;
  user: string;
}

interface DeleteDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const CATEGORIES: Category[] = [
  'Work',
  'Personal',
  'Important',
  'Meeting',
  'Others'
];

const CategoryColors: Record<Category, { bg: string; text: string }> = {
  'Work': { bg: 'bg-blue-100', text: 'text-blue-700' },
  'Personal': { bg: 'bg-green-100', text: 'text-green-700' },
  'Important': { bg: 'bg-red-100', text: 'text-red-700' },
  'Meeting': { bg: 'bg-purple-100', text: 'text-purple-700' },
  'Others': { bg: 'bg-gray-100', text: 'text-gray-700' }
};

// Schema de validação para o formulário
const eventSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  date: z.string().min(1, 'Date is required'),
  description: z.string(),
  category: z.enum(['Work', 'Personal', 'Important', 'Meeting', 'Others']),
  reminder: z.boolean(),
  reminderTime: z.string()
});

type EventFormData = z.infer<typeof eventSchema>;

const DeleteDialog: React.FC<DeleteDialogProps> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <h2 className="text-lg font-semibold mb-4">Delete Event</h2>
        <p className="text-gray-600 mb-6">
          Are you sure you want to delete this event? This action cannot be undone.
        </p>
        <div className="flex justify-end gap-4">
          <Button
            variant="outline"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={() => {
              onConfirm();
              onClose();
            }}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>,
    document.body
  );
};

const CalendarComponent = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [viewMode, setViewMode] = useState<ViewMode>('month');
  const [notifications, setNotifications] = useState<Event[]>([]);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [eventToDelete, setEventToDelete] = useState<string | null>(null);

  const { register, handleSubmit, watch, setValue, reset } = useForm<EventFormData>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      title: '',
      date: '',
      description: '',
      category: 'Others',
      reminder: false,
      reminderTime: '30',
    }
  });

  const reminder = watch('reminder');

  useEffect(() => {
    fetchEvents();
    const notificationInterval = setInterval(checkNotifications, 60000);
    return () => clearInterval(notificationInterval);
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await api.get<Event[]>('/events', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      setEvents(response.data);
      checkNotifications();
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleDateChange: CalendarProps['onChange'] = (value) => {
    if (value instanceof Date) {
      setSelectedDate(value);
    } else if (Array.isArray(value) && value[0] instanceof Date) {
      setSelectedDate(value[0]);
    }
  };

  const handleDeleteClick = (eventId: string) => {
    setEventToDelete(eventId);
    setDeleteDialogOpen(true);
  };

  const handleDeleteEvent = async (eventId: string) => {
    try {
      await api.delete(`/events/${eventId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      setEvents(prev => prev.filter(event => event._id !== eventId));
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  const handleConfirmDelete = async () => {
    if (eventToDelete) {
      await handleDeleteEvent(eventToDelete);
      setEventToDelete(null);
    }
  };

  const checkNotifications = useCallback(() => {
    const now = new Date();
    const upcomingEvents = events.filter(event => {
      const eventDate = new Date(event.date);
      const reminderTime = new Date(eventDate.getTime() - (parseInt(event.reminderTime) * 60000));
      return event.reminder && reminderTime <= now && !event.notified;
    });

    if (upcomingEvents.length > 0) {
      setNotifications(prev => [...prev, ...upcomingEvents]);
      if (Notification.permission === "granted") {
        upcomingEvents.forEach(event => {
          new Notification(`Reminder: ${event.title}`, {
            body: `Event in ${event.reminderTime} minutes`
          });
        });
      }
    }
  }, [events]);

  const onSubmit = async (data: EventFormData) => {
    try {
      const response = await api.post<Event>('/events', data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      setEvents(prev => [...prev, response.data]);
      reset();
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  const getDayEvents = useCallback((date: Date) => {
    return events.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.toDateString() === date.toDateString();
    });
  }, [events]);

  const tileContent = useCallback(({ date, view }: { date: Date; view: string }) => {
    if (view !== 'month') return null;
    
    const dayEvents = getDayEvents(date);
    if (dayEvents.length > 0) {
      return (
        <div className="flex flex-wrap gap-1 mt-1">
          {dayEvents.map((event, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 rounded-full ${CategoryColors[event.category].bg}`}
            />
          ))}
        </div>
      );
    }
    return null;
  }, [getDayEvents]);

  const renderEventCard = useCallback((event: Event) => (
    <Card key={event._id} className="mb-4">
      <CardContent className="pt-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg">{event.title}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
              <Clock className="w-4 h-4" />
              {new Date(event.date).toLocaleString()}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className={`${CategoryColors[event.category].bg} ${CategoryColors[event.category].text}`}>
              {event.category}
            </Badge>
            <Button
              variant="ghost"
              size="icon"
              className="text-red-600 hover:text-red-700"
              onClick={() => handleDeleteClick(event._id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
        {event.description && (
          <p className="mt-4 text-gray-600">{event.description}</p>
        )}
        {event.reminder && (
          <div className="flex items-center gap-2 mt-4 text-sm text-gray-500">
            <Bell className="w-4 h-4" />
            Reminder {event.reminderTime} minutes before
          </div>
        )}
      </CardContent>
    </Card>
  ), []);

  const EventForm = useCallback(() => (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Title</label>
        <Input
          {...register('title')}
          placeholder="Event title"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Date and Time</label>
        <Input
          type="datetime-local"
          {...register('date')}
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Category</label>
        <Select 
          onValueChange={(value: Category) => setValue('category', value)}
          defaultValue="Others"
        >
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {CATEGORIES.map(category => (
              <SelectItem key={category} value={category}>
                <div className="flex items-center gap-2">
                  <Tag className={`w-4 h-4 ${CategoryColors[category].text}`} />
                  {category}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Description</label>
        <Textarea
          {...register('description')}
          placeholder="Event description"
          rows={3}
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Switch
            checked={reminder}
            onCheckedChange={(checked) => setValue('reminder', checked)}
          />
          <label className="text-sm font-medium">Enable reminder</label>
        </div>

        {reminder && (
          <Select
            onValueChange={(value) => setValue('reminderTime', value)}
            defaultValue="30"
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Reminder time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5 minutes before</SelectItem>
              <SelectItem value="15">15 minutes before</SelectItem>
              <SelectItem value="30">30 minutes before</SelectItem>
              <SelectItem value="60">1 hour before</SelectItem>
            </SelectContent>
          </Select>
        )}
      </div>

      <Button type="submit" className="w-full">
        Add Event
      </Button>
    </form>
  ), [handleSubmit, register, reminder, setValue]);

  const sortedEvents = useMemo(() => 
    [...events].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()),
    [events]
  );

  return (
    <div className="container mx-auto py-6 space-y-6">
      <h2 className="text-3xl font-bold">Calendar</h2>

      <DeleteDialog
        isOpen={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        onConfirm={handleConfirmDelete}
      />

      {notifications.length > 0 && (
        <div className="fixed top-4 right-4 z-50 space-y-2 w-80">
          {notifications.map((notification, index) => (
            <Alert key={index} className="bg-yellow-50 shadow-lg">
              <AlertDescription className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Bell className="w-4 h-4" />
                  <span>{notification.title}</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setNotifications(prev => 
                    prev.filter((_, i) => i !== index)
                  )}
                >
                  <X className="w-4 h-4" />
                </Button>
              </AlertDescription>
            </Alert>
          ))}
        </div>
      )}

      <Tabs value={viewMode} onValueChange={(value: string) => setViewMode(value as ViewMode)}>
        <TabsList className="mb-4">
          <TabsTrigger value="month">Month</TabsTrigger>
          <TabsTrigger value="list">List</TabsTrigger>
        </TabsList>

        <TabsContent value="month">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Calendar View</CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  onChange={handleDateChange}
                  value={selectedDate}
                  tileContent={tileContent}
                  className="w-full"
                  selectRange={false}
                />
                
    
                {selectedDate && (
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold mb-4">
                        Events for {selectedDate.toLocaleDateString()}
                      </h3>
                      <div className="space-y-4">
                        {getDayEvents(selectedDate).map(renderEventCard)}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
  
              <Card className="h-fit">
                <CardHeader>
                  <CardTitle>Add New Event</CardTitle>
                </CardHeader>
                <CardContent>
                  <EventForm />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
  
          <TabsContent value="list">
            <Card>
              <CardHeader>
                <CardTitle>All Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sortedEvents.map(renderEventCard)}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    );
  };
  
  export default CalendarComponent;