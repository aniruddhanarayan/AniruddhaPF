'use client';

const skillCategories = [
  {
    category: 'Core Expertise',
    skills: ['Physical AI', 'Avionics', 'Cyber Defense', 'Autonomous Systems', 'UAV Development']
  },
  {
    category: 'Technical Stack',
    skills: ['Python', 'Machine Learning', 'Data Structures & Algorithms', 'Data Analytics', 'AI Systems']
  },
  {
    category: 'Defense Technology',
    skills: ['Defense Intelligence', 'Mission Control Systems', 'Drone Engineering', 'Aerospace Engineering', 'Robotics']
  },
  {
    category: 'Languages',
    skills: ['English (Full Professional)', 'Hindi (Native)', 'Marathi (Professional)', 'Spanish (Elementary)']
  }
];

const achievements = [
  {
    title: 'US Innovation Grant',
    description: 'Awarded for innovative defense technology solutions'
  },
  {
    title: '7 Consecutive Hackathon Wins',
    description: 'Demonstrating consistent excellence in rapid innovation'
  },
  {
    title: 'Enterprise Partnerships',
    description: 'Working with Rolls-Royce, Bentley, Aston Martin, and Porsche'
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center opacity-0 animate-on-scroll">
          Skills & Achievements
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:scale-[1.02] transition-all duration-300 opacity-0 animate-on-scroll"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white text-sm rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center border border-gray-200 dark:border-gray-700 hover:scale-[1.02] transition-all duration-300 opacity-0 animate-on-scroll"
              >
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {achievement.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
