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
 
export default function ArticleSix() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.article} variant="h4">Richard A. "Dick" Collins, 1944-2020</Typography>
      <Typography className={classes.article}>
        14th April 2020<br/>
          
        It is with great sadness that we report the unexpected death of Dick Collins on Tuesday 7th April 2020,
        reportedly of a heart attack. Dick had an association with our club going back many decades, and though 
        he had played for Morecambe in team competitions in recent years, he also retained his membership of LCC
        and was a familiar sight to all of our members. Dick was a mainstay of chess locally and more widely in 
        the NW through his play for Lancashire in county chess, and Manchester Manticores in the 4NCL league. I
        am reliably informed that in the '70s and '80s Dick was one of the strongest players in the NW, playing
        off a peak grading in excess of 200, and though this had dropped a good deal in recent years, he remained
        a formidable and competitive opponent to all but the very strongest. No doubt there will be fuller and
        more detailed tributes to Dick appearing in many places over the weeks to come, but we wish to pay our
        own tribute here to a fine player, a valued and popular member of LCC, and a real gentleman.<br/><br/>

        The game below has no great distinction, other than it was probably Dick's last competitive game, and
        it reveals his obstinacy when defending a cramped position. It was played in the final of this year's
        league Level competition - a tournament which Dick had won on countless occasions. At the start of the
        game Dick gestured cheerily to Phil Seery, whom he'd played in the final of the same competition back in
        the '70s. None of us knew this was to be Dick's final contribution. It concluded, perhaps fittingly, with
        a draw - Dick's preferred result in recent years. We had arranged to play the rematch the following week,
        but by then social distancing measures had taken effect, and that rematch never took place. RIP Dick.
        <br/><br/>
      </Typography>
      <Iframe url="https://lichess.org/study/embed/Y2clVLie/UiQWUQ6c"
        width="600"
        height="371"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
    </div>
  );
}