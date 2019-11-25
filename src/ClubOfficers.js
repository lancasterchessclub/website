import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  pictures: {
    alignItems: 'center',
    textAlign: 'center',
  },  
  image: {
    height: '100%',
    width: '100%',
  },
  container: {
    width: '30%',
    display: 'inline-block',
  },
  title: {
    paddingTop: '20px',
    paddingBottom: '20px',
  },
  officer: {
    display: 'inline',
  }
});

export default function ClubOfficers() {
  const classes = useStyles();
    return (
      <div className={classes.pictures}>
        <div className={classes.container}>
        <Typography className={classes.title} variant="h4">Club Officers</Typography>
        <Typography>Club Chair - Brian Cornish</Typography>
        <Typography>Club Secretary - Barry Hymer</Typography>
        <img className={classes.image} src="/BarryHymerSmall.jpg" />
        <Typography>Club Treasurer - David Fatkin</Typography>
        <img className={classes.image} src="/DavidFatkinSmall.jpg" />
        <Typography>Dragons Team Captain - Jonathan Verden</Typography>
        <Typography>Club Communications Officer - Iain Walmsley</Typography>
        </div>
      </div>
    );
  }