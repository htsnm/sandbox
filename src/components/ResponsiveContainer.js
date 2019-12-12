import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Button,
  Container,
  Dropdown,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";

// import HomepageHeading from "./HomepageHeading";
import HomePageSlider from "./HomePageSlider";

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

const aboutUsOptions = [
  { key: 1, text: "Mission Statement", value: "mission" },
  { key: 2, text: "Board Members", value: "board" }
];

const eventOptions = [
  { key: 1, text: "Daily Events", value: "daily" },
  { key: 2, text: "Annual Events", value: "annual" }
];

const galleryOptions = [
  { key: 1, text: "Photos", value: "photos" },
  { key: 2, text: "Videos", value: "videos" }
];

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = { activeItem: "home" };

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;
    const { activeItem } = this.state;

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            className = "bg-orange"         
            textAlign="center"
            style={{ padding: "1em 0em" }}
            vertical
          >
            <a href="./" class="ui image">
              <img
                alt="banner"
                src="http://htsnm.dreamhosters.com/wp-content/uploads/2011/02/copy-cropped-banner_sandia_zia.jpg"
              />
            </a>
            <Menu
              fixed={fixed ? "top" : null}              
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <Menu.Item
                  name="home"
                  active={activeItem === "home"}
                  onClick={this.handleItemClick}
                >
                  Home
                </Menu.Item>

                <Dropdown
                  item
                  simple
                  text="About Us"
                  options={aboutUsOptions}
                />

                <Dropdown item simple text="Events" options={eventOptions} />

                <Dropdown item simple text="Gallery" options={galleryOptions} />

                {/* <Icon circular name='facebook square big' /> */}
                <Menu.Item position="right">
                  <Button as="a">
                    Donate
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomePageSlider />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

class MobileContainer extends Component {
  state = {};
  handleSidebarHide = () => this.setState({ sidebarOpened: false });
  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <a href="./" class="ui fluid image">
          <img
            alt="banner"
            src="http://htsnm.dreamhosters.com/wp-content/uploads/2011/02/copy-cropped-banner_sandia_zia.jpg"
          />
        </a>

        <Sidebar
          as={Menu}
          animation="push"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as="a" active>
            Home
          </Menu.Item>
          <Menu.Item as="a">Work</Menu.Item>
          <Menu.Item as="a">Company</Menu.Item>
          <Menu.Item as="a">Careers</Menu.Item>
          <Menu.Item as="a">Log in</Menu.Item>
          <Menu.Item as="a">Sign Up</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign="center"
            style={{ padding: "1em 0em" }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Item position="right">
                  <Button as="a" inverted>
                    Log in
                  </Button>
                  <Button as="a" inverted style={{ marginLeft: "0.5em" }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
            {/* <HomepageHeading mobile /> */}
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

export default ResponsiveContainer;
