/*eslint-disable*/
import React from "react";
import { Link } from 'react-router-dom';
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
          <ListItem className={classes.inlineBlock}>
              <Link to="/faq" className={classes.block}>
                FAQ
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link to="/about" className={classes.block}>
                About Us
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link to="/contact" className={classes.block}>
                Contact
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link to="/terms-of-service" className={classes.block}>
                Terms Of Service
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link to="/privacy-policy" className={classes.block}>
                Provacry Policy
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <ButtonGroup style={{marginBottom: '-10px'}} style={{color:'#9C27B0'}} aria-label="outlined primary button group">
                <Button style={{color:'#9C27B0'}} aria-label="upload picture" component="span">
                  <FacebookIcon />
                </Button>
                <Button style={{color:'#9C27B0'}} aria-label="upload picture" component="span">
                  <InstagramIcon />
                </Button>
                <Button style={{color:'#9C27B0'}} aria-label="upload picture" component="span">
                  <TwitterIcon />
                </Button>
              </ButtonGroup>
            </ListItem>
            
          </List>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
