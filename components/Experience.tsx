'use client';

const experiences = [
  {
    company: 'Aminuteman Technologies',
    role: 'Chief Executive Officer',
    period: 'December 2023 - Present',
    location: 'Pune, Maharashtra, India',
    description: 'Committed to driving cutting-edge innovation in defense, artificial intelligence, robotics, aerospace engineering, and cybersecurity. Developing advanced AI-powered defense solutions, next-gen drones, and autonomous systems to shape the future of national security and technology.',
    highlights: [
      'Leading a 22-member engineering team',
      'Awarded US Innovation Grant',
      '7 consecutive hackathon wins',
      'Enterprise AI projects for Rolls-Royce, Bentley, Aston Martin, and Porsche'
    ]
  },
  {
    company: 'Dataisgood',
    role: 'Analyst',
    period: 'May 2024 - April 2025',
    location: 'Pune, Maharashtra, India',
    description: 'Mastering the principles and practices of extracting insights from complex datasets.'
  },
  {
    company: 'SETV Global',
    role: 'Intern',
    period: 'November 2024 - March 2025',
    location: 'Hyderabad, Telangana, India',
    description: 'Hands-on experience in the rapidly evolving field of AI, applying theoretical knowledge to practical challenges.'
  },
  {
    company: 'Coding Ninjas',
    role: 'Student',
    period: 'January 2023 - April 2024',
    location: 'Maharashtra, India',
    description: 'Intensive multi-disciplinary learning program specializing in Python, Data Structures, Algorithms, Machine Learning, and Data Analytics. Focused on mastering advanced problem-solving techniques and data-driven methodologies.'
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center opacity-0 animate-on-scroll">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 hover:scale-[1.02] transition-all duration-300 opacity-0 animate-on-scroll"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300">{exp.company}</p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">{exp.period}</span>
              </div>

              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{exp.location}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>

              {exp.highlights && (
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                      <span className="text-gray-900 dark:text-white mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
