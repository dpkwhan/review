import React, { Component, Fragment } from "react";
import autoBind from "react-autobind";
import { Row, Col } from "antd";
import Calendar from "./Calendar";
import MarketShareByYearTapeAC from "./MarketShareByYearExch";
import marketShareTapeAC from "../data/market_share_by_year_ac.json";

class MarketShareByYearTapeACWithData extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
    this.state = { chartData: this.filterData(), height: 300 };
  }

  onResize(height) {
    this.setState({ height });
  }

  filterData() {
    const chartData = {
      xAxisData: marketShareTapeAC.month,
      legendData: [],
      series: []
    };
    Object.keys(marketShareTapeAC).forEach(key => {
      if (key === "month") return;
      const name =
        key === "nasdaqMarketShareInTapeA"
          ? "Tape A Traded by NASDAQ"
          : "Tape C Traded by NYSE";
      const dataPoints = {
        name,
        type: "line",
        barMaxWidth: 50,
        lineStyle: {
          type: key === "nasdaqMarketShareInTapeA" ? "solid" : "dotted"
        },
        data: marketShareTapeAC[key]
      };
      chartData.legendData.push(name);
      chartData.series.push(dataPoints);
    });
    return chartData;
  }

  getCommentContent() {
    return (
      <div>
        <Row type="flex" justify="space-around" align="middle">
          <Col>
            <Calendar
              month="October"
              day={22}
              dow="1994"
              style={{ width: 60, height: 60 }}
            />
          </Col>
          <Col>
            <Calendar
              month="April"
              day={9}
              dow="2018"
              style={{ width: 60, height: 60 }}
            />
          </Col>
        </Row>

        <Row type="flex" justify="start" style={{ marginTop: 30 }}>
          <font size={4}>
            Under UTP, NYSE-listed stocks can be traded on NASDAQ, but
            NASDAQ-listed stocks cannot be trade on NYSE.
            <ul className="comment-item">
              <li>
                NYSE's market share in NASDAQ-listed stocks increases gradually,
                but has been stagnant around 1.8% recently.
              </li>
              <li>
                NASDAQ has been gaining market shares in NYSE-listed stocks
                since Apr 2018, <i>i.e.</i> increasing from 9.8% to 13.4%.
              </li>
            </ul>
          </font>
        </Row>
      </div>
    );
  }

  render() {
    const { chartData, height } = this.state;
    const commentContent = this.getCommentContent();

    return (
      <Fragment>
        <Row gutter={32}>
          <Col span={14}>
            <MarketShareByYearTapeAC
              data={chartData}
              onResize={this.onResize}
            />
          </Col>
          <Col span={10}>
            <Row className="comments" gutter={8}>
              <Col span={20}>
                <div
                  className="comments-content"
                  style={{ height: Math.max(400, height - 100) }}
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

export default MarketShareByYearTapeACWithData;
