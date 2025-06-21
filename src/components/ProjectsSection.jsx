import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Reviewit",
    description: "A platform enabling users to collect and showcase authentic testimonials",
    image: "/projects/project1.png",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    demoUrl: "https://my-reviewit.vercel.app/",
  },
  {
    id: 2,
    title: "Price Findrr",
    description:
      "A one stop solution for all your price tracking needs, automatind alerts on discounts,lowest prices, and stock availability for Amazon.in products",
    image: "/projects/project2.png",
    tags: ["Next.js", "TypeScript", "TailwindCss", "NodeMailer"],
    demoUrl: "https://price-findrr-tau.vercel.app/",
  },
  {
    id: 3,
    title: "Medium-clone",
    description:
      "A minimalistic clone of Medium app for reading, writing, and sharing articles with a clean intuitive interface",
    image: "/projects/project3.png",
    tags: ["TypeScript", "React", "MongoDB", "Express"],
    demoUrl: "https://medium-hono.vercel.app/",
  },
  {
    id: 4,
    title: "Snipsavyy",
    description:
      "Code snippet management platform with multi-level sharing and organisation capabilities",
    image: "/projects/project4.png",
    tags: ["Next.js", "TypeScript", "MongoDB", "TailwindCss"],
    demoUrl: "https://snipsavvy.vercel.app/",
  },
  {
    id: 5,
    title: "Weather Wiz",
    description: "A simple weather app that shows real-time weather based on your location. Easy to use with a clean, minimal design",
    image: "/projects/project5.png",
    tags: ["Expo", "React Native", "OpenWeather API"],
  },
  {
    id: 6,
    title: "Movie Recommendation App",
    description: "A handy app that suggests movies you’ll love based on your preferences. Simple, smooth, and designed to help you find your next favorite flick.",
    image: "/projects/project6.png",
    tags: ["React Native", "Expo", "Appwrite", "Clerk"],
  },
  {
    id: 7,
    title: "Chat App",
    description:
      "A real-time multi-user chat app with seamless authentication using Clerk (Passkeys & Google Sign-In) and a powerful Appwrite backend. Features modern UI, real-time updates, and secure user management—ready to ship as a production app.",
    image: "/projects/project7.png",
    tags: ["React Native", "Expo", "Clerk", "Appwrite"],
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-start items-center space-x-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      aria-label={`Demo of ${project.title}`}
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* You had an empty <a> button below, I removed it since it does nothing */}
      </div>
    </section>
  );
};
