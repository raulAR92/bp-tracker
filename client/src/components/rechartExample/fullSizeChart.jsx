import React from "react";
import {
  ComposedChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { getSystolicStatus, getDiastolicStatus } from "../../utils/getStatus";
import { formatDateTime } from "../../utils/dateUtils";
import "./chart.scss";

export default function FullSizeChart({ data }) {
  const renderTooltip = ({ payload }) => {
    // we just render the default
    if (payload.length) {
      const data = payload[0].payload;
      const diaStatus = getDiastolicStatus(data.diastolic);
      const sysStatus = getSystolicStatus(data.systolic);
      let higerStatus =
        diaStatus.numberValue >= sysStatus.numberValue ? diaStatus : sysStatus;
      const tooltip = (
        <div className="ui-bpt-chart_custom_tooltip">
          <div className={`fp ${higerStatus.value}`}>
            <div className="title">{data.label}</div>
            <div className="lecture">{`${data.systolic}/${data.diastolic}`}</div>
            <div className="unit"> mmHg</div>
          </div>
          <div className="lp">
            <div className="pulse">{data.pulse} bpm</div>
          </div>
        </div>
      );
      return tooltip;
    }
    return null;
  };

  const xFormat = (data) => {
    const date = new Date(data);
    return formatDateTime(date);
  };

  return (
    <ResponsiveContainer width={"100%"} height={400}>
      <ComposedChart
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid
          stroke="#cccccc"
          strokeDasharray="2 2 "
          vertical={false}
        />
        <XAxis
          dataKey="date"
          height={70}
          label={{ value: "Dias", position: "right", offset: -75 }}
          tickFormatter={xFormat}
        />
        <Brush dataKey="x" height={40} stroke="#1a77b3" />
        <YAxis
          label={{
            value: "mmHg/bpm",
            angle: -90,
            position: "insideLeft",
            offset: 5,
          }}
        />
        <Tooltip content={renderTooltip} />
        <Area
          type="monotone"
          dataKey="composed"
          fill="#01bace"
          opacity={0.5}
          stroke="#449deb"
        />
        <Line
          type="monotone"
          dataKey="pulse"
          stroke="#055d61"
          strokeWidth={2}
        />
        <ReferenceLine y={135} stroke="#d8886f" strokeWidth={1} />
        <ReferenceLine y={85} stroke="#d8886f" strokeWidth={1} />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
