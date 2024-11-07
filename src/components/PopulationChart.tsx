"use client";

import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import TooltipContent from "./TooltipContent";

interface IPopulationChartProps {
  readonly populationData: {
    year: number;
    value: number;
  }[];
}

export function PopulationChart({ populationData }: IPopulationChartProps) {
  const formatYAxis = (value: number) => {
    return `${(value / 1000).toFixed(0)}k`;
  };

  const formatXAxis = (value: number) => {
    return value % 10 === 0 ? value.toString() : "";
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div>
        <h1>Population Growth Over Time</h1>
      </div>
      <div>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={populationData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis
                dataKey="year"
                tickFormatter={formatXAxis}
                tick={{ fontSize: 12 }}
              />
              <YAxis
                tickFormatter={formatYAxis}
                tick={{ fontSize: 12 }}
                width={40}
              />
              <Tooltip content={<TooltipContent />} />
              <Line
                type="monotone"
                dataKey="value"
                name="Population"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
