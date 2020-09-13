import React from "react";
import { createBrowserHistory } from "history";
import { Route, Switch } from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
// import Container from '@material-ui/core/Container';

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import Home from "./Sections/Home.js";
import AboutUs from "./Sections/AboutUs.js";
import Contact from "./Sections/Contact.js";
import Faq from './Sections/Faq';
import TermsOfService from './Sections/TermsOfService';
import PrivacyPolicy from './Sections/PrivacyPolicy';
import GetKeyword from "./Sections/BrandName/GetKeyword";
import GetDescription from "./Sections/BrandName/GetDescription";
import { Container } from "@material-ui/core";

var hist = createBrowserHistory();
const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Namedyno"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "black"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <Container>
            <GridItem xs={12} sm={12} md={12}>
              <center>  
                <h1 className={classes.title}>My Brand, My Reputation.</h1>
                <h4>
                  A brand is the very reputation of a company.
                </h4>
                <br />
                <Switch>
                  <Route path="/Keyword" component={GetKeyword}/>
                  <Route path="/description" component={GetDescription} />
                  <Route path="/about" />
                  <Route path="/contact" />
                  <Route path="/privacy-policy" />
                  <Route path="/terms-of-service" />
                  <Route path="/faq" />
                  <Route path="/" component={GetKeyword} />
                </Switch>
              </center>
            </GridItem>
          </Container>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/about" component={AboutUs} />
            <Route path="/contact" component={Contact} />
            <Route path="/privacy-policy" component={PrivacyPolicy} />
            <Route path="/terms-of-service" component={TermsOfService} />
            <Route path="/faq" component={Faq} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
}
