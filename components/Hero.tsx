'use client';

import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center animate-fade-in relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-up">
          Aniruddha Narayan
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Founder & CEO, Aminuteman Technologies
        </p>
        <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-8 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Building AI-driven UAV and autonomous systems to protect soldiers and strengthen defense sovereignty
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg text-sm">
            Physical AI
          </span>
          <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg text-sm">
            Defense Tech
          </span>
          <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg text-sm">
            Autonomous Systems
          </span>
          <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg text-sm">
            7x Hackathon Winner
          </span>
        </div>

        <a
          href="#about"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors animate-slide-up"
          style={{ animationDelay: '0.4s' }}
        >
          Learn More
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
}
