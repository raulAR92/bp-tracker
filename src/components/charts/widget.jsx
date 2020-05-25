import React from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineMarkSeries,
  LineSeries,
  AreaSeries,
  DiscreteColorLegendItem,
} from "react-vis";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { formatDate } from "../../utils/dateUtils";
import "../../../node_modules/react-vis/dist/style.css";

export default function AreaChartElevated({ areaData, lineData }) {
  const { height, width } = useWindowDimensions();
  const sysLine = [];
  const diaLine = [];
  if (areaData) {
    areaData.forEach((ad) => {
      sysLine.push({
        x: ad.x,
        y: ad.y0,
      });
      diaLine.push({ x: ad.x, y: ad.y });
    });
  }
  return (
    <XYPlot width={width} height={400}>
      <VerticalGridLines />
      <HorizontalGridLines />

      <XAxis title="Fechas" />
      <YAxis title="mmHg/ppm" />
      {areaData && (
        <AreaSeries
          curve="curveNatural"
          className="area-elevated-series-1"
          opacity={0.25}
          stroke="transparent"
          color="#79c7e3"
          data={areaData}
        />
      )}
      {areaData && (
        <LineSeries
          curve="curveNatural"
          data={sysLine}
          opacity={0.5}
          stroke="#12939a"
          strokeStyle="solid"
        />
      )}
      {areaData && (
        <LineSeries
          curve="curveNatural"
          data={diaLine}
          opacity={0.5}
          stroke="#12939a"
          strokeStyle="solid"
        />
      )}
      {lineData && (
        <LineMarkSeries
          curve="curveNatural"
          className="area-elevated-line-series"
          data={lineData}
          color="#055d61"
          stroke="#04696e"
          strokeWidth="2px"
        />
      )}
    </XYPlot>
  );
}
