"use client";

// LAYOUT UPDATED FOR AWAKE LIGHT THEME
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { testimonials } from "@/lib/content";
import StatsSection from "@/components/StatsSection";

const cardMotion = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true, amount: 0.1 },
};

export default function Home() {
  const [activeTab, setActiveTab] = useState('Elementary');

  return (
    <div className="bg-white text-[#1E3A5F]">
      <section className="relative overflow-hidden py-24 bg-white">
        <div className="pointer-events-none absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2" />
        <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-40 translate-x-1/2 -translate-y-1/2" />

        <motion.div {...cardMotion} className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#64748B]">Montreal&apos;s #1 Tutoring Service</p>
          <h1 className="mt-6 text-6xl font-black leading-tight md:text-7xl">
            Learn, Grow and <span className="text-[#F5C518]">Succeed.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-base text-[#64748B]">
            Professional tutoring tailored to your academic goals, with expert guidance in math, science, language and college preparation.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact-us" className="btn-pill inline-flex items-center rounded-full bg-[#F5C518] px-8 py-4 font-bold text-[#1E3A5F]">
              Get Started <ArrowUpRight size={18} className="ml-3" />
            </Link>
            <Link href="/services" className="inline-flex items-center rounded-full border border-gray-300 px-8 py-4 text-gray-700">Learn More</Link>
          </div>

        </motion.div>

        {/* Academic Levels Tab — inside hero */}
        <div className="mt-16 w-full max-w-4xl mx-auto px-4">

          <p className="text-center text-xs font-semibold uppercase tracking-widest text-[#64748B] mb-6">
            Our Team of Expert Tutors Can Help
          </p>

          <div className="flex justify-center gap-3 flex-wrap mb-8">
            {['Elementary', 'High School', 'College / CEGEP', 'University'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-[#1E3A5F] text-white shadow-md'
                    : 'bg-gray-100 text-[#64748B] hover:bg-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8 text-left min-h-[180px]">

            {activeTab === 'Elementary' && (
              <div>
                <h3 className="text-xl font-black text-[#1E3A5F] mb-2">Building Brilliance Early</h3>
                <p className="text-[#64748B] text-sm mb-4">We help young learners master core academic subjects through engaging, personalized tutoring. From foundational math and reading to early science and social studies, we focus on building confidence and sparking curiosity every step of the way.</p>
                <div className="flex flex-wrap gap-2">
                  {['Math', 'Reading', 'Science', 'Social Studies', 'English', 'French'].map(s => (
                    <span key={s} className="bg-[#F5C518]/10 text-[#1E3A5F] border border-[#F5C518]/30 rounded-full px-3 py-1 text-xs font-medium">{s}</span>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'High School' && (
              <div>
                <h3 className="text-xl font-black text-[#1E3A5F] mb-2">Preparing for What&apos;s Next</h3>
                <p className="text-[#64748B] text-sm mb-4">We support high school students through their most challenging years with subject-specific tutoring, test prep, and study strategies that build both grades and confidence.</p>
                <div className="flex flex-wrap gap-2">
                  {['Mathematics', 'Physics', 'Chemistry', 'Biology', 'French', 'English', 'History', 'Computer Science'].map(s => (
                    <span key={s} className="bg-[#F5C518]/10 text-[#1E3A5F] border border-[#F5C518]/30 rounded-full px-3 py-1 text-xs font-medium">{s}</span>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'College / CEGEP' && (
              <div>
                <h3 className="text-xl font-black text-[#1E3A5F] mb-2">Conquering College Level</h3>
                <p className="text-[#64748B] text-sm mb-4">Our CEGEP and college tutors are subject specialists who understand the jump in difficulty and help students adapt quickly with targeted, efficient sessions.</p>
                <div className="flex flex-wrap gap-2">
                  {['Calculus', 'Linear Algebra', 'Physics', 'Chemistry', 'Biology', 'Physiology', 'Computer Science', 'EUF Prep', 'Statistics'].map(s => (
                    <span key={s} className="bg-[#F5C518]/10 text-[#1E3A5F] border border-[#F5C518]/30 rounded-full px-3 py-1 text-xs font-medium">{s}</span>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'University' && (
              <div>
                <h3 className="text-xl font-black text-[#1E3A5F] mb-2">Excellence at University Level</h3>
                <p className="text-[#64748B] text-sm mb-4">We provide university-level tutoring across STEM and science programs, matching students with tutors who have advanced credentials in the exact subject they need.</p>
                <div className="flex flex-wrap gap-2">
                  {['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Physiology', 'Computer Science', 'Software Engineering', 'Statistics', 'Mechanics'].map(s => (
                    <span key={s} className="bg-[#F5C518]/10 text-[#1E3A5F] border border-[#F5C518]/30 rounded-full px-3 py-1 text-xs font-medium">{s}</span>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>

      </section>

      <StatsSection />

      <section className="py-16 bg-white">
        <motion.div {...cardMotion} className="mx-auto max-w-5xl px-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#64748B]">WHY CHOOSE US</p>
          <h2 className="mt-3 text-4xl font-black text-[#1E3A5F]">What Makes Us Different</h2>
        </motion.div>

        <div className="mx-auto mt-6 grid max-w-5xl gap-4 px-4 md:grid-cols-2">
          <motion.div {...cardMotion} className="card-surface border-l-4 border-l-[#F5C518] p-6 h-full">
            <h3 className="text-2xl font-black text-[#1E3A5F]">Dedicated Tutors</h3>
            <p className="mt-3 text-[#64748B]">Our team is hand-picked and trained to support each student with tailored lesson plans, dependable progress tracking, and ongoing mentor accountability.</p>
          </motion.div>

          <motion.div {...cardMotion} className="card-surface p-6 h-full">
            <div className="text-2xl text-[#F5C518]">💡</div>
            <h3 className="mt-4 text-xl font-black text-[#1E3A5F]">Personalized Approach</h3>
            <p className="mt-2 text-[#64748B]">Tailored sessions for each student&apos;s learning style and academic goals.</p>
          </motion.div>

          <motion.div {...cardMotion} className="card-surface p-6 h-full">
            <div className="text-2xl text-[#F5C518]">🧠</div>
            <h3 className="mt-4 text-xl font-black text-[#1E3A5F]">Confidence Beyond the Classroom</h3>
            <p className="mt-2 text-[#64748B]">We build skills and study habits that last well past exams and assignments.</p>
          </motion.div>

          <motion.div {...cardMotion} className="card-surface p-6 h-full">
            <div className="text-2xl text-[#F5C518]">📘</div>
            <h3 className="mt-4 text-xl font-black text-[#1E3A5F]">Knowledge You Can Trust</h3>
            <p className="mt-2 text-[#64748B]">Tutors hold advanced credentials and use proven teaching methods to help students learn concepts deeply and perform consistently.</p>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-20">
        <motion.div {...cardMotion} className="mx-auto max-w-5xl px-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#64748B]">HOW IT WORKS</p>
          <h2 className="mt-3 text-4xl font-black text-[#1E3A5F]">Our Process</h2>
        </motion.div>

        <motion.div
          className="mx-auto mt-10 grid max-w-5xl gap-6 px-4 grid-cols-1 md:grid-cols-4"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.25 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
            className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6"
          >
            <p className="text-6xl font-black text-[#F5C518] opacity-30">01</p>
            <h3 className="mt-2 text-xl font-black text-[#1E3A5F]">Schedule</h3>
            <p className="mt-2 text-[#64748B] text-sm">Pick a time and subject that fits your routine.</p>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
            className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6"
          >
            <p className="text-6xl font-black text-[#F5C518] opacity-30">02</p>
            <h3 className="mt-2 text-xl font-black text-[#1E3A5F]">Match</h3>
            <p className="mt-2 text-[#64748B] text-sm">Get paired with the ideal tutor for your needs.</p>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
            className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6"
          >
            <p className="text-6xl font-black text-[#F5C518] opacity-30">03</p>
            <h3 className="mt-2 text-xl font-black text-[#1E3A5F]">Learn</h3>
            <p className="mt-2 text-[#64748B] text-sm">Engage in structured sessions with progress check-ins.</p>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
            className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6"
          >
            <p className="text-6xl font-black text-[#F5C518] opacity-30">04</p>
            <h3 className="mt-2 text-xl font-black text-[#1E3A5F]">Advance</h3>
            <p className="mt-2 text-[#64748B] text-sm">Achieve higher grades and greater confidence.</p>
          </motion.div>
        </motion.div>

        <div className="mx-auto max-w-5xl px-4 mt-6">
          <svg width="100%" height="24" viewBox="0 0 800 24"
            fill="none" xmlns="http://www.w3.org/2000/svg"
            style={{ overflow: 'visible' }}>
            <motion.line
              x1="0" y1="12" x2="780" y2="12"
              stroke="#F5C518" strokeWidth="2.5" strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ delay: 0.75, duration: 0.9, ease: 'easeInOut' }}
            />
            <motion.path
              d="M768 4 L780 12 L768 20"
              stroke="#F5C518" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round" fill="none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ delay: 1.65, duration: 0.3, ease: 'easeOut' }}
            />
          </svg>
        </div>
      </section>

      <section className="py-20 bg-[#F8FAFC]">
        <motion.div {...cardMotion} className="mx-auto max-w-5xl px-4">
          <h2 className="text-4xl font-black text-[#1E3A5F]">What Families Say</h2>
        </motion.div>

        <div className="mt-8 overflow-hidden w-full">
          <div className="marquee-track gap-6 flex">
            {testimonials.map((t, i) => (
              <div key={i} className="min-w-[320px] max-w-[320px] bg-white border border-gray-100 rounded-2xl shadow-sm p-6 flex-shrink-0">
                <div className="text-[#F5C518] text-lg mb-3">★★★★★</div>
                <p className="text-[#64748B] text-sm leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-4 font-bold text-[#1E3A5F] text-sm">{t.name}</p>
              </div>
            ))}
            {testimonials.map((t, i) => (
              <div key={`dup-${i}`} className="min-w-[320px] max-w-[320px] bg-white border border-gray-100 rounded-2xl shadow-sm p-6 flex-shrink-0">
                <div className="text-[#F5C518] text-lg mb-3">★★★★★</div>
                <p className="text-[#64748B] text-sm leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-4 font-bold text-[#1E3A5F] text-sm">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#1E3A5F] py-16 text-center text-white shadow-lg"
        style={{ backgroundColor: '#1E3A5F' }}>
        <motion.div {...cardMotion}>
          <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
            <h2 className="text-5xl font-black">Ready to Start Learning?</h2>
            <p className="text-lg text-white/80">Speak with our tutors and get a customized learning plan today.</p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact-us" className="rounded-full bg-[#F5C518] px-8 py-3 font-bold text-[#1E3A5F]">Get Started</Link>
              <Link href="/services" className="rounded-full border border-white px-8 py-3 font-bold text-white">Learn More</Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
