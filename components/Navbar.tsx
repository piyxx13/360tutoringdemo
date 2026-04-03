"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/our-team", label: "Our Team" },
  { href: "/services", label: "Services" },
  { href: "/become-a-tutor", label: "Become a Tutor" },
  { href: "/contact-us", label: "Contact Us" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 15);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full bg-white border-b border-gray-100 px-6 py-4 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 text-sm font-black">
          <Image src="/logo.png" alt="360 Tutoring" width={34} height={34} />
          <span className="text-[#F5C518]">360°</span>
          <span className="text-[#1E3A5F]">Tutoring</span>
        </div>

        <div className="relative mx-auto w-full max-w-3xl">
          <div className="flex items-center justify-center gap-3 rounded-full bg-[#F4F4F5] px-6 py-3 shadow-sm">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`whitespace-nowrap mx-1 rounded-full px-4 py-1.5 text-sm font-medium transition ${isActive ? "bg-white text-[#1E3A5F] font-semibold" : "text-[#64748B] hover:text-[#1E3A5F]"}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>

        <Link
          href="/contact-us"
          className="flex items-center gap-2 rounded-full bg-[#1E3A5F] px-5 py-2 text-sm font-bold text-white hover:scale-[1.03] hover:-translate-y-0.5 transition-transform duration-200"
        >
          Get Started
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </header>
  );
}
