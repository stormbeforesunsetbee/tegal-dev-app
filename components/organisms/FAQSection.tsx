import FAQ from '../molecules/FAQ';

export default function FAQSection({ faqs }: { faqs: any }) {
  return (
    <section id="faq" className="bg-[#1B71D8] dark:bg-gray-900 px-5 py-12">
      <FAQ faqs={faqs} />
    </section>
  );
}
