// Allow us customize entire html document
// Need to add special component (class based component)

// The Head Component is not the same we import from next/head
// , Head from next/document can only be used in this special component

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="kr">
        <Head />
        <body>
          <div id="overlays"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
