import { useRouter } from 'next/router';
import Head from 'next/head';
import { Fragment, useEffect, useState } from 'react';

import useSWR from 'swr';

import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';

import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';

const fetcher = (url) => fetch(url).then((response) => response.json());
const FilteredEventsPage = (props) => {
  const [loadedEvents, setLoadedEvents] = useState();
  const router = useRouter();

  const filteredData = router.query.slug;

  const { data, error } = useSWR(
    'https://nextjs-course-2a033-default-rtdb.firebaseio.com/events.json',
    fetcher
  );

  useEffect(() => {
    if (data) {
      const events = [];

      for (const key in data) {
        events.push({
          id: key,
          ...data[key],
        });
      }
    }
    setLoadedEvents(events);
  }, [data]);

  let pageHeadData = (
    <Head>
      <title>Filtered Events</title>
      <meta name="description" content={' A list of filtered events.'} />
    </Head>
  );

  const filteredYear = +filteredData[0];
  const filteredMonth = +filteredData[1];

  if (!loadedEvents) {
    return (
      <Fragment>
        {pageHeadData}
        <p className="center">Loading...</p>
      </Fragment>
    );
  }
  pageHeadData = (
    <Head>
      <title>Filtered Events</title>
      <meta
        name="description"
        content={`All events for ${filteredYear}/${filteredMonth}`}
      />
    </Head>
  );

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 2030 ||
    filteredYear < 2021 ||
    filteredMonth > 12 ||
    filteredMonth < 1 ||
    error
  ) {
    return (
      <Fragment>
        {pageHeadData}
        <ErrorAlert>
          <p>Invalid Filter. Please adjust your values</p>
        </ErrorAlert>
        <div className="center">
          <Button link="./events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = loadedEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === filteredYear &&
      eventDate.getMonth() === filteredMonth - 1
    );
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        {pageHeadData}
        <ErrorAlert>
          <p>No events found for the chosen filter.</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(filteredYear, filteredMonth - 1);

  return (
    <Fragment>
      {pageHeadData}
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
};

// export async function getServerSideProps(context) {
//   const { params } = context;

//   const filteredData = params.slug;

//   const filteredYear = +filteredData[0];
//   const filteredMonth = +filteredData[1];

//   if (
//     isNaN(filteredYear) ||
//     isNaN(filteredMonth) ||
//     filteredYear > 2030 ||
//     filteredYear < 2021 ||
//     filteredMonth > 12 ||
//     filteredMonth < 1
//   ) {
//     return {
//       props: {
//         hasError: true,
//       },
//       // notFound: true,
//       // redirect: {
//       //   destination: '/error'
//       // }
//     };
//   }

//   const filteredEvents = await getFilteredEvents({
//     year: filteredYear,
//     month: filteredMonth,
//   });

//   console.log(filteredYear, filteredMonth);

//   return {
//     props: {
//       events: filteredEvents,
//       date: {
//         year: filteredYear,
//         month: filteredMonth,
//       },
//     },
//   };
// }

export default FilteredEventsPage;
