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
 
export default function ArticleOne() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.article} variant="h4">League Roundup</Typography>
      <Typography className={classes.article}>
          30th November 2019
      </Typography>
      <Typography className={classes.article} variant="body2">
          The Dragons have made a rollercoaster start to the season
          consisting of a disappointing 4-0 loss to Morecambe 'B', followed by
          an excellent bounceback to draw Morecambe 'A' 2-2 thanks to excellent 
          wins by Danny and Lawrence.<br/><br/>
          Most recently the Dragons defeated Bare Village with a score of 4-0,
          where Barry, Danny, Lawrence & Jonathan all registered wins to give us
          our first victory of the season.<br/><br/>
          Next up is a tough fixture versus University 'A' in one of the
          the hardest fixture of the year.<br/><br/>
      </Typography>
      <img className={classes.image} src="/Dragons1920.JPG"/>
      <Typography variant="body2">
          From left to right: Danny, Lawrence, Barry & Jonathan.
      </Typography>
    </div>
  );
}