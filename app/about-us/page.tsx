import Link from "next/link";

export const metadata = {
  title: "About Us — 360 Tutoring",
  description: "Meet the people and mission behind 360 Tutoring.",
};

export default function AboutPage() {
  return (
    <div className="bg-white text-[#1E3A5F]">
      <section className="relative overflow-hidden bg-[#F8FAFC] py-20">
        <div className="pointer-events-none absolute -left-24 top-6 h-44 w-44 rounded-full bg-blue-200 opacity-30 blur-2xl" />
        <div className="pointer-events-none absolute right-6 top-0 h-44 w-44 rounded-full bg-yellow-200 opacity-30 blur-2xl" />

        <div className="mx-auto max-w-5xl px-4 text-center">
          <span className="rounded-full bg-[#F5C518]/20 px-4 py-2 text-xs font-bold text-[#F5C518] uppercase tracking-widest">Our Story</span>
          <h1 className="mt-4 text-4xl font-black md:text-6xl">About 360° Tutoring</h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-[#64748B]">
            We empower learners across Montreal with guided coaching, proven strategies, and consistent support so every student can achieve confident academic success.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Mission",
              text: "Empower students through personalized tutoring that builds academic skill and long-term confidence.",
            },
            {
              title: "Vision",
              text: "Become the most trusted learning partner for families who want consistent, measurable improvement.",
            },
          ].map((item) => (
            <div key={item.title} className="card-surface rounded-3xl border border-gray-200 p-8">
              <h2 className="text-2xl font-black text-[#1E3A5F]">{item.title}</h2>
              <p className="mt-3 text-[#64748B]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { icon: "⭐", title: "Personalized Learning", text: "Custom sessions designed for each student’s learning profile." },
            { icon: "📘", title: "Curriculum-Aligned", text: "Lessons tied to school standards, exams, and mastery targets." },
            { icon: "🚀", title: "Progress Tracking", text: "Ongoing data-driven checkpoints to keep students moving forward." },
            { icon: "🤝", title: "Supportive Mentors", text: "Encouraging tutors who build motivation and lifelong skills." },
          ].map((item) => (
            <div key={item.title} className="card-surface rounded-3xl border border-gray-100 p-6">
              <div className="text-3xl">{item.icon}</div>
              <h3 className="mt-2 text-xl font-black text-[#1E3A5F]">{item.title}</h3>
              <p className="mt-2 text-[#64748B]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F5C518] px-4 py-14 text-[#1E3A5F]">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-black">Start Your Journey Today</h2>
          <p className="mt-3 text-base">Take the first step toward stronger grades, happier students, and more family confidence.</p>
          <Link href="/contact-us" className="mt-6 inline-block rounded-full bg-[#0F172A] px-8 py-3 text-sm font-bold text-[#F5C518]">Contact Us</Link>
        </div>
      </section>
    </div>
  );
}
