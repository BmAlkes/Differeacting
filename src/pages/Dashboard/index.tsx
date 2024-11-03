import { ChartWelcome } from "../../components/ChartWelcome";
import { ChartProjects } from "../../components/ChartWelcome/ChartProjects";
import { ChartLeads } from "../../components/ChartWelcome/Leads";
import { useAuth } from "../../hooks/useAuth";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { 
  LayoutDashboard, 
  Clock, 
  CalendarDays,
  Bell
} from "lucide-react";

const Dashboard = () => {
  const { data } = useAuth();

  return (
    <div className="min-h-screen p-6 bg-gray-50/30">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center space-x-4 mb-2">
          <LayoutDashboard className="h-8 w-8 text-purple-500" />
          <h1 className="text-3xl font-bold">Dashboard</h1>
        </div>
        
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg p-6 text-white shadow-lg">
          <p className="text-lg opacity-90">Welcome back,</p>
          <h2 className="text-3xl font-bold mt-2">{data.name}</h2>
          <div className="flex items-center mt-4 text-sm opacity-90">
            <Clock className="h-4 w-4 mr-2" />
            <span>{new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
            <CalendarDays className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-gray-500">+12% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Active Tasks</CardTitle>
            <Bell className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">16</div>
            <p className="text-xs text-gray-500">+4% from last week</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Pending Reviews</CardTitle>
            <Clock className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">9</div>
            <p className="text-xs text-gray-500">-2% from yesterday</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-4">
              <ChartWelcome />
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-4">
              <ChartProjects />
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-4">
              <ChartLeads />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Activity Feed */}
      <div className="max-w-7xl mx-auto mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-purple-500 rounded-full" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">New project created</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;