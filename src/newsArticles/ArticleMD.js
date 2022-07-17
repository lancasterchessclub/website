import React, { Component} from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

class ArticleMD extends Component {
  constructor() {
    super();
    this.state = { markdown: '' };
  }

  componentWillMount() {
    // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
    const article = require(`${this.props.path}`);
    fetch(article).then(res => res.text()).then(text => this.setState({ markdown: text }));
  }

  render() {
    const styles = {
      paddingBottom: '20px'
    };

    const { markdown } = this.state;
    return <div style={styles}>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
      </div>;
  }
}

export default ArticleMD;