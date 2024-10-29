"use client"

import * as React from "react"
import { PieChart, Pie, Cell, Label } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card"
import { useQuery } from "@tanstack/react-query"
import { getLeads } from "../../api/LeadApi"


interface ChartData {
  name: string;
  value: number;
  color: string;
}



export function ChartLeads() {
    const { data, isLoading} = useQuery({
        queryKey: ["leads"],
        queryFn: () => getLeads(),
      });

  const chartData = React.useMemo(() => {
    if (!data) return [];
    
    const newLead= data?.filter((project:any) => project.status == 'new').length;
    const inContactLead = data?.filter((project:any) => project.status == 'In contact').length;
    const convert = data?.filter((project:any) => project.status == 'convert').length;
    const inLost = data?.filter((project:any) => project.status == 'lost').length;
    
    return [
      { name: 'New', value: newLead, color: '#12cd85' },
      { name: 'In contact', value: inContactLead, color: '#1fa4c9' },
      { name: 'convert', value: convert, color: '#005d24' },
      { name: 'lost', value: inLost, color: '#ef4444' },
    ] as ChartData[];
  }, [data]);

  const totalProjects = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.value, 0);
  }, [chartData]);

  const renderCustomLabel = ({ viewBox }:any) => {
    const { cx, cy } = viewBox;
    return (
      <g>
        <text
          x={cx}
          y={cy}
          className="fill-foreground text-3xl font-bold"
          textAnchor="middle"
          dominantBaseline="central"
        >
          {totalProjects}
        </text>
        <text
          x={cx}
          y={cy + 24}
          className="fill-muted-foreground text-sm"
          textAnchor="middle"
          dominantBaseline="central"
        >
          Total
        </text>
      </g>
    );
  };

  if (isLoading || !data) {
    return (
      <Card className="flex flex-col">
        <CardHeader className="items-center">
          <CardTitle>Loading...</CardTitle>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Leads</CardTitle>
        <CardDescription>Total of Leads: {totalProjects}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <div className="mx-auto aspect-square max-h-[250px]">
          <PieChart width={250} height={250}>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              strokeWidth={5}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
              <Label content={renderCustomLabel} />
            </Pie>
          </PieChart>
        </div>
        <div className="mt-4 flex justify-center gap-4">
          {chartData.map((entry, index) => (
            <div key={index} className="flex items-center gap-2">
              <div 
                className="h-3 w-3 rounded-full" 
                style={{ backgroundColor: entry.color }} 
              />
              <span className="text-sm">
                {entry.name}: {entry.value}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}