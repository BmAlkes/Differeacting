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
import { getAllProjects } from "../../api/ProjectAPI"


interface ChartData {
  name: string;
  value: number;
  color: string;
}



export function ChartProjects() {
  const { data, isLoading } = useQuery({
    queryKey: ["Allprojects"],
    queryFn: () => getAllProjects(),
  });

  const chartData = React.useMemo(() => {
    if (!data) return [];
    
    const activeProjects = data?.filter((project:any) => project.active == true).length;
    const inactiveProjects = data?.filter((project:any) => project.active == false).length;
    
    return [
      { name: 'Actives', value: activeProjects, color: '#12a1cd' },
      { name: 'Inactives', value: inactiveProjects, color: '#ef4444' },
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
        <CardTitle>Projects</CardTitle>
        <CardDescription>Total of projects: {totalProjects}</CardDescription>
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