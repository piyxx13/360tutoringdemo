import Link from "next/link";
import { team } from "@/lib/content";

export const metadata = {
  title: "Our Team — 360 Tutoring",
  description: "Meet our team of expert tutors in Montreal.",
};

export default function TeamPage() {
  const owner = {
    name: "Benjamin",
    role: "Founder & CEO",
    bio: "Benjamin founded 360 Tutoring after tutoring students himself since the age of 14 and seeing firsthand how the right guidance can change academic outcomes. Realizing he couldn't help every student alone, he built a team of highly qualified tutors and focuses on carefully matching each student with the tutor best suited to their needs.",
  };

  const teamMembers = team.filter((member) => member.name !== "Benjamin");

  return (
    <div className="bg-white text-[#1E3A5F]">
      <section className="relative overflow-hidden bg-[#F8FAFC] py-20">
        <div className="pointer-events-none absolute -left-20 top-8 h-44 w-44 rounded-full bg-blue-200 opacity-30 blur-2xl" />
        <div className="pointer-events-none absolute right-6 top-0 h-44 w-44 rounded-full bg-yellow-200 opacity-30 blur-2xl" />

        <div className="mx-auto max-w-5xl px-4 text-center">
          <span className="rounded-full bg-[#F5C518]/20 px-4 py-2 text-xs font-bold text-[#F5C518] uppercase tracking-widest">Our Team</span>
          <h1 className="mt-4 text-4xl font-black md:text-6xl">Meet Our Tutors</h1>
          <p className="mx-auto mt-4 max-w-3xl text-[#64748B]">A diverse team selected for expertise and teaching excellence, committed to student success in every session.</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14">
        <div className="card-surface rounded-3xl border border-gray-200 p-8">
          <div className="mb-5 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F5C518] text-[#1E3A5F] text-2xl font-black">B</div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-[#64748B]">{owner.role}</p>
              <h2 className="text-3xl font-black text-[#1E3A5F]">{owner.name}</h2>
            </div>
          </div>
          <p className="text-[#64748B]">{owner.bio}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          {teamMembers.map((member) => {
            const initials = member.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2);

            return (
              <div key={member.name} className="card-surface rounded-3xl p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5C518] text-[#1E3A5F] font-black">{initials}</div>
                  <h3 className="text-xl font-black text-[#1E3A5F]">{member.name}</h3>
                </div>
                <p className="text-[#64748B]">{member.subjects}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {member.subjects.split(",").map((subject) => (
                    <span key={subject.trim()} className="rounded-full border border-[#F5C518]/30 bg-[#F5C518]/10 px-2 py-0.5 text-xs font-semibold text-[#F5C518]">{subject.trim()}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link href="/contact-us" className="btn-pill inline-flex rounded-full bg-[#F5C518] px-6 py-2 font-bold text-[#1E3A5F]">Contact Us</Link>
        </div>
      </section>
    </div>
  );
}
