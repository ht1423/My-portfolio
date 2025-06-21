import { ExternalLink } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "Veritas Tech",
    description:
      "Worked on building responsive UI components and optimizing app performance using React and TailwindCSS. Collaborated with backend team to integrate APIs.",
    website: "https://techcorp.com",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    duration: "6 months",
  },
  {
    id: 2,
    company: "Shipoars Shipping",
    description:
      "Developed fullstack features using MERN stack including user authentication, dashboard UI, and database schema design.",
    website: "https://www.shipoarsshipping.com/",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    duration: "3 months",
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-28 px-6 relative">
      <div className="container mx-auto max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Work <span className="text-primary"> Experience </span>
        </h2>

        <div className="flex flex-col space-y-12">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-white dark:bg-gray-800 rounded-2xl p-10 shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:border-primary/30 transition-all duration-500 transform hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                    {exp.company}
                  </h3>
                  <div className="flex items-center gap-2 justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm font-semibold text-white tracking-wide">
                      Internship • {exp.duration}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 text-lg">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-8 justify-center">
                {exp.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
                <a
                  href={exp.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium group"
                >
                  Visit Website
                  <ExternalLink
                    size={16}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
