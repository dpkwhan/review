import React, { Component, Fragment } from "react";
import autoBind from "react-autobind";
import { Row, Col, Radio } from "antd";
import MarketVolumeChange from "./MarketVolumeChange";
import marketVolumeChange from "../data/market_volume_change.json";

class MarketVolumeChangeWithData extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
    this.state = { period: "y", chartData: this.filterData("y"), height: 300 };
  }

  onResize(height) {
    this.setState({ height });
  }

  getCommentContent(period) {
    switch (period) {
      case "y":
        return (
          <div>
            <Row type="flex" justify="start">
              <h5>Annual Change</h5>
              <font size={4}>
                A short description. A short description. A short description. A
                short description. A short description. A short description. A
                short description. A short description. A short description. A
                short description. A short description.
                <ul className="comment-item">
                  <li>Comment 1.</li>
                  <li>Comment 2.</li>
                </ul>
              </font>
            </Row>
          </div>
        );
      case "h":
        return (
          <div>
            <Row type="flex" justify="start">
              <h5>Semiannual Change</h5>
              <font size={4}>
                A short description. A short description. A short description. A
                short description. A short description. A short description. A
                short description. A short description. A short description. A
                short description. A short description.
                <ul className="comment-item">
                  <li>Comment 1.</li>
                  <li>Comment 2.</li>
                </ul>
              </font>
            </Row>
          </div>
        );
      case "q":
        return (
          <div>
            <Row type="flex" justify="start">
              <h5>Quarterly Change</h5>
              <font size={4}>
                A short description. A short description. A short description. A
                short description. A short description. A short description. A
                short description. A short description. A short description. A
                short description. A short description.
                <ul className="comment-item">
                  <li>Comment 1.</li>
                  <li>Comment 2.</li>
                </ul>
              </font>
            </Row>
          </div>
        );
      default:
        break;
    }
  }

  filterData(period) {
    const data = marketVolumeChange[period];
    const chartData = { xAxisData: data.period, legendData: [], series: [] };
    Object.keys(data).forEach(key => {
      if (key === "period" || key === "totalShares") return;
      const name =
        key === "changePctSply" ? "Same Period Last Year" : "Last Period";
      const dataPoints = {
        name,
        type: "line",
        barMaxWidth: 50,
        lineStyle: { type: key === "changePctSply" ? "solid" : "dotted" },
        data: data[key]
      };
      chartData.legendData.push(name);
      chartData.series.push(dataPoints);
    });
    return chartData;
  }

  onPeriodSelection(e) {
    const period = e.target.value;
    this.setState({ period, chartData: this.filterData(period) });
  }

  render() {
    const { period, chartData, height } = this.state;
    const commentContent = this.getCommentContent(period);
    const leftColumnWidth = 16;

    return (
      <Fragment>
        <Row gutter={32}>
          <Col span={leftColumnWidth}>
            <div align="right">
              <Radio.Group onChange={this.onPeriodSelection} value={period}>
                <Radio value="y">Annual</Radio>
                <Radio value="h">Semiannual</Radio>
                <Radio value="q">Quarterly</Radio>
              </Radio.Group>
            </div>
          </Col>
        </Row>

        <Row gutter={32}>
          <Col span={leftColumnWidth}>
            <MarketVolumeChange data={chartData} onResize={this.onResize} />
          </Col>
          <Col span={24 - leftColumnWidth}>
            <Row className="comments" gutter={8}>
              <Col span={20}>
                <div
                  className="comments-content"
                  style={{ height: Math.max(400, height - 50) }}
                >
                  {commentContent}
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default MarketVolumeChangeWithData;
