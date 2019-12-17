import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import GlobalStyle from '../components/styled/GlobalStyle';

export default class MyDocument extends Document {

  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();

    const page = renderPage(App => props => sheet.collectStyles(
      <React.Fragment>
        <GlobalStyle />
        <App {...props} />
      </React.Fragment>
    ));

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags }
  }

  render() {
    return (
      <html>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:100,300,400,500,700|Roboto:300,400,500&display=swap&subset=korean" rel="stylesheet" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
