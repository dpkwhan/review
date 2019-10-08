import autoBind from "react-autobind";
import numeral from "numeral";
import ChartComponent from "./ChartComponent";

class AtsMarketShare extends ChartComponent {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
  }

  makeChartOptions(props) {
    const { title } = props;
    const { legendData, xAxisData, series } = props.data;
    const style =
      "display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px";
    const colorSpan = color =>
      `<span style="${style};background-color:${color}"></span>`;

    return {
      title: {
        left: "center",
        text: title
      },
      xAxis: {
        type: "category",
        boundaryGap: true,
        offset: 10,
        data: xAxisData
      },
      yAxis: {
        type: "value",
        //min: "dataMin",
        min: 0,
        max: "dataMax",
        scale: true,
        name: "Market Share (%)",
        nameLocation: "end",
        nameGap: 20,
        axisLabel: {
          formatter: function(value, index) {
            return numeral(value).format("0.0%");
          }
        }
      },
      legend: {
        bottom: 0,
        left: "center",
        itemWidth: 20,
        padding: [60, 80, 0, 80],
        data: legendData
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          animation: true
        },
        formatter: function(params) {
          let rez = `<p style="text-align:left"><b>Week: ${params[0].axisValue}</b></p>`;
          rez += "<table>";
          params.forEach(item => {
            const colorEle = colorSpan(item.color);
            const pct = numeral(item.data).format("0.00%");
            const xx = `<tr><td style="text-align:left">${colorEle} ${item.seriesName}</td><td style="text-align:right;padding-left:5px">${pct}</td></tr>`;
            rez += xx;
          });
          rez += "</table>";
          return rez;
        }
      },
      toolbox: {
        show: true,
        feature: {
          magicType: {
            show: true,
            type: ["line", "bar"],
            title: {
              line: "Line Chart",
              bar: "Bar Chart"
            }
          },
          restore: { show: true, title: "Restore" },
          saveAsImage: {
            show: true,
            title: "Save As Image",
            type: "png",
            name: "market-change-over-time"
          }
        },
        orient: "vertical",
        iconStyle: {
          normal: {
            textPosition: "left",
            textAlign: "right"
          },
          emphasis: {
            textPosition: "left",
            textAlign: "right"
          }
        },
        top: "middle"
      },
      calculable: true,
      series
    };
  }
}

export default AtsMarketShare;
