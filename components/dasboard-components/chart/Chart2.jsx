import React from "react";
import { ResponsiveContainer, Area, ComposedChart } from "recharts";
import PropTypes from "prop-types";


export default function CoinAreaChart({ isUpTrend }) {
  const data = [
    { uv: 10 },
    { uv: 14 },
    { uv: 19 },
    { uv: 10 },
    { uv: 7 },
    { uv: 12 },
    { uv: 15 },
    { uv: 13 },
  ];

  return (
    <ResponsiveContainer height={100}>
      <ComposedChart data={data}>
        <defs>
          <linearGradient id="1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="10%" stopColor="#c0befe" stopOpacity={1} />
            <stop offset="90%" stopColor="#c0befe" stopOpacity={2} />
          </linearGradient>
          <linearGradient id="2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="10%" stopColor="#c0befe" stopOpacity={1} />
            <stop offset="90%" stopColor="#c0befe" stopOpacity={2} />
          </linearGradient>
        </defs>
        <Area
          type="natural"
          dataKey="uv"
          stroke={isUpTrend ? "#0c05eb" : "##F9FAFB"}
          strokeWidth="2"
          fill={`url(#${isUpTrend ? "1" :"2"})`}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}

CoinAreaChart.propTypes = {
  isUpTrend: PropTypes.bool,
};
