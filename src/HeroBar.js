import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import theme from './theme';

const useStyles = makeStyles({
  toolbar: {
    background: theme.background,
    fontSize: '20px',
    justifyContent: 'center',
    display: 'flex',
    width: '100%',
  },
  text: {
    color: 'white',
  },
  link: {
    textDecoration: 'none'
  }
});

const Hero = () => {
  const classes = useStyles();
  return (
    <div className={classes.toolbar}>
        <NavLink className={classes.link} to="/"><Button><Typography className={classes.text}>Home</Typography></Button></NavLink>
        <NavLink className={classes.link} to="/news"><Button><Typography className={classes.text}>Latest News</Typography></Button></NavLink>
        <NavLink className={classes.link} to="/officers"><Button><Typography className={classes.text}>Club Officers</Typography></Button></NavLink>
        <NavLink className={classes.link} to="/history"><Button><Typography className={classes.text}>History</Typography></Button></NavLink>
    </div>
    )
}

export default Hero;
