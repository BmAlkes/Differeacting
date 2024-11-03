import { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
import { Card } from '../../components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Inicialize o GA4 com seu ID de medição
ReactGA.initialize('G-GW8C1T2XK1');

interface AnalyticsData {
  pageViews: number;
  visitors: number;
  pageViewsOverTime: Array<{
    date: string;
    views: number;
  }>;
  topPages: Array<{
    page: string;
    views: number;
  }>;
}

const GoogleAnalytics = () => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    pageViews: 0,
    visitors: 0,
    pageViewsOverTime: [],
    topPages: []
  });

  useEffect(() => {
    // Rastrear visualização de página
    ReactGA.send({
      hitType: 'pageview',
      page: window.location.pathname
    });

    // Exemplo de evento personalizado
    ReactGA.event({
      category: 'User',
      action: 'Visited Dashboard',
      label: 'Analytics Dashboard View'
    });
  }, []);

  return (
    <div className="space-y-6 p-4">
      {/* Métricas principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-700">Page Views</h3>
          <div className="mt-2 flex items-baseline">
            <p className="text-3xl font-bold">{analyticsData.pageViews}</p>
            <p className="ml-2 text-sm text-gray-500">last 7 days</p>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-700">Unique Visitors</h3>
          <div className="mt-2 flex items-baseline">
            <p className="text-3xl font-bold">{analyticsData.visitors}</p>
            <p className="ml-2 text-sm text-gray-500">last 7 days</p>
          </div>
        </Card>
      </div>

      {/* Gráfico de visualizações ao longo do tempo */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Page Views Over Time</h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={analyticsData.pageViewsOverTime}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="views"
                stroke="#8884d8"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Páginas mais visitadas */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Top Pages</h3>
        <div className="space-y-3">
          {analyticsData.topPages.map((page, index) => (
            <div
              key={page.page}
              className="flex justify-between items-center p-2 hover:bg-gray-50 rounded"
            >
              <div className="flex items-center">
                <span className="w-6 text-gray-500">{index + 1}.</span>
                <span className="truncate">{page.page}</span>
              </div>
              <span className="font-semibold">{page.views.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Eventos em tempo real */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Real-time Events</h3>
        <div className="space-y-4">
          <button
            onClick={() => {
              ReactGA.event({
                category: 'User Interaction',
                action: 'Button Click',
                label: 'Test Event'
              });
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Trigger Test Event
          </button>
          <p className="text-sm text-gray-600">
            Click the button above to send a test event to Google Analytics
          </p>
        </div>
      </Card>
    </div>
  );
};

const trackEvent = (category: string, action: string, label?: string) => {
  ReactGA.event({
    category,
    action,
    label
  });
};

export default GoogleAnalytics;