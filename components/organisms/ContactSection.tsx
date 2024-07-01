import ServiceHeading from '../molecules/ServiceHeading';
import Container from '../templates/Container';

export default function ContactSection({
  contactHeading,
}: {
  contactHeading: string;
}) {
  return (
    <section
      id="contact"
      className="
      bg-white
        dark:bg-gray-900
        dark:border-t
        dark:border-gray-700
        px-5
        py-6
        md:py-12
        text-gray-700
        dark:text-white
        text-center"
    >
      <Container>
        <div className="flex flex-col gap-10 tracking-wider">
          <ServiceHeading contactHeading={contactHeading} />
        </div>
      </Container>
    </section>
  );
}
