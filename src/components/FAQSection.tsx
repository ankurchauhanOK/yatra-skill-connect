
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Is this safe for solo travelers?',
      answer: 'Yes! All hosts are background-verified, and we maintain 24/7 support. We also have a buddy system where experienced volunteers can guide first-timers.'
    },
    {
      question: 'Can students apply?',
      answer: 'Absolutely! Students are welcome. Many of our most impactful volunteers are college students sharing their fresh skills and energy with rural communities.'
    },
    {
      question: 'Is this paid work?',
      answer: 'No, this is volunteer work. You provide your skills in exchange for accommodation and meals. The reward is the experience, connections, and karma points you earn.'
    },
    {
      question: 'What skills are most needed?',
      answer: 'Teaching, technology support, digital marketing, photography, arts & crafts, healthcare awareness, and sustainable farming practices are highly sought after.'
    },
    {
      question: 'How long are typical stays?',
      answer: 'Most volunteer projects last 1-4 weeks, but some can extend to 3 months. You can filter opportunities by duration to find what works for your schedule.'
    },
    {
      question: 'What if I don\'t speak the local language?',
      answer: 'Most hosts speak Hindi or English. Plus, many volunteers find that kindness and enthusiasm transcend language barriers. We also provide basic phrase guides.'
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="section-padding" style={{ background: 'hsl(var(--soft-sand))' }}>
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="section-title text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Everything you need to know about volunteering with YatraConnect</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <div 
                className="yatra-card cursor-pointer hover:shadow-md transition-all"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </div>
                
                {openFAQ === index && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="yatra-btn-secondary">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
