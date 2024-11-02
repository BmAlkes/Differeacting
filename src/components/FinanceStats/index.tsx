import { ArrowDownCircle, ArrowUpCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";


const FinanceStats = ({ totals }:any) => {
    const pieData = [
      { name: "Income", value: totals.income },
      { name: "Expenses", value: totals.expenses },
    ];
  
    const COLORS = ["#10B981", "#EF4444"];
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Financial Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <ArrowUpCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Income</span>
                </div>
                <span className="text-green-500 font-medium">
                  {new Intl.NumberFormat("en-IL", {
                    style: "currency",
                    currency: "ILS",
                  }).format(totals.income)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <ArrowDownCircle className="h-4 w-4 text-red-500 mr-2" />
                  <span>Expenses</span>
                </div>
                <span className="text-red-500 font-medium">
                  {new Intl.NumberFormat("en-IL", {
                    style: "currency",
                    currency: "ILS",
                  }).format(totals.expenses)}
                </span>
              </div>
              <div className="flex justify-between items-center pt-4 border-t">
                <span className="font-medium">Balance</span>
                <span
                  className={`font-medium ${
                    totals.balance >= 0 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {new Intl.NumberFormat("en-IL", {
                    style: "currency",
                    currency: "ILS",
                  }).format(totals.balance)}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
  
        <Card>
          <CardHeader>
            <CardTitle>Income vs Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  export default FinanceStats