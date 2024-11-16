// components/StatsSection.tsx
import { useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Progress } from '../../components/ui/progress';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import type { TransactionStats } from '../../@types';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";

// Constantes
const INCOME_TYPES = ['income', 'future_income'] as const;

interface StatsSectionProps {
  statsData: TransactionStats;
}

export const StatsSection = ({ statsData}: StatsSectionProps) => {
  const stats = useMemo(() => {
    if (!statsData?.length) return { income: 0, expenses: 0, categories: [], monthlyData: [] };

    const totals = statsData.reduce((acc, curr) => {
      const amount = curr.totalAmount;
      
      if (INCOME_TYPES.some(type => curr._id.type.toLowerCase().includes(type))) {
        acc.income += amount;
      } else {
        acc.expenses += amount;
      }
      return acc;
    }, { income: 0, expenses: 0 });

    // Agregar categorias por tipo
    const categoriesMap = new Map();
    statsData.forEach(stat => {
      stat.categories.forEach(cat => {
        const existing = categoriesMap.get(cat.category) || { 
          total: 0, 
          count: 0,
          isIncome: INCOME_TYPES.some(type => stat._id.type.toLowerCase().includes(type))
        };
        
        categoriesMap.set(cat.category, {
          category: cat.category,
          total: existing.total + cat.total,
          count: existing.count + cat.count,
          avgAmount: cat.avgAmount,
          isIncome: existing.isIncome
        });
      });
    });

    // Preparar dados mensais para o gráfico
    const monthlyData = statsData.reduce((acc, curr) => {
      const monthYear = `${curr._id.month}/${curr._id.year}`;
      const existingMonth = acc.find(item => item.month === monthYear);

      if (existingMonth) {
        if (INCOME_TYPES.some(type => curr._id.type.toLowerCase().includes(type))) {
          existingMonth.income += curr.totalAmount;
        } else {
          existingMonth.expenses += curr.totalAmount;
        }
      } else {
        acc.push({
          month: monthYear,
          income: INCOME_TYPES.some(type => curr._id.type.toLowerCase().includes(type)) ? curr.totalAmount : 0,
          expenses: INCOME_TYPES.some(type => curr._id.type.toLowerCase().includes(type)) ? 0 : curr.totalAmount
        });
      }
      return acc;
    }, [] as Array<{ month: string; income: number; expenses: number; }>);

    return {
      ...totals,
      categories: Array.from(categoriesMap.values()),
      monthlyData: monthlyData.sort((a, b) => {
        const [monthA, yearA] = a.month.split('/');
        const [monthB, yearB] = b.month.split('/');
        return new Date(Number(yearA), Number(monthA) - 1).getTime() - 
               new Date(Number(yearB), Number(monthB) - 1).getTime();
      })
    };
  }, [statsData]);

  const formatShekel = (number: number) => {
    return new Intl.NumberFormat('he-IL', {
      style: 'currency',
      currency: 'ILS',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(number);
  };



  return (
    <div className="space-y-6">
      {/* Main Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Income</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-green-600 direction-ltr">
              {formatShekel(stats.income)}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-red-600 direction-ltr">
              {formatShekel(stats.expenses)}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className={`text-2xl font-bold ${
              stats.income - stats.expenses >= 0 ? 'text-blue-600' : 'text-red-600'
            } direction-ltr`}>
              {formatShekel(stats.income - stats.expenses)}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts and Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Financial Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="trends" className="space-y-4">
            <TabsList>
              <TabsTrigger value="trends">Trends</TabsTrigger>
              <TabsTrigger value="breakdown">Breakdown</TabsTrigger>
            </TabsList>

            <TabsContent value="trends" className="space-y-4">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={stats.monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip 
                      formatter={(value: number) => formatShekel(value)}
                      labelFormatter={(label) => `Period: ${label}`}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="income" 
                      stroke="#16a34a" 
                      name="Income"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="expenses" 
                      stroke="#dc2626" 
                      name="Expenses"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>

            <TabsContent value="breakdown">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Budget Distribution</h4>
                  <Progress 
                    value={(stats.expenses / (stats.income + stats.expenses)) * 100} 
                    className="h-2"
                  />
                  <div className="flex justify-between mt-2 text-sm text-gray-600">
                    <span>Expenses: {((stats.expenses / (stats.income + stats.expenses)) * 100).toFixed(1)}%</span>
                    <span>Income: {((stats.income / (stats.income + stats.expenses)) * 100).toFixed(1)}%</span>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Category Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Category Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Income Categories */}
            <div>
              <h3 className="text-lg font-medium text-green-600 mb-3">Income Categories</h3>
              <div className="space-y-4">
                {stats.categories
                  .filter(cat => cat.isIncome)
                  .sort((a, b) => b.total - a.total)
                  .map((category) => (
                    <div
                      key={category.category}
                      className="bg-green-50 p-4 rounded-lg space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium text-gray-900">
                          {category.category}
                        </h4>
                        <span className="text-sm bg-green-100 px-2 py-1 rounded">
                          {category.count} transactions
                        </span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Total: {formatShekel(category.total)}</span>
                        <span>Average: {formatShekel(category.avgAmount)}</span>
                      </div>
                      <Progress 
                        value={(category.total / stats.income) * 100} 
                        className="h-1 bg-green-100" 
                      />
                    </div>
                  ))}
              </div>
            </div>

            {/* Expense Categories */}
            <div>
              <h3 className="text-lg font-medium text-red-600 mb-3">Expense Categories</h3>
              <div className="space-y-4">
                {stats.categories
                  .filter(cat => !cat.isIncome)
                  .sort((a, b) => b.total - a.total)
                  .map((category) => (
                    <div
                      key={category.category}
                      className="bg-red-50 p-4 rounded-lg space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium text-gray-900">
                          {category.category}
                        </h4>
                        <span className="text-sm bg-red-100 px-2 py-1 rounded">
                          {category.count} transactions
                        </span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Total: {formatShekel(category.total)}</span>
                        <span>Average: {formatShekel(category.avgAmount)}</span>
                      </div>
                      <Progress 
                        value={(category.total / stats.expenses) * 100} 
                        className="h-1 bg-red-100" 
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};