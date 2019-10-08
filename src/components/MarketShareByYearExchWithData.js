import React, { Component, Fragment } from "react";
import autoBind from "react-autobind";
import { Row, Col, Radio, Icon } from "antd";
import MarketShareByYearExch from "./MarketShareByYearExch";
import marketShareByYearExch from "../data/market_share_by_year_exch.json";

class MarketShareByYearExchWithData extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
    this.exchangeGroups = this.getExchangeGroups();
    this.state = {
      groupName: "all",
      chartData: this.filterData("all"),
      height: 300
    };
  }

  isInGroup(exch, groupName) {
    if (groupName === "all") return true;
    const groupMembers = this.exchangeGroups[groupName].venues;
    return groupMembers.includes(exch);
  }

  getExchangeGroups() {
    return {
      all: {
        content: (
          <div>
            <Row type="flex" justify="start">
              <Icon
                component={() => (
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                    alt="Flag of United States"
                    style={{
                      width: 75,
                      height: 40,
                      marginBottom: 20,
                      marginRight: 10
                    }}
                  />
                )}
              />
              <h5>Market Share</h5>
              <font size={4}>
                <ul className="comment-item">
                  <li>
                    NASDAQ's market share started to pick up over the last four
                    years.
                  </li>
                  <li>
                    NYSE's market share also observed a moderate increase in the
                    recent three years.
                  </li>
                  <li>Cboe is losing its market share year by year.</li>
                  <li>IEX momentum is still strong since its debut in 2013.</li>
                </ul>
              </font>
              <blockquote>
                <p class="myquotation">
                  Domains under heaven, after a long period of division, tends
                  to unite; after a long period of union, tends to divide.
                </p>
                <footer>--- Chinese Parable</footer>
              </blockquote>
            </Row>
          </div>
        )
      },
      cboe: {
        venues: ["CBOE", "CBOE BYX", "CBOE BZX", "CBOE EDGA", "CBOE EDGX"],
        content: (
          <div>
            <Row type="flex" justify="start">
              <Icon
                component={() => (
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Cboe_Global_Markets_Logo.svg"
                    alt="Cboe"
                    style={{ width: 117.5, height: 40, marginBottom: 20 }}
                  />
                )}
              />
              <font size={4}>
                Cboe intends to expand its equities business by acquiring BATS
                in 2017:
                <ul className="comment-item">
                  <li>
                    Cboe's market share has been decreasing since it announced
                    to acquire BATS in September 2016.
                  </li>
                  <li>
                    Cboe's market share peaked at 22% in 2012, but it dropped to
                    16.2% in 2019.
                  </li>
                </ul>
              </font>
            </Row>
          </div>
        )
      },
      nasdaq: {
        venues: ["NASDAQ", "NASDAQ BX", "NASDAQ ISE", "NASDAQ PSX"],
        content: (
          <div>
            <Row type="flex" justify="start">
              <Icon
                component={() => (
                  <img
                    src="https://new.nasdaq.com/themes/nsdq/dist/assets/images/logo.svg"
                    alt="Nasdaq"
                    style={{ width: 147, height: 42, marginBottom: 20 }}
                  />
                )}
              />
              <font size={4}>
                <ul className="comment-item">
                  <li>
                    NASDAQ keeps losing market share since 2008 and reaches its
                    lowest at 17.4% in 2016.
                  </li>
                  <li>
                    NASDAQ starts to gain more market share since 2017,
                    epecially in the traditional NASDAQ market.
                  </li>
                  <li>
                    NASDAQ Boston, an inverted venue, keeps losing market share.
                    It drops from 3.1% in 2017 to less than 2% in 2019.
                  </li>
                </ul>
              </font>
            </Row>
          </div>
        )
      },
      nyse: {
        venues: [
          "NYSE",
          "NYSE American",
          "NYSE Arca",
          "NYSE Chicago",
          "NYSE National"
        ],
        content: (
          <div>
            <Row type="flex" justify="start">
              <Icon
                component={() => (
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/93/NY_Stock_Exchange_logo.svg"
                    alt="nyse"
                    style={{ width: 40, height: 40, marginBottom: 20 }}
                  />
                )}
              />
              <font size={4}>
                <ul className="comment-item">
                  <li>NYSE's market share is very stable in recent years.</li>
                  <li>
                    NYSE National, an inverted venue, adds 1.2% of market share
                    to NYSE in 2019.
                  </li>
                  <li>
                    NYSE Arca keeps losing market share in the last 10 years.
                  </li>
                  <li>
                    NYSE American's market share never exceeds 0.5% in the last
                    10 years.
                  </li>
                </ul>
              </font>
            </Row>
          </div>
        )
      },
      inverted: {
        venues: ["CBOE BYX", "CBOE EDGA", "NASDAQ BX", "NYSE National"],
        content: (
          <div>
            <Row type="flex" justify="start">
              <h5>Inverted Venues</h5>
              <font size={4}>
                The inverted venues charge a fee for providing liquidity, but
                provide a rebate to liquidity takers:
                <ul className="comment-item">
                  <li>
                    The market share of inverted venues has been increasing
                    steadily since 2013 and reaches the peak at 9.8% in 2017.
                  </li>
                  <li>
                    Inverted venues' market share decreased over the last three
                    years.
                  </li>
                  <li>
                    NYSE National became an inverted venue on May 20, 2018.
                  </li>
                </ul>
              </font>
            </Row>
          </div>
        )
      },
      iex: {
        venues: ["IEX"],
        content: (
          <div>
            <Row type="flex" justify="start">
              <Icon
                component={() => (
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/5d/IEX_Group_Logo.svg"
                    alt="IEX"
                    style={{ width: 61.5, height: 40, marginBottom: 20 }}
                  />
                )}
              />
              <font size={4}>
                The Investors Exchange (IEX) the newest exchange in the US
                equities markets:
                <ul className="comment-item">
                  <li>It became an exchange in September 2016.</li>
                  <li>
                    Its market share is abount 1.5% before it became an
                    exchange.
                  </li>
                  <li>
                    Its market share jumped from 1.5% to 2.2% after becoming an
                    exchange.
                  </li>
                  <li>
                    IEX's market share increased by roughly 10% each year.
                  </li>
                </ul>
              </font>
            </Row>
          </div>
        )
      },
      trf: {
        venues: ["TRF"],
        content: (
          <div>
            <Row type="flex" justify="start">
              <Icon
                component={() => (
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/1/17/Financial_Industry_Regulatory_Authority_logo.svg"
                    alt="FINRA"
                    style={{ width: 150.5, height: 40, marginBottom: 20 }}
                  />
                )}
              />
              <font size={4}>
                The off-market volume is transacted outside of regular stock
                exchanges and reported to FINRA via TRF (Trade Reporting
                Facility):
                <ul className="comment-item">
                  <li>
                    The off-market volume includes trades from OTC
                    (Over-The-Counter) and ATS (Alternative Trading System)
                  </li>
                  <li>
                    It accounts for around 36%-37% over the last five years. Its
                    market share is fairely stable.
                  </li>
                </ul>
              </font>
            </Row>
          </div>
        )
      }
    };
  }

  onGroupSelection(e) {
    const groupName = e.target.value;
    this.setState({ groupName, chartData: this.filterData(groupName) });
  }

  filterData(groupName) {
    const chartData = {
      xAxisData: marketShareByYearExch.year,
      legendData: [],
      series: []
    };
    let processedData = {};
    if (groupName === "all") {
      Object.keys(marketShareByYearExch).forEach(key => {
        if (key === "year") return;
        const exchData = marketShareByYearExch[key];
        const name = key.split(" ")[0];
        if (processedData.hasOwnProperty(name)) {
          exchData.forEach(function(v, i) {
            processedData[name][i] += v;
          });
        } else {
          // Make sure to clone the array
          processedData[name] = exchData.slice(0);
        }
      });
    } else {
      processedData = marketShareByYearExch;
    }

    Object.keys(processedData).forEach(key => {
      if (key === "year") return;
      const name = key;
      if (this.isInGroup(name, groupName)) {
        const dataPoints = {
          name,
          type: "bar",
          barMaxWidth: 50,
          stack: "mktShare",
          itemStyle: { normal: { areaStyle: { type: "default" } } },
          data: processedData[name]
        };
        if (groupName === "inverted" && name === "NYSE National") {
          marketShareByYearExch.year.forEach(function(year, i) {
            if (year <= 2017) {
              dataPoints.data[i] = 0;
            }
          });
        }
        chartData.legendData.push(name);
        chartData.series.push(dataPoints);
      }
    });
    return chartData;
  }

  onResize(height) {
    this.setState({ height });
  }

  render() {
    const { groupName, chartData, height } = this.state;
    const commentContent = this.exchangeGroups[groupName].content;
    const leftColumnWidth = 14;

    return (
      <Fragment>
        <Row gutter={32}>
          <Col span={leftColumnWidth}>
            <div align="right">
              <Radio.Group onChange={this.onGroupSelection} value={groupName}>
                <Radio value="all">All</Radio>
                <Radio value="cboe">CBOE</Radio>
                <Radio value="nasdaq">NASDAQ</Radio>
                <Radio value="nyse">NYSE</Radio>
                <Radio value="inverted">Inverted</Radio>
                <Radio value="iex">IEX</Radio>
                <Radio value="trf">Off-Exchange</Radio>
              </Radio.Group>
            </div>
          </Col>
        </Row>

        <Row gutter={32}>
          <Col span={leftColumnWidth}>
            <MarketShareByYearExch data={chartData} onResize={this.onResize} />
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

export default MarketShareByYearExchWithData;
