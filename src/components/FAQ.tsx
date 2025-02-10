import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How easy is it to set up the widget?",
      answer: "Our one-line script and intuitive dashboard let you go live in minutes."
    },
    {
      question: "Can I customize the survey questions?",
      answer: "Yes, choose from pre-built templates or create your own questions via our dashboard."
    },
    {
      question: "How does AI sentiment analysis work?",
      answer: "It automatically categorizes feedback as positive, neutral, or negative—prioritizing issues that matter most."
    },
    {
      question: "What integrations are available?",
      answer: "We support Slack, Intercom, Zendesk, and offer API/webhook access for custom integrations."
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg shadow-sm">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full p-4 text-left text-gray-900 bg-gray-100 hover:bg-gray-200 focus:outline-none"
              >
                <span className="font-semibold">{faq.question}</span>
                <span className="text-gray-600">{openIndex === index ? '-' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="p-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 