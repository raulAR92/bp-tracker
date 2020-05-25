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
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { getSystolicStatus, getDiastolicStatus } from "../../utils/getStatus";
import "./chart.scss";

export default function Chart({ data }) {
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
        <CartesianGrid stroke="#f5f5f5" strokeDasharray="3 3" />
        <XAxis
          dataKey="x"
          label={{ value: "Dias", position: "bottom", offset: 5 }}
        />
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
        <Line type="monotone" dataKey="pulse" stroke="#055d61" />
        <ReferenceLine y={135} stroke="#d8bab8" strokeDasharray="8 8" />
        <ReferenceLine y={85} stroke="#d8bab8" strokeDasharray="8 8" />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
