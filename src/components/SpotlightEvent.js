import React, { Component } from "react";
import autoBind from "react-autobind";
import { Row, Col, Steps } from "antd";
import Calendar from "./Calendar";

const { Step } = Steps;

const steps = [
  {
    title: "CboeMOC",
    content: (
      <div>
        <Row type="flex" justify="space-around" align="middle">
          <Col span={4}>
            <Calendar
              month="March"
              day={6}
              dow="Friday"
              style={{ width: 60, height: 60 }}
            />
          </Col>
          <Col span={20}>
            <h1>Cboe Market On Close</h1>
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
  }, {
    title: "NJFTT",
    content: (
      <div>
        <Row type="flex" justify="space-around" align="middle">
          <Col span={4}>
            <Calendar
              month="July"
              day={16}
              dow="Thursday"
              style={{ width: 60, height: 60 }}
            />
          </Col>
          <Col span={20}>
            <h1>FTT was Proposed in New Jersey</h1>
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
  }, {
    title: "LTSE",
    content: (
      <div>
        <Row type="flex" justify="space-around" align="middle">
          <Col span={4}>
            <Calendar
              month="August"
              day={28}
              dow="Friday"
              style={{ width: 60, height: 60 }}
            />
          </Col>
          <Col span={20}>
            <h1>Long-Term Stock Exchange Started Trading</h1>
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
  }, {
    title: "MEMX",
    content: (
      <div>
        <Row type="flex" justify="space-around" align="middle">
          <Col span={4}>
            <Calendar
              month="September"
              day={21}
              dow="Monday"
              style={{ width: 60, height: 60 }}
            />
          </Col>
          <Col span={20}>
            <h1>Members Stock Exchange Started Trading</h1>
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
