"use client";

export function ParticleBackground() {
  // Simple CSS-based particle effect
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-teal-400/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-purple-400/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-pink-400/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: "2s" }} />
    </div>
  );
}
