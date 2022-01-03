import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import theme from './theme';
import Article from './newsArticles/ArticleMD';

const useStyles = makeStyles({
    container: {
      width: '70%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    title: {
      paddingTop: '20px',
      textAlign: 'center',
      fontSize: theme.typography.title.fontSize,
    },
  });

export default function News() {
  const classes = useStyles();

  const files = [
    './12.md',
    './11.md',
    './10.md',
    './9.md',
    './8.md',
    './7.md',
    './6.md',
    './5.md',
    './4.md',
    './3.md',
    './2.md',
    './1.md',
  ];

  return (
    <div className={classes.container}>
      <Typography className={classes.title} variant="h1">News</Typography>
      {files.map(file => <Article path={file} key={file}/>)}
    </div>
  );
}
