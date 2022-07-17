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
        <br/>
        <Typography>Club Secretary - Joss Waite</Typography>
        <img className={classes.image} src="/JossWaiteSmall.jpg" alt="jossw"/>
        <br/>
        <Typography>Club Treasurer - David Fatkin</Typography>
        <img className={classes.image} src="/DavidFatkinSmall.jpg" alt="davidf"/>
        <br/>
        <Typography>Dragons Team Captain - Jonathan Verden</Typography>
        <img className={classes.image} src="/JonVerdenSmall.jpg" alt="jonv"/>
        <Typography>Club Communications Officer - Iain Walmsley</Typography>
        <img className={classes.image} src="/IainWalmsleySmall.jpg" alt="iainw"/>
        <br/>
        <Typography>Club Media Officer - Dan Holden</Typography>
        <img className={classes.image} src="/DanHoldenSmall.jpg" alt="danh"/>
        </div>
      </div>
    );
  }