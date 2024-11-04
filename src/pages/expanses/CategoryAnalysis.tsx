// src/components/CategoryAnalysis.tsx

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { PieChart } from 'lucide-react';
import { ITransaction } from '../../@types';

interface CategoryAnalysisProps {
  transactions: ITransaction[];
}

const CategoryAnalysis: React.FC<CategoryAnalysisProps> = ({ transactions }) => {
  const calculateCategoryStats = () => {
    const stats = transactions.reduce((acc, transaction) => {
      const category = transaction.category;
      if (!acc[category]) {
        acc[category] = { total: 0, count: 0 };
      }
      acc[category].total += transaction.amount;
      acc[category].count += 1;
      return acc;
    }, {} as Record<string, { total: number; count: number }>);

    return Object.entries(stats).map(([category, data]) => ({
      category,
      total: data.total,
      count: data.count,
      average: data.total / data.count,
    }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <PieChart className="h-5 w-5" />
          Category Analysis
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {calculateCategoryStats().map((stat) => (
            <div key={stat.category} className="p-4 border rounded-lg">
              <h3 className="font-medium">{stat.category}</h3>
              <div className="mt-2 space-y-1">
                <p className="text-sm text-gray-500">
                  Total: {new Intl.NumberFormat('he-IL', {
                    style: 'currency',
                    currency: 'ILS',
                  }).format(stat.total)}
                </p>
                <p className="text-sm text-gray-500">
                  Count: {stat.count} transactions
                </p>
                <p className="text-sm text-gray-500">
                  Average: {new Intl.NumberFormat('he-IL', {
                    style: 'currency',
                    currency: 'ILS',
                  }).format(stat.average)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CategoryAnalysis;