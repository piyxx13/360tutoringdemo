import Link from "next/link";

export const metadata = {
  title: "Become a Tutor — 360 Tutoring",
  description: "Join the 360 Tutoring team and help students succeed.",
};

export default function BecomeTutorPage() {
  return (
    <div className="bg-white text-[#1E3A5F]">
      <section className="relative overflow-hidden bg-[#F8FAFC] py-20">
        <div className="pointer-events-none absolute -left-20 top-8 h-44 w-44 rounded-full bg-blue-200 opacity-30 blur-2xl" />
        <div className="pointer-events-none absolute right-6 top-0 h-44 w-44 rounded-full bg-yellow-200 opacity-30 blur-2xl" />

        <div className="mx-auto max-w-5xl px-4 text-center">
          <span className="rounded-full bg-[#F5C518]/20 px-4 py-2 text-xs font-bold text-[#F5C518] uppercase tracking-widest">Join the Team</span>
          <h1 className="mt-4 text-4xl font-black md:text-6xl">Become Part of 360° Tutoring</h1>
          <p className="mx-auto mt-4 max-w-3xl text-[#64748B]">Join our community of credentialed tutors and support students with curriculum-aligned instruction and confidence-building mentorship.</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card-surface rounded-3xl p-8">
            <h2 className="text-2xl font-black text-[#1E3A5F]">Why Tutor With Us</h2>
            <ul className="mt-4 space-y-3 text-[#64748B]">
              <li>• Flexible hours & meaningful student impact</li>
              <li>• Professional training and mentor support</li>
              <li>• Competitive pay and consistent scheduling</li>
            </ul>
          </div>
          <div className="card-surface rounded-3xl p-8">
            <h2 className="text-2xl font-black text-[#1E3A5F]">How to Apply</h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-[#64748B]">
              <li>Submit your resume and subject strengths.</li>
              <li>Attend a quick virtual interview.</li>
              <li>Start with your first tutoring match.</li>
            </ol>
            <Link href="/contact-us" className="mt-6 inline-flex rounded-full bg-[#F5C518] px-6 py-2 font-bold text-[#1E3A5F]">Email Us</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-16">
        <div className="card-surface rounded-3xl border border-gray-200 p-8">
          <p className="text-2xl font-semibold text-[#1E3A5F]">“360 Tutoring helped me contribute to student success with structured coaching and a supportive team environment.”</p>
          <p className="mt-3 font-bold text-[#F5C518]">— Maya D.</p>
        </div>
      </section>
    </div>
  );
}
