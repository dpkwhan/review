import React, { Component } from "react";
import autoBind from "react-autobind";
import { Row, Col, Steps } from "antd";
import Calendar from "./Calendar";

const { Step } = Steps;

const steps = [
  {
    title: "NYSEChicago",
    content: (
      <div>
        <Row type="flex" justify="space-around" align="middle">
          <Col span={4}>
            <Calendar
              month="February"
              day={14}
              dow="Thursday"
              style={{ width: 60, height: 60 }}
            />
          </Col>
          <Col span={20}>
            <h4>
              Chicago Stock Exchange was renamed as <i>NYSE Chicago</i>
            </h4>
            <ul>
              <font size={5} color="black">
                <li>
                  NYSE agreed to acquire 136-yearold Chicago Stock Exchange in
                  April 2018.
                </li>
                <li>The acquisition was completed in July 2018.</li>
                <li>
                  It has only 0.44% of market share in equities during the 10
                  years from 2010 to 2019.
                </li>
                <li>Its quotes are at NBBO only x% of time in 2019.</li>
              </font>
            </ul>
          </Col>
        </Row>
      </div>
    )
  },
  {
    title: "TransactionFeePilotAppeals",
    content: (
      <div>
        <Row type="flex" justify="space-around" align="middle">
          <Col span={4}>
            <Calendar
              month="February"
              day={15}
              dow="Friday"
              style={{ width: 60, height: 60 }}
            />
          </Col>
          <Col span={20}>
            <h4>
              NYSE, NASDAQ and CBOE Sued SEC Transaction Fee Pilot Program
            </h4>
            <ul>
              <font size={5} color="black">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </font>
            </ul>
          </Col>
        </Row>
      </div>
    )
  },
  {
    title: "CboeMOC",
    content: (
      <div>
        <Row type="flex" justify="space-around" align="middle">
          <Col span={4}>
            <Calendar
              month="October"
              day={2}
              dow="Wednesday"
              style={{ width: 60, height: 60 }}
            />
          </Col>
          <Col span={20}>
            <h3>SIP Operating Committees Issue Odd Lot Proposal</h3>
            <ul>
              <font size={5} color="black">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </font>
            </ul>
          </Col>
        </Row>
      </div>
    )
  },
  {
    title: "CboeMOC",
    content: (
      <div>
        <Row type="flex" justify="space-around" align="middle">
          <Col span={4}>
            <Calendar
              month="October"
              day={15}
              dow="Tuesday"
              style={{ width: 60, height: 60 }}
            />
          </Col>
          <Col span={20}>
            <h3>Cboe Market On Close</h3>
            <ul>
            <font size={5} color="black">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </font>
            </ul>
          </Col>
        </Row>
      </div>
    )
  },
  {
    title: "NasdaqCloseAuction",
    content: (
      <div>
        <Row type="flex" justify="space-around" align="middle">
          <Col span={4}>
            <Calendar
              month="Novermber"
              day={4}
              dow="Monday"
              style={{ width: 60, height: 60 }}
            />
          </Col>
          <Col span={20}>
            <h3>Nasdaq Closing Auction Enhancements</h3>
            <ul>
              <font size={5} color="black">
                <li>http://www.nasdaqtrader.com/TraderNews.aspx?id=ETA2019-66</li>
              </font>
            </ul>
          </Col>
        </Row>
      </div>
    )
  }
];

class SpotlightEvent extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      current: 0
    };
  }

  onChange(current) {
    this.setState({ current });
  }

  render() {
    const { current } = this.state;

    return (
      <div style={{ margin: 50 }}>
        <Steps current={current} onChange={this.onChange}>
          {steps.map(item => (
            <Step key={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
      </div>
    );
  }
}

export default SpotlightEvent;
