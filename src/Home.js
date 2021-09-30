import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import theme from './theme';

const useStyles = makeStyles({
    center: {
      width: '100%',
      textAlign: 'center',
    },
    title: {
      paddingTop: '20px',
      fontSize: theme.typography.title.fontSize,
    },
    description: {
      width: '100%',
      paddingTop: '20px',
      paddingBottom: '20px',
      maxWidth: '700px',
      display: 'inline-block',
    },  
  });

export default function Home() {
    const classes = useStyles();
    return (
      <div className={classes.center}>
      <div className={classes.title}>
        <Typography className={classes.title} variant="h1">A Friendly Chess Club in the Heart of Lancaster</Typography>
      </div>
      <div className={classes.description}>
        <h4>Update 30/09/21: The new season has now begun and we are now meeting weekly
          as usual a the Reform club on Tuesday evenings.
        </h4>
        <Typography className={classes.description}>
          Based in the heart of Lancaster, UK, our historic chess club, which dates back
          to 1895, welcomes players of all ages and abilities to come and enjoy a game of chess.
          Be it for short, long, casual or competitive games there's something for everyone.
        </Typography>
        <Typography className={classes.description}>
          We meet weekly, and over the course of the year, highlights range from
          the round robin club chess championship (90 minutes), to the rapid play championship,
          as well as occasional blitz chess tournaments. And for players who prefer to 
          play casually, club nights always offer the opportunity to have a game.
        </Typography>
        <Typography className={classes.description}>
          If this sounds good, please see the information for club nights below - please
          do get in touch via e-mail and we look forward to welcoming you soon!
        </Typography>
      </div>
      </div>
    );
  }
