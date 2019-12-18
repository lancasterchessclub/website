import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Iframe from 'react-iframe'

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
 
export default function ArticleTwo() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.article} variant="h4">December Catchup</Typography>
      <Typography className={classes.article}>
          18th December 2019<br/>
          With a delay to the match vs University 'A', it has been a quiet few
          weeks on the league front, but club matches have continued apace. Now
          and then we'll include interesting matches, of which one quickplay game
          is shown below. I (Iain) ended up losing this one unfortunately, but it was an
          excellent and instructive game.<br/><br/>
      </Typography>
      <Iframe url="https://lichess.org/study/embed/BYCtAry2/bBnYd2u2"
        width="600"
        height="371"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
    </div>
  );
}
