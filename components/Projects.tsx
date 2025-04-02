'use client';

const projects = [
  {
    title: 'Valley AI',
    subtitle: 'Unified Defense Intelligence Platform',
    description: 'A unified defense intelligence platform connecting command centers to last-mile soldiers for real-time, autonomous mission control. Revolutionizing how defense forces coordinate and execute operations.',
    tags: ['AI', 'Real-time Systems', 'Mission Control', 'Command & Control'],
    impact: 'Enabling autonomous decision-making at the edge'
  },
  {
    title: 'Ankosha A Drones',
    subtitle: 'Long-range Kamikaze Drone System',
    description: 'A long-range, fire-and-forget kamikaze drone built for endurance and precision. Designed to execute high-stakes missions with minimal human intervention.',
    tags: ['UAV', 'Autonomous Systems', 'Precision Engineering', 'Defense Tech'],
    impact: 'Built for endurance and precision strikes'
  },
  {
    title: 'Enterprise AI Solutions',
    subtitle: 'Luxury Automotive Sector',
    description: 'Delivering high-stake enterprise AI projects for Rolls-Royce, Bentley, Aston Martin, and Porsche to fund R&D operations. Building cutting-edge AI solutions for the luxury automotive industry.',
    tags: ['Machine Learning', 'Enterprise AI', 'Data Analytics', 'Production Systems'],
    impact: 'Funding defense tech R&D through commercial innovation'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center opacity-0 animate-on-scroll">
          Key Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 hover:scale-[1.02] transition-all duration-300 hover:shadow-lg opacity-0 animate-on-scroll"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-medium">
                {project.subtitle}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  {project.impact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
