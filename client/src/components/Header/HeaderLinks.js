/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="webname-generator"
          title="Generate website name"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Link to='/keyword' style={{color:'white'}}>
            <Button className={classes.navLink} color="primary" size="sm">Webname Search</Button>
          </Link>
        </Tooltip>
        &nbsp;&nbsp;&nbsp; |  &nbsp;&nbsp;&nbsp;
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="newuser"
          title="New user"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Link to='/' style={{color:'white'}}>
            <Button className={classes.navLink} color="primary" size="sm">New User</Button>
          </Link>
        </Tooltip>&nbsp;&nbsp;&nbsp;
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="faq"
          title="Frequently asked questions"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Link to='/faq' style={{color:'white'}}>
            <Button className={classes.navLink} color="primary" size="sm">FAQ</Button>
          </Link>
        </Tooltip>&nbsp;&nbsp;&nbsp;
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="aboutUs"
          title="About us"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Link to='/about' style={{color:'white'}}>
            <Button className={classes.navLink} color="primary" size="sm">About Us</Button>
          </Link>
        </Tooltip>&nbsp;&nbsp;&nbsp;
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="contact"
          title="Contact us"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Link to='/contact' style={{color:'white'}}>
            <Button className={classes.navLink} color="primary" size="sm">Contact</Button>
          </Link>
        </Tooltip>
      </ListItem>
    </List>
  );
}
