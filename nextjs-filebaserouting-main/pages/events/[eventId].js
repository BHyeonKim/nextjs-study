import { Fragment } from 'react';
import Head from 'next/head';

import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';

import EventAlert from '../../components/ui/error-alert';

import { getAllEvents, getEventById } from '../../helpers/api-utils';

const EventDetailPage = (props) => {
  const { event } = props;

  if (!event) {
    return (
      <EventAlert>
        <p>No event found!</p>
      </EventAlert>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>{event.description}</EventContent>
    </Fragment>
  );
};

export async function getStaticPaths(context) {
  const AllEvents = await getAllEvents();

  const paths = AllEvents.map((event) => ({ params: { eventId: event.id } }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;

  const event = await getEventById(eventId);

  return {
    props: {
      event,
    },
    revalidate: 10,
  };
}

export default EventDetailPage;
