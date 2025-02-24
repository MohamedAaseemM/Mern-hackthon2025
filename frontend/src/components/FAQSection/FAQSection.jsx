import React, { useState } from "react";
import "./faq.css";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What courses do you offer?",
      answer: "We offer a variety of courses in technology, business, and personal development. Check out our courses page for more details."
    },
    {
      question: "Are the courses self-paced?",
      answer: "Yes, all our courses are designed to be self-paced so you can learn at your own convenience."
    },
    {
      question: "Do you provide certificates?",
      answer: "Yes, upon successful completion of a course, you will receive a verified certificate."
    },
    {
      question: "Is there a refund policy?",
      answer: "Yes, we offer a 7-day money-back guarantee if you’re not satisfied with the course."
    },
    {
      question: "How can I contact support?",
      answer: "You can reach our support team 24/7 via email or live chat on our website."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? "open" : ""}`} onClick={() => toggleFAQ(index)}>
              <div className="faq-question">{faq.question}</div>
              {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
