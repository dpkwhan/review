// Import React
import React from "react";

// Import Spectacle Core tags
import { Deck, Heading, Slide, Text, List, ListItem } from "spectacle";
import { Row, Col, Tabs, Icon } from "antd";
import MarketShareByYearExchWithData from "./components/MarketShareByYearExchWithData";
import MarketShareByYearTapeACWithData from "./components/MarketShareByYearTapeACWithData";
import MarketVolumeChangeWithData from "./components/MarketVolumeChangeWithData";
import AtsMarketShareWithData from "./components/AtsMarketShareWithData";
import SpotlightEvent from "./components/SpotlightEvent";

import atsMarketShare from "./data/ats_market_share.json";
import atsMarketShareSelected from "./data/ats_market_share_selected.json";
import nonatsMarketShare from "./data/nonats_market_share.json";

// Import theme
import createTheme from "spectacle/lib/themes/default";

const { TabPane } = Tabs;

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "black",
    tertiary: "blue",
    quaternary: "black"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["fade"]}
        theme={theme}
        transitionDuration={500}
        contentWidth={"95%"}
        contentHeight={"100%"}
      >
        <Slide bgColor="primary">
          <Heading
            transition={["fade"]}
            size={1}
            caps
            lineHeight={1}
            textColor="secondary"
            margin="0px 0px 50px 0px"
          >
            U.S. Equities Market
          </Heading>
          <Heading size={3} caps textColor="tertiary" margin="0px 0px 50px 0px">
            Year In Review: 2019
          </Heading>
          <Text
            textSize="1.5em"
            margin="0px 0px 50px 0px"
            bold
            textColor="black"
          >
            Presented by
          </Text>
          <Text
            textSize="1.0em"
            margin="0px 0px 30px 0px"
            bold
            textColor="blue"
          >
            David Han
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Row>
            <Col span={6}></Col>
            <Col span={12}>
              <Text
                textSize="1.5em"
                margin="0px 0px 30px 0px"
                bold
                textColor="black"
                style={{ textAlign: "left" }}
              >
                Agenda
              </Text>
              <List>
                <ListItem>U.S. Equities Market Share</ListItem>
                <ListItem>Unlisted Trading Privileges</ListItem>
                <ListItem>Evolution of Market Volume</ListItem>
                <ListItem>Dark Liquidity</ListItem>
                <ListItem>Event Driven Analytics</ListItem>
                <ListItem>Odd-lot in Focus</ListItem>
                <ListItem>Navigating into Close</ListItem>
                <ListItem>Machine Learning is Not a Silver Bullet</ListItem>
                <ListItem>Spotlight Events</ListItem>
                <ListItem>What's New?</ListItem>
              </List>
            </Col>
            <Col span={6}></Col>
          </Row>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text
            textSize="1.5em"
            margin="0px 0px 30px 0px"
            bold
            textColor="black"
          >
            Landscape of U.S. Equities Market
          </Text>
          <MarketShareByYearExchWithData />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Text
            textSize="1.5em"
            margin="0px 0px 30px 0px"
            bold
            textColor="black"
          >
            UTP: NYSE vs NASDAQ
          </Text>
          <MarketShareByYearTapeACWithData />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Text
            textSize="1.5em"
            margin="0px 0px 30px 0px"
            bold
            textColor="black"
          >
            Evolution of Market Volume
          </Text>
          <MarketVolumeChangeWithData />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Text
            textSize="1.5em"
            margin="0px 0px 30px 0px"
            bold
            textColor="black"
          >
            ATS and Non-ATS Market Share
          </Text>
          <Tabs defaultActiveKey="1" animated={false}>
            <TabPane
              tab={
                <span>
                  <Icon type="crown" />
                  Top 10 ATS
                </span>
              }
              key="1"
            >
              <AtsMarketShareWithData
                data={atsMarketShare}
                title="ATS Market Share"
              />
            </TabPane>
            <TabPane
              tab={
                <span>
                  <Icon type="alert" />
                  ATS wtih Events
                </span>
              }
              key="2"
            >
              <AtsMarketShareWithData data={atsMarketShareSelected} />
            </TabPane>
            <TabPane
              tab={
                <span>
                  <Icon type="appstore" />
                  By Liquidity Group
                </span>
              }
              key="3"
            >
              ATS Volume By Liquidity Group
            </TabPane>
            <TabPane
              tab={
                <span>
                  <Icon type="dollar" />
                  By Price Level
                </span>
              }
              key="4"
            >
              ATS Volume By Price Level
            </TabPane>
            <TabPane
              tab={
                <span>
                  <Icon type="crown" />
                  Top 10 non-ATS
                </span>
              }
              key="5"
            >
              <AtsMarketShareWithData
                data={nonatsMarketShare}
                title="Non-ATS Market Share"
              />
            </TabPane>
            <TabPane
              tab={
                <span>
                  <Icon type="compass" />
                  ATS vs non-ATS
                </span>
              }
              key="6"
            >
              ATS vs non-ATS
            </TabPane>
          </Tabs>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Text
            textSize="1.5em"
            margin="0px 0px 30px 0px"
            bold
            textColor="black"
          >
            Event Driven Analytics
          </Text>
          <Tabs defaultActiveKey="1" animated={false}>
            <TabPane
              tab={
                <span>
                  <Icon type="dollar" />
                  Earnings Announcement
                </span>
              }
              key="1"
            >
              Volume, Volume Profile, Intraday Price Movement
            </TabPane>
            <TabPane
              tab={
                <span>
                  <Icon type="alert" />
                  Index Rebalance
                </span>
              }
              key="2"
            >
              Volume, Volume Profile, Intraday Price Movement
            </TabPane>
            <TabPane
              tab={
                <span>
                  <Icon type="appstore" />
                  Stock Splits
                </span>
              }
              key="3"
            >
              Volume, Volume Profile
            </TabPane>
          </Tabs>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Text
            textSize="1.5em"
            margin="0px 0px 30px 0px"
            bold
            textColor="black"
          >
            Odd-lot is not Odd
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Text
            textSize="1.5em"
            margin="0px 0px 30px 0px"
            bold
            textColor="black"
          >
            Navigating into Close
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Text
            textSize="1.5em"
            margin="0px 0px 30px 0px"
            bold
            textColor="black"
          >
            Machine Learning is Not a Silver Bullet
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Text
            textSize="1.5em"
            margin="0px 0px 30px 0px"
            bold
            textColor="black"
          >
            Spotlight Events
          </Text>
          <SpotlightEvent />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Text
            textSize="1.5em"
            margin="0px 0px 30px 0px"
            bold
            textColor="black"
          >
            What's New?
          </Text>
        </Slide>
      </Deck>
    );
  }
}
