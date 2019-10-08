// Import React
import React from "react";

// Import Spectacle Core tags
import { Deck, Heading, Slide, Text, List, ListItem } from "spectacle";
import { Row, Col } from "antd";
import MarketShareByYearExchWithData from "./components/MarketShareByYearExchWithData";

// Import theme
import createTheme from "spectacle/lib/themes/default";

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
        // contentWidth={"95%"}
        // contentHeight={"100%"}
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
      </Deck>
    );
  }
}
