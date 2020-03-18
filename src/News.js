import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import theme from './theme';
import ArticleOne from './newsArticles/ArticleOne';
import ArticleTwo from './newsArticles/ArticleTwo';
import ArticleThree from './newsArticles/ArticleThree';
import ArticleFour from './newsArticles/ArticleFour';
import ArticleFive from './newsArticles/ArticleFive';


const useStyles = makeStyles({
    container: {
      width: '100%',
      alignItems: 'center',
      textAlign: 'center',
    },
    title: {
      paddingTop: '20px',
      fontSize: theme.typography.title.fontSize,
    },
    articles: {
      display: 'block',
    }
  });
 
export default function News() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.title} variant="h1">News</Typography>
      <ArticleFive/>
      <ArticleFour/>
      <ArticleThree/>
      <ArticleTwo/>
      <ArticleOne/>
    </div>
  );
}
