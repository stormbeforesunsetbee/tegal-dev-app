import TextHeadingSection from '../atoms/TextHeadingSection';
import Container from '../templates/Container';

export default function ChallengeDetailSection({
  challengeDetailHeading,
}: {
  challengeDetailHeading: string;
}) {
  return (
    <section
      id="challenge"
      className="
        bg-white
        dark:bg-gray-900
        dark:border-t
        dark:border-gray-700
        px-5
        py-12
        pt-24
        text-gray-700
        dark:text-white
        flex
        flex-col
        gap-10
        items-center"
    >
      <Container>
        <TextHeadingSection heading={challengeDetailHeading} />
      </Container>
    </section>
  );
}
