import FAQ from '../molecules/FAQ';

export default function FAQSection({
  faqHeading,
  faqs,
}: {
  faqHeading: string;
  faqs: any;
}) {
  return (
    <section
      id="faq"
      className="
      bg-white
      dark:bg-gray-900
        px-5
        py-12
        dark:border-t
        dark:border-gray-700"
    >
      <div className="lg:container lg:max-w-[1800px] lg:mx-auto">
        <FAQ faqHeading={faqHeading} faqs={faqs} />
      </div>
    </section>
  );
}
