import {useState } from "react";
import { Bell } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getNotification, markReadNotification } from "../../api/notifications";
import { toast } from "react-toastify";

type notificationProp = {
  createDate: string;
  leadId: {
    _id: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    dateOfCreation: string;
  };
  read: boolean;
  type: string;
  _id: string;
};

const NotificationCenter = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Remova os estados notifications e unreadCount, use diretamente o data do useQuery
  const { data: notifications = [] } = useQuery({
    queryKey: ["notifications"],
    queryFn: () => getNotification(),
  });

  // Calcule unreadCount diretamente dos dados
  const unreadCount = notifications.filter((n:any) => !n.read).length;

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: markReadNotification,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
      toast.success("data updated successfully");
    },
  });

  const markAsRead = async (id: string) => {
    mutate(id);
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleString();
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-full hover:bg-gray-100"
      >
        <Bell size={24} />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <Card className="absolute right-0 mt-2 w-80 max-h-96 overflow-y-auto z-50">
          <CardContent className="divide-y">
            {notifications.length === 0 ? (
              <p className="p-4 text-center text-gray-500">
                Dont have any notifications
              </p>
            ) : (
              notifications.map((notification:notificationProp) => (
                <div
                  key={notification._id}
                  className={`p-4 cursor-pointer ${!notification.read ? "bg-blue-50" : ""}`}
                  onClick={() => markAsRead(notification._id)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">
                        {notification.type === "New Lead"
                          ? "New Lead Received"
                          : "Lead Updated"}
                      </p>
                      <p className="text-sm text-gray-600">
                        {notification.leadId?.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {formatDate(notification.createDate)}
                      </p>
                    </div>
                    {!notification.read && (
                      <span className="w-2 h-2 bg-blue-500 rounded-full" />
                    )}
                  </div>
                </div>
              ))
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default NotificationCenter;