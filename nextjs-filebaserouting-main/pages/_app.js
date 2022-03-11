import Head from 'next/head';

import Layout from '../components/layout/layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>NextJS Events</title>
        <meta name="description" content="NextJS Events" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

// Application Shell
// Root app component which in the end is rendered for every page that is being displayed.
// This Component here, which is received through props, this actually is the actual page component that should be rendered.
// My app, this component here is rendered by NextJS, and this Compoenent prop will automatically be set by NextJS.
// so you don't need to do anything for that.
// But than you can utilize this _app.js such that as we currently doing it, you wrap your page content with other components.
// Like here I'm  wrapping the Layout Component around the page component to give all pages the same layout. So the same navigation bar for example.
// So that actually is a file we already utilized
