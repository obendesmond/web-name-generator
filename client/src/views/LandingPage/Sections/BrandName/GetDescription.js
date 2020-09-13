import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Button from "components/CustomButtons/Button.js";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function GetDescription() {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <Link to='/keyword'>
        <IconButton className={classes.iconButton} aria-label="menu">
          <ArrowBackIcon />
        </IconButton>
      </Link>
      <InputBase
        className={classes.input}
        placeholder="short description"
        inputProps={{ 'aria-label': 'short description' }}
      />
      <Divider className={classes.divider} orientation="vertical" />
      <Button variant="contained" size="md" color="primary" className={classes.margin}>
          Generate
      </Button>
    </Paper>
  );
}

