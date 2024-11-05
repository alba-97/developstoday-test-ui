"use client";

import { useState } from "react";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface IPopulationChartProps {
  populationData: {
    year: number;
    value: number;
  }[];
}

export function PopulationChart({ populationData }: IPopulationChartProps) {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

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
              onMouseMove={(e) => {
                if (e.activePayload) {
                  setHoveredValue(e.activePayload[0].value);
                }
              }}
              onMouseLeave={() => setHoveredValue(null)}
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
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-background border border-border p-2 rounded shadow">
                        <p className="font-semibold">{`Year: ${payload[0].payload.year}`}</p>
                        <p>{`Population: ${payload[0].value?.toLocaleString()}`}</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
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
