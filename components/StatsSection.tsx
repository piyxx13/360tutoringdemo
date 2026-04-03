'use client';
import { useEffect, useRef, useState } from 'react';

function useAnimateOnView() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function useCountUp(target: number, duration: number, active: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return value;
}

export default function StatsSection() {
  const bar = useAnimateOnView();
  const donut = useAnimateOnView();
  const stars = useAnimateOnView();

  const hoursCount = useCountUp(2000, 1500, bar.visible);
  const tutorsCount = useCountUp(30, 1500, donut.visible);

  const circumference = 2 * Math.PI * 36;
  const donutOffset = donut.visible ? 0 : circumference;

  return (
    <section className="bg-[#F8FAFC] border-y border-gray-100 py-16">
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 px-6 md:grid-cols-3">
        {/* Hours Tutored — bar graph */}
        <div ref={bar.ref} className="rounded-2xl border border-gray-100 bg-white p-8 text-center">
          <p className="text-5xl font-black text-[#1E3A5F]">{hoursCount.toLocaleString()}+</p>
          <p className="mt-2 text-sm uppercase tracking-widest text-[#64748B]">Hours Tutored</p>
          <div className="mt-5 h-2 w-full rounded-full bg-[#E5E7EB]">
            <div
              className="h-2 rounded-full bg-[#F5C518]"
              style={{
                width: bar.visible ? '100%' : '0%',
                transition: 'width 1.5s ease-out',
              }}
            />
          </div>
        </div>

        {/* Expert Tutors — donut chart */}
        <div ref={donut.ref} className="rounded-2xl border border-gray-100 bg-white p-8 text-center">
          <div className="relative mx-auto h-[88px] w-[88px]">
            <svg className="h-full w-full -rotate-90" viewBox="0 0 80 80">
              <circle cx="40" cy="40" r="36" fill="none" stroke="#E5E7EB" strokeWidth="8" />
              <circle
                cx="40" cy="40" r="36" fill="none"
                stroke="#F5C518" strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={donutOffset}
                style={{ transition: 'stroke-dashoffset 1.5s ease-out' }}
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-2xl font-black text-[#1E3A5F]">
              {tutorsCount}+
            </span>
          </div>
          <p className="mt-3 text-sm uppercase tracking-widest text-[#64748B]">Expert Tutors</p>
        </div>

        {/* Google Rating — star fill */}
        <div ref={stars.ref} className="rounded-2xl border border-gray-100 bg-white p-8 text-center">
          <p className="text-5xl font-black text-[#1E3A5F]">5.0</p>
          <p className="mt-2 text-sm uppercase tracking-widest text-[#64748B]">Google Rating</p>
          <div className="mt-4 flex items-center justify-center gap-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <svg
                key={i}
                viewBox="0 0 24 24"
                className="h-7 w-7"
                style={{
                  opacity: stars.visible ? 1 : 0,
                  transform: stars.visible ? 'scale(1)' : 'scale(0.3)',
                  transition: `opacity 0.4s ease ${i * 0.15}s, transform 0.4s cubic-bezier(0.34,1.56,0.64,1) ${i * 0.15}s`,
                }}
              >
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"
                  fill="#F5C518"
                />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
