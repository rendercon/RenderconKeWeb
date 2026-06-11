'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'When and where is RenderCon Kenya 2026?',
    answer:
      'RenderCon Kenya 2026 takes place on 3rd October 2026 in Nairobi, Kenya. Exact venue will be announced soon.',
  },
  {
    question: 'Who is RenderCon for?',
    answer:
      'RenderCon is for anyone working with React, React Native, or modern JavaScript — from junior developers to senior engineers. Whether you\'re building web apps, mobile apps, or exploring full-stack JavaScript, there\'s a track for you.',
  },
  {
    question: 'How do I submit a talk proposal (CFP)?',
    answer:
      'The Call for Papers (CFP) opens annually. When open, you can submit your proposal via Sessionize. Follow @ReactDevsKe on social media to be notified when the CFP opens.',
  },
  {
    question: 'How can my company become a sponsor?',
    answer:
      'We offer several partnership tiers — from Title Sponsor to Community Partner. Download the sponsorship prospectus from the Partners page, or email us at sponsors@rendercon.org to start a conversation.',
  },
  {
    question: 'Is RenderCon only for Kenya-based developers?',
    answer:
      'Not at all. While the conference is held in Nairobi, we welcome developers from across East Africa and the diaspora. Past attendees have come from Uganda, Rwanda, Tanzania, Ethiopia, and beyond.',
  },
  {
    question: 'Will there be recordings of the talks?',
    answer:
      'Yes, selected talks from past editions are available on the ReactDevsKe YouTube channel. We aim to record and publish all talks from RenderCon 2026.',
  },
  {
    question: 'Can I volunteer at RenderCon?',
    answer:
      'Absolutely. We rely on a dedicated volunteer team to make the conference possible. Volunteer applications open closer to the event — watch our social channels for the announcement.',
  },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[number]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="border-b border-brand-dark-border last:border-0"
    >
      <button
        className="w-full flex items-center justify-between py-5 text-left group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className={`text-base font-medium pr-8 transition-colors duration-200 ${open ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
          {faq.question}
        </span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
            open
              ? 'bg-purple-500 text-white rotate-45'
              : 'bg-brand-dark-border text-slate-400 group-hover:bg-purple-500/20 group-hover:text-purple-400'
          }`}
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-slate-400 leading-relaxed">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Left: header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <span className="section-label mb-4 inline-flex">FAQ</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4">
              Common<br />
              <span className="gradient-text">questions</span>
            </h2>
            <p className="mt-6 text-slate-400 leading-relaxed">
              Everything you need to know about attending, speaking, or partnering
              with RenderCon Kenya.
            </p>
            <div className="mt-8">
              <a
                href="mailto:hello@rendercon.org"
                className="btn-secondary text-sm px-5 py-2.5"
              >
                Still have questions? Ask us →
              </a>
            </div>
          </motion.div>

          {/* Right: accordion */}
          <div className="lg:col-span-3">
            <div className="divide-y-0">
              {faqs.map((faq, i) => (
                <FAQItem key={faq.question} faq={faq} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
