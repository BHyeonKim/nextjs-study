import Head from 'next/head';

import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../helpers/api-utils';
const HomePage = (props) => {
  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve."
        />
      </Head>
      <EventList items={props.events} />
    </div>
  );
};

export async function getStaticProps(context) {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: { events: featuredEvents },
    revalidate: 10,
  };
}

export default HomePage;
