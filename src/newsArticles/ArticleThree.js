import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    container: {
      maxWidth: '700px',
      display: 'inline-block',
      paddingLeft: '2%',
      paddingRight: '2%',
      paddingTop: '20px',
      paddingBottom: '20px',
    },
    article: {
      paddingTop: '20px',
      textAlign: 'left',
    },
    image: {
      width: '100%',
      textAlign: 'center',
    }
  });
 
export default function ArticleThree() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.article} variant="h4">February Update</Typography>
      <Typography className={classes.article}>
          10th February 2020<br/>
          The club met for its annual dinner at the Golden Dragon where a good
          night was enjoyed by all. Although there were a number of late drop
          outs due to illness the turnout was good and the empty plates are
          a testament to the food. <br/><br/>

          The league has continued with an excellent win against University 'B'
          thanks to wins by Danny & John and a heroic draw by Barry which I'm 
          reliably told was quite something! With two games remaining against
          Kendal and University 'A', all is still to play for. Both will be
          incredibly tough tests however.<br/><br/>
      </Typography>
      <img className={classes.image} alt="club-dinner" src="/AnnualDinner1920.jpg"/>
      <Typography variant="body2">
          A good turnout for the annual dinner at The Golden Dragon.
      </Typography>
    </div>
  );
}
