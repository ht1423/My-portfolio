import { ExternalLink } from "lucide-react";

const landingPages = [
  {
    id: 1,
    title: "Sundown",
    description: "A sleek landing page clone of Sundown Studio, built to showcase a modern startup’s product with smooth animations and elegant design.",
    image: "/public/projects/landing1.png",
    tags: ["React", "TailwindCSS", "Framer Motion"],
    demoUrl: "https://sundown-lime.vercel.app/",
  },
  {
    id: 2,
    title: "Sidcup",
    description: "A crisp and professional landing page tailored for golf clubs and enthusiasts, highlighting events and memberships.",
    image: "/public/projects/landing2.png",
    tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
    demoUrl: "https://sidcup-one.vercel.app/",
  },
  {
    id: 3,
    title: "Literary Latte",
    description: "A cozy landing page blending books and cafe culture, perfect for showcasing book collections, events, and cozy vibes.",
    image: "/public/projects/landing3.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "https://literary-latte.vercel.app/",
  },
  {
    id: 4,
    title: "Lazarev",
    description: "A modern landing page, focused on simplicity and smooth user experience.",
    image: "/public/projects/landing4.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://lazarev-six.vercel.app/",
  },
  {
    id: 5,
    title: "Bouncing Docs",
    description: "A ReactJS-powered documentation app showcasing efficient task implementation with dynamic UI updates and enhanced user experience.",
    image: "/public/projects/landing5.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "https://bouncing-docs.vercel.app/",
  },
  {
    id: 6,
    title: "Apple Vision Pro",
    description: "Apple Vision Pro landing page, showcasing cutting-edge tech with smooth animations and responsive design.",
    image: "/public/projects/landing6.png",
    tags: ["HTML", "CSS", "JavaScript", "Canvas"],
    demoUrl: "https://apple-vision-sigma.vercel.app/",
  },
  {
    id: 7,
    title: "Legal Bharat",
    description: "A user-friendly platform connecting people with pro bono lawyers, making legal help accessible and easy to find.",
    image: "/public/projects/landing7.png",
    tags: ["React", "TypeScript", "MOngoDB", "Nodejs"],
    demoUrl: "https://legal-bharat-frontend.vercel.app/",
  },
];

export const LandingPagesSection = () => {
  return (
    <section id="landing" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Landing Pages </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent landing pages, built with focus on
          performance, UI, and conversion optimization.
        </p>

        <div className="grid grid-cols-1 text-center md:grid-cols-2 lg:grid-cols-3 gap-8">
          {landingPages.map((page) => (
            <div
              key={page.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={page.image}
                  alt={page.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {page.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{page.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {page.description}
                </p>
                <div className="flex justify-start items-center space-x-3">
                  {page.demoUrl && (
                    <a
                      href={page.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      aria-label={`Demo of ${page.title}`}
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
