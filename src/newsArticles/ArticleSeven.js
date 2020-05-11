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
 
export default function ArticleSeven() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.article} variant="h4">Dick Collins vs Danny McMenamin</Typography>
      <Typography className={classes.article}>
        11th May 2020<br/>
        
        The below text and game was supplied by Danny McMenamin. Dick forwarded me his annotations from 
        the same exact game shortly before he passed away which have also been included. Click 
        bottom right to expand annotations on Lichess.<br/><br/>

        The game was played between Dick Collins (White) Danny McMenamin (Black) in the 
        semi-finals of the Individual level competition 21/1/2020. The game wasn't the best
        but shows good resilience and many tricks and bluffs, and blunders. Fun game with
        chances for both sides. Game ends in resignation by black due to over looking Dicks
        defensive trick.<br/><br/>
 
        Interesting game and the last I played against Dick, gone but won't be forgotten. <br/><br/>
      </Typography>
      <Iframe url="https://lichess.org/study/embed/SNr5GtWz/gsGj8Q5a"
        width="600"
        height="371"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
    </div>
  );
}