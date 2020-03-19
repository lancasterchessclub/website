import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import Iframe from 'react-iframe';
import Article from './md/ArticleSix.md';

export default function ArticleSix({ iframe, md }) {
  const [markdown, setMarkdown] = useState('');
  const filePath = `./md/${md}.md`
  useEffect(() => {
    import(filePath)
      .then(obj => fetch(obj))
      .then(res => res => res.text()).then(text => setMarkdown(text));
    // fetch(Article).then(res => res.text()).then(text => setMarkdown(text));
  });

  return (
    <div>
      <ReactMarkdown source={markdown} />
      { iframe ? <Iframe url={iframe}
        width="600"
        height="371"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/> : <div /> }
    </div>
  );
}