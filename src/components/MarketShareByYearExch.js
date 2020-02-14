import autoBind from "react-autobind";
import numeral from "numeral";
import ChartComponent from "./ChartComponent";

class MarketShareByYearExch extends ChartComponent {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
  }

  makeChartOptions(props) {
    const { legendData, xAxisData, series } = props.data;
    const style =
      "display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px";
    const colorSpan = color =>
      `<span style="${style};background-color:${color}"></span>`;

    return {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          animation: true
        },
        formatter: function(params) {
          let rez = `<p style="text-align:left"><b>Year ${params[0].axisValue}</b></p>`;
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
      legend: {
        bottom: 0,
        left: "center",
        itemWidth: 20,
        padding: [60, 80, 0, 80],
        data: legendData
      },
      toolbox: {
        show: true,
        right: "5%",
        feature: {
          magicType: {
            show: true,
            type: ["line", "bar", "stack", "tiled"],
            title: {
              line: "Line Chart",
              bar: "Bar Chart",
              stack: "Stacked",
              tiled: "Tiled"
            }
          },
          restore: { show: true, title: "Restore" },
          saveAsImage: {
            show: true,
            title: "Save As Image",
            type: "png",
            name: "market-share-by-year-exchange"
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
      xAxis: {
        type: "category",
        boundaryGap: true,
        data: xAxisData
      },
      yAxis: {
        type: "value",
        max: "dataMax",
        axisLabel: {
          formatter: function(value, index) {
            return numeral(value).format("0%");
          }
        }
      },
      series
    };
  }
}

export default MarketShareByYearExch;
