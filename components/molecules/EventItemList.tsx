import EventItem from './EventItem';
import { usePathname } from 'next/navigation';

export default function EventItemList({ events }: { events: any }) {
  const pathname = usePathname();

  return (
    <div
      className={`flex gap-10 w-full py-5 ${
        pathname === '/events'
          ? 'flex-wrap justify-center'
          : 'overflow-x-scroll md:overflow-hidden md:justify-center'
      }`}
    >
      {events?.map((_event: any) => (
        <EventItem
          key={_event?.id}
          eventSlug={_event?.slug}
          eventImage={_event?.flyer_image?.url}
          eventHeading={_event?.title}
          eventStartDateTime={_event?.start_date_time}
          eventEndDateTime={_event?.end_date_time}
          eventLocation={_event?.location}
          eventTotalRSVP={_event?.total_rsvp}
          eventMaxRSVP={_event?.max_rsvp}
          eventDescription={_event?.description}
          eventPublishedDate={_event?.publishedAt}
        />
      ))}
    </div>
  );
}
