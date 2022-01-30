import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import theme from './theme';

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
    maxWidth: '700px',
    display: 'inline-block',
  },
  title: {
    paddingTop: '20px',
    paddingBottom: '20px',
    fontSize: theme.typography.title.fontSize,
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
        <Typography className={classes.title} variant="h1">Club Officers</Typography>
        <Typography>Club Chair - Lawrence Bland</Typography>
        <img className={classes.image} src="/LawrenceBlandSmall.jpg" alt="lawrenceb" />
        <Typography>Club Secretary - Barry Hymer</Typography>
        <img className={classes.image} src="/BarryHymerSmall.jpg" alt="barryh" />
        <Typography>Club Treasurer - David Fatkin</Typography>
        <img className={classes.image} src="/DavidFatkinSmall.jpg" alt="davidf"/>
        <Typography>Dragons Team Captain - Jonathan Verden</Typography>
        <Typography>Club Communications Officer - Iain Walmsley</Typography>
        <img className={classes.image} src="/IainWalmsleySmall.jpg" alt="iainw"/>
        </div>
      </div>
    );
  }