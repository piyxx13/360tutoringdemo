export function Footer() {
  return (
    <footer className="bg-[#0F172A] border-t border-gray-800 px-4 py-8 text-sm">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.png" width={40} height={40} alt="360 Tutoring logo" />
          <div>
            <p className="font-black text-white">
              <span className="text-[#F5C518]">360°</span> Tutoring
            </p>
            <p className="text-gray-400">Learn · Grow · Succeed</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://www.instagram.com/360_tutoring_mtl" target="_blank" rel="noreferrer" className="text-gray-400 transition hover:text-white">
            Instagram
          </a>
          <a href="https://www.facebook.com/p/360-Tutoring-61563202827532/" target="_blank" rel="noreferrer" className="text-gray-400 transition hover:text-white">
            Facebook
          </a>
        </div>
        <p className="text-gray-400">© {new Date().getFullYear()} 360° Tutoring. All rights reserved.</p>
      </div>
    </footer>
  );
}
