// src/components/FinanceStats.tsx

import React from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { IFinancialTotals } from '../../@types';

interface FinanceStatsProps {
  totals: IFinancialTotals;
}

const FinanceStats: React.FC<FinanceStatsProps> = ({ totals }) => {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardContent className="p-6">
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-500">Total Income</p>
            <p className="text-2xl font-bold text-green-600">
              {new Intl.NumberFormat('he-IL', {
                style: 'currency',
                currency: 'ILS',
              }).format(totals.income)}
            </p>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-6">
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-500">Total Expenses</p>
            <p className="text-2xl font-bold text-red-600">
              {new Intl.NumberFormat('he-IL', {
                style: 'currency',
                currency: 'ILS',
              }).format(totals.expenses)}
            </p>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-6">
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-500">Balance</p>
            <p className={`text-2xl font-bold ${
              totals.balance >= 0 ? 'text-green-600' : 'text-red-600'
            }`}>
              {new Intl.NumberFormat('he-IL', {
                style: 'currency',
                currency: 'ILS',
              }).format(totals.balance)}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FinanceStats;