
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { Loader2, Mail, Phone, ArrowLeft, Clock, Info } from "lucide-react";
import { getClientById } from "../../../api/ClientApi";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";

import { Separator } from "../../../components/ui/separator";
import { cn } from "../../../lib/utils";

const StatusBadge = ({ active }: { active: boolean }) => (
  <span
    className={cn(
      "inline-flex items-center px-2.5 py-0.5 rounded-full text-base font-medium",
      active
        ? "bg-green-100 text-green-800"
        : "bg-red-100 text-red-800"
    )}
  >
    {active ? "Active" : "Inactive"}
  </span>
);

const ClientDetails = () => {
  const { clientId } = useParams();

  const { data: client, isLoading } = useQuery({
    queryKey: ["client", clientId],
    queryFn: () => getClientById(clientId!),
    retry: 2,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />
          <p className="text-gray-500">Loading client details...</p>
        </div>
      </div>
    );
  }

  if (!client) return null;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-5xl font-black ">Client Details</h1>
        <Button variant="outline" asChild>
          <Link to="/dashboard/clients" className="bg-purple-400 hover:bg-purple-500 flex text-white px-10 py-3 font-bold cursor-pointer transition-colors rounded-md hover:text-[#fff]">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Clients
          </Link>
        </Button>
      </div>

      <Card className="overflow-hidden">
        <CardHeader className="border-b bg-gray-50/50">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl">{client.clientName}</CardTitle>
            <StatusBadge active={client.active}  />
          </div>
        </CardHeader>

        <CardContent className="p-6 space-y-6">
          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-500" />
                <a 
                  href={`mailto:${client.email}`}
                  className="text-blue-500 hover:underline"
                >
                  {client.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-500" />
                <a 
                  href={`tel:${client.phone}`}
                  className="text-green-500 hover:underline"
                >
                  {client.phone}
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-orange-500" />
                <div>
                  <span className="font-medium">Bank Hours: </span>
                  <span className="text-gray-600">{client.bankHours} hours</span>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-6" />

          {/* Notes Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Info className="w-5 h-5 text-gray-500" />
              <h3 className="text-lg font-semibold">Notes</h3>
            </div>
            <div 
              className="prose prose-sm max-w-none p-4 bg-gray-50 rounded-lg"
              dangerouslySetInnerHTML={{ __html: client.description }}
            />
          </div>

          {/* Additional Information Cards */}
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <Card>
              <CardContent className="p-4">
                <div className="text-sm text-gray-500">Created</div>
                <div>{new Date().toLocaleDateString()}</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-sm text-gray-500">Last Updated</div>
                <div>{new Date().toLocaleDateString()}</div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClientDetails;