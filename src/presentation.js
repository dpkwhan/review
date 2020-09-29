// Import React
import React from "react";

// Import Spectacle Core tags
import { Deck, Box, FlexBox, FullScreen, Progress, Heading, Slide, Text, UnorderedList, ListItem } from "spectacle";
import { Row, Col, Tabs } from "antd";
import MarketShareByYearExchWithData from "./components/MarketShareByYearExchWithData";
import MarketShareByYearTapeACWithData from "./components/MarketShareByYearTapeACWithData";
import MarketVolumeChangeWithData from "./components/MarketVolumeChangeWithData";
import AtsMarketShareWithData from "./components/AtsMarketShareWithData";
import SpotlightEvent from "./components/SpotlightEvent";

import atsMarketShare from "./data/ats_market_share.json";
import atsMarketShareSelected from "./data/ats_market_share_selected.json";
import nonatsMarketShare from "./data/nonats_market_share.json";

import {
  CrownOutlined,
  AlertOutlined,
  DollarOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';

const { TabPane } = Tabs;

const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width="100%"
  >
    <Box padding="0 1em">
      <FullScreen color="black"/>
    </Box>
    <Box padding="1em">
      <Progress color="black"/>
    </Box>
  </FlexBox>
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transitionEffect={["fade"]} template={template}>
        <Slide backgroundColor="white">
          <Box margin="auto 0">
            <Heading transition={["fade"]} color="black" fontWeight="bold">
              U.S. Equities Market
            </Heading>
            <Text textAlign="center" color="black" fontWeight="bold">
              Year in Review: 2020
            </Text>
            <Text textAlign="center" color="blue">
              David Han
            </Text>
          </Box>
        </Slide>

        <Slide backgroundColor="white">
          <Text fontSize="3em" color="black" textAlign="left" fontWeight="bold">Agenda</Text>
          <Row>
            <Col span={12}>
              <UnorderedList fontSize="2.5em" color="black">
                <ListItem>U.S. Equities Market Share</ListItem>
                <ListItem>Unlisted Trading Privileges</ListItem>
                <ListItem>Evolution of Market Volume</ListItem>
                <ListItem>Dark Liquidity</ListItem>
                <ListItem>Event Driven Analytics</ListItem>
              </UnorderedList>
            </Col>
            <Col span={12}>
              <UnorderedList fontSize="2.5em" color="black">
                <ListItem>Odd-lot in Focus</ListItem>
                <ListItem>Navigating into Close</ListItem>
                <ListItem>Spotlight Events</ListItem>
              </UnorderedList>
            </Col>
          </Row>
        </Slide>
        <Slide backgroundColor="white">
          <Text fontSize="3em" color="black" textAlign="left" fontWeight="bold">
            Landscape of U.S. Equities Market
          </Text>
          <MarketShareByYearExchWithData />
        </Slide>

        <Slide backgroundColor="white">
          <Text fontSize="3em" color="black" textAlign="left" fontWeight="bold">
            UTP: NYSE vs NASDAQ
          </Text>
          <MarketShareByYearTapeACWithData />
        </Slide>

        <Slide backgroundColor="white">
          <Text fontSize="3em" color="black" textAlign="left" fontWeight="bold">
            Evolution of Market Volume
          </Text>
          <MarketVolumeChangeWithData />
        </Slide>

        <Slide backgroundColor="white">
          <Text fontSize="3em" color="black" textAlign="left" fontWeight="bold">
            ATS and Non-ATS Market Share
          </Text>

          <Row>
            <Col span={2} />
            <Col span={20}>
            <Tabs defaultActiveKey="1" animated={false}>
            <TabPane
              tab={
                <span>
                  <CrownOutlined />
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
                  <AlertOutlined />
                  ATS wtih Events
                </span>
              }
              key="2"
            >
              <AtsMarketShareWithData data={atsMarketShareSelected} />
            </TabPane>
            {/* <TabPane
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
            </TabPane> */}
            <TabPane
              tab={
                <span>
                  <CrownOutlined />
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
            {/* <TabPane
              tab={
                <span>
                  <Icon type="compass" />
                  ATS vs non-ATS
                </span>
              }
              key="6"
            >
              ATS vs non-ATS
            </TabPane> */}
          </Tabs>
            </Col>
            <Col span={2} />
          </Row>
        </Slide>

        <Slide backgroundColor="white">
          <Text fontSize="3em" color="black" textAlign="left" fontWeight="bold">
            Event Driven Analytics
          </Text>
          <Row>
          <Col span={2} />
          <Col span={20}>
          <Tabs defaultActiveKey="1" animated={false}>
            <TabPane
              tab={
                <span>
                  <DollarOutlined />
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
                  <AlertOutlined />
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
                  <AppstoreOutlined />
                  Stock Splits
                </span>
              }
              key="3"
            >
              Volume, Volume Profile
            </TabPane>
          </Tabs>
          </Col>
          <Col span={2} />
          </Row>
        </Slide>

        <Slide backgroundColor="white">
          <Text fontSize="3em" color="black" textAlign="left" fontWeight="bold">
            Odd-lot is not Odd
          </Text>
        </Slide>

        <Slide backgroundColor="white">
          <Text fontSize="3em" color="black" textAlign="left" fontWeight="bold">
            Navigating into Close
          </Text>
        </Slide>

        <Slide backgroundColor="white">
          <Text fontSize="3em" color="black" textAlign="left" fontWeight="bold">
            Machine Learning is Not a Silver Bullet
          </Text>
        </Slide>

        <Slide backgroundColor="white">
          <Text fontSize="3em" color="black" textAlign="left" fontWeight="bold">
            Spotlight Events
          </Text>
          <SpotlightEvent />
        </Slide>

        <Slide backgroundColor="white">
          <Text fontSize="3em" color="black" textAlign="left" fontWeight="bold">
            What's New?
          </Text>
        </Slide>
      </Deck>
    );
  }
}
