import { Fragment } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { getAllEvents } from '../../helpers/api-utils';

import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';

const AllEventPage = (props) => {
  const router = useRouter();
  const { events } = props;

  const searchEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <Fragment>
      <Head>
        <title>All Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve."
        />
      </Head>
      <EventsSearch onSearch={searchEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
};

export async function getStaticProps(context) {
  const events = await getAllEvents();

  return {
    props: {
      events,
    },
    revalidate: 10,
  };
}

export default AllEventPage;
