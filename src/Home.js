import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { textAlign } from '@material-ui/system';

const useStyles = makeStyles({
    center: {
      width: '100%',
      textAlign: 'center',
    },
    title: {
      paddingTop: '20px',
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
        <Typography variant="h4">Welcome to the Lancaster Chess Club</Typography>
      </div>
      <div className={classes.description}>
        <Typography className={classes.description}>
          Based in the heart of Lancaster, Lancashire, we welcome alll players
          to come and join us. Be it for casual or competitive games, discussion of
          theory or general socialization, there is room for everyone to play at our club.
        </Typography>
        <Typography className={classes.description}>
          Featuring longstanding and new members of all abilities, the club
          meets twice weekly to engage in chess ranging from the yearly round robin
          Club Championship (90 minutes), to the rapid play Club Championship, to the yearly
          Blitz tournament. 
        </Typography>
        <Typography className={classes.description}>
          If this sounds good please see the information for club nights below - we look 
          forward to welcoming you soon!
        </Typography>
      </div>
      </div>
    );
  }