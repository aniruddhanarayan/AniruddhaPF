'use client';

export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center opacity-0 animate-on-scroll">
          About Me
        </h2>

        <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          <p className="opacity-0 animate-on-scroll">
            I&apos;m Aniruddha Narayan, Founder & CEO of <span className="font-semibold text-gray-900 dark:text-white">Aminuteman Technologies</span>,
            a bootstrapped defense-tech company building AI-driven UAV and autonomous systems to protect soldiers and strengthen global defense sovereignty.
          </p>

          <p className="opacity-0 animate-on-scroll">
            When I started studying defense technology, one truth stood out: <span className="font-semibold text-gray-900 dark:text-white">systems are decades behind</span>.
            And when technology fails, people pay the price.
          </p>

          <p className="opacity-0 animate-on-scroll">
            <span className="font-semibold text-gray-900 dark:text-white">At 18, I decided to change that.</span> We started from college labs,
            assembling a <span className="font-semibold">22-member engineering team</span> united by a single idea:
          </p>

          <div className="pl-6 border-l-4 border-gray-900 dark:border-white my-8 opacity-0 animate-on-scroll">
            <p className="font-semibold text-xl text-gray-900 dark:text-white">
              Build from first principles.<br />
              Build technology that can bear the risks humans shouldn&apos;t.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 mt-8 border border-gray-200 dark:border-gray-700 hover:scale-[1.02] transition-all duration-300 opacity-0 animate-on-scroll">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
            <p>
              We&apos;re establishing <span className="font-semibold text-gray-900 dark:text-white">AI Brain sovereignty</span> by leading with
              first-principles innovation, building systems where technology bears the highest risk, so more defenders come home safely.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
