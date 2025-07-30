import React from "react";
import heroVideo from "../assets/hero.mp4";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Fullscreen background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={heroVideo} type="video/mp4" />
        {/* Fallback text */}
        Your browser doesn’t support HTML5 video.
      </video>

      {/* Dark overlay for legibility */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-wide bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
          Welcome to
        </h1>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-wide bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent leading-tight">
          Replayed Media
        </h1>

        <p className="mt-8 text-lg text-white max-w-3xl hidden sm:block">
          At Replayed Media, we bridge brands with the perfect influencers. Our
          hand-picked advocates bring your message to life—from talent
          discovery and tailored outreach to content production and
          post-campaign analytics, we manage every detail so you reap the
          rewards of authentic, high-impact partnerships.
        </p>

        {/* Short text on mobile only */}
        <p className="mt-8 text-base text-white max-w-3xl block sm:hidden">
          At Replayed Media, we connect brands and influencers with carefully
          planned out campaigns that deliver real results organically, from
          discovery through analytics.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="#about"
            className="
              transition-colors duration-300 ease-in-out
              bg-cyan-400 text-white border border-cyan-400
              rounded-md py-2 px-3
              hover:bg-white hover:text-black
            "
          >
            Get Started Now!
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;