import React, { Component, Fragment } from "react";
import autoBind from "react-autobind";
import { Row, Col, Radio } from "antd";
import AtsMarketShare from "./AtsMarketShare";

class AtsMarketShareWithData extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
    this.state = {
      reportType: "t1",
      chartData: this.filterData("t1"),
      height: 300
    };
  }

  onResize(height) {
    this.setState({ height });
  }

  getCommentContent(reportType) {
    switch (reportType) {
      case "t1":
        return (
          <div>
            <Row type="flex" justify="start">
              <h1>NMS Tier 1</h1>
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
      case "t2":
        return (
          <div>
            <Row type="flex" justify="start">
              <h1>NMS Tier 2</h1>
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

  filterData(reportType) {
    const data = this.props.data[reportType];
    const chartData = { xAxisData: data.week, legendData: [], series: [] };
    Object.keys(data).forEach(key => {
      if (key === "week") return;
      const name = key;
      const dataPoints = {
        name,
        type: "line",
        barMaxWidth: 50,
        stack: "atsMktShare",
        symbol: "none",
        itemStyle: { normal: { areaStyle: { type: "default" } } },
        data: data[key]
      };
      chartData.legendData.push(name);
      chartData.series.push(dataPoints);
    });
    return chartData;
  }

  onPeriodSelection(e) {
    const reportType = e.target.value;
    this.setState({ reportType, chartData: this.filterData(reportType) });
  }

  render() {
    const { reportType, chartData, height } = this.state;
    const { title } = this.props;
    const commentContent = this.getCommentContent(reportType);
    const leftColumnWidth = 24;

    return (
      <Fragment>
        <Row gutter={32}>
          <Col span={leftColumnWidth}>
            <div align="right">
              <Radio.Group onChange={this.onPeriodSelection} value={reportType}>
                <Radio value="t1">NMS Tier 1</Radio>
                <Radio value="t2">NMS Tier 2</Radio>
              </Radio.Group>
            </div>
          </Col>
        </Row>

        <Row gutter={32}>
          <Col span={leftColumnWidth}>
            <AtsMarketShare
              data={chartData}
              onResize={this.onResize}
              title={title}
            />
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

export default AtsMarketShareWithData;
