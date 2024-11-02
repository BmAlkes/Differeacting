import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";



const TransactionTimelineChart = ({ transactions }:any) => {
    const chartData = transactions.reduce((acc:any, transaction:any) => {
      const date = new Date(transaction.date).toLocaleDateString();
      const existing = acc.find((item:any) => item.date === date);
      
      if (existing) {
        if (transaction.type === "income") {
          existing.income += Number(transaction.amount);
        } else {
          existing.expenses += Number(transaction.amount);
        }
      } else {
        acc.push({
          date,
          income: transaction.type === "income" ? Number(transaction.amount) : 0,
          expenses: transaction.type === "expense" ? Number(transaction.amount) : 0,
        });
      }
      return acc;
    }, []).sort((a:any, b:any) => new Date(a.date).getTime() - new Date(b.date).getTime());
  
    return (
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Transaction Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="income"
                  stroke="#10B981"
                  name="Income"
                />
                <Line
                  type="monotone"
                  dataKey="expenses"
                  stroke="#EF4444"
                  name="Expenses"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    );
  };
  

  export default TransactionTimelineChart