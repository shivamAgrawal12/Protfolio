import { motion } from "framer-motion"
import {
  Github,
  ExternalLink,
} from "lucide-react"

/* ================= PROJECT DATA ================= */

const projects = [
  {
    title: "Tayyib Co.",
    desc: "Beauty and wellness company website",
    tech: ["React", "Redux", "CSS", "Tailwind CSS", "API", "Typescript", "JSON"],
    link: "https://tayyibdemo.netlify.app/",
  },
  {
    title: "Medical Study",
    desc: "Study material for medical students",
    tech: ["React", "Redux", "JSON", "Tailwind CSS", "Email.js"],
    link: "https://pocket-senior-by-balamurali-b.netlify.app/#/",
  },
  {
    title: "Movie Views",
    desc: "Review movies infomation and trailers",
    tech: ["React", "Redux", "CSS", "Tailwind CSS", "API"],
    link: "https://moviedemostream.netlify.app/",
  },
   {
    title: "Ready to Milk",
    desc: "Music for Improved Milk Yield",
    tech: ["React", "Redux", "CSS", "Tailwind CSS", "API", "Typescript", "Node.js", "Express.js", "MongoDB"],
    link: "https://taskanimall.netlify.app/",
  },
  {
    title: "Website",
    desc: "Robotic Company website",
    tech: ["React", "Tailwind CSS",  "Typescript", "Redux"],
    link: "https://leapmile.com/",
  },
  {
    title: "XYZ Restaurant",
    desc: "Restaurant reservation system",
    tech: ["React", "Redux", "CSS"],
    link: "https://xyresturent.netlify.app/",
  },  
]

/* ================= COMPONENT ================= */

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-15 px-6 relative"
    >
      <div className="max-w-7xl mx-auto fade-up">

        {/* Heading */}
        <motion.div className="text-center mb-20">

          <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-4">
            Projects
          </h2>

          <p className="text-gray-400">
            Some of my recent work
          </p>

        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-parent">

          {projects.map((p) => (
            <div
              key={p.title}
              className="
                stagger-item
                bg-black/70
                border border-white/10
                rounded-3xl
                overflow-hidden
                shadow-xl
                hover:border-orange-500/40
                transition
              "
            >
              {/* Thumbnail */}
              <div className="h-48 overflow-hidden relative">

                <img
                  src={`https://s.wordpress.com/mshots/v1/${p.link}?w=800`}
                  alt={p.title}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "/fallback.png"
                  }}
                  className="
                    w-full h-full object-cover
                    hover:scale-110
                    transition duration-700
                  "
                />

                {/* Overlay */}
                <div
                  className="
                    absolute inset-0
                    bg-linear-to-t
                    from-black/70
                    via-black/20
                    to-transparent
                  "
                />

              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="font-semibold mb-2">
                  {p.title}
                </h3>

                <p className="text-gray-400 text-sm mb-3">
                  {p.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">

                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="
                        text-xs px-2 py-1
                        bg-orange-500/10
                        text-orange-400
                        rounded-full
                        border border-orange-500/20
                      "
                    >
                      {t}
                    </span>
                  ))}

                </div>

                {/* Links */}
                <div className="flex gap-4 text-orange-400">

                  <a
                    href="https://github.com"
                    target="_blank"
                    className="hover:text-white transition"
                  >
                    <Github size={18} />
                  </a>

                  <a
                    href={p.link}
                    target="_blank"
                    className="hover:text-white transition"
                  >
                    <ExternalLink size={18} />
                  </a>

                </div>

              </div>
            </div>
          ))}

        </div>

        {/* <div className="flex justify-center py-5">


          <div className="relative flex flex-col items-center justify-center py-10 overflow-hidden">
            <div className="absolute w-500 h-30 border border-orange-500/30 rounded-full blur-[1px]" />
            <p className="mb-2 text-xs tracking-[0.2em] uppercase text-gray-500">
              THERE'S
            </p>

            <h2 className="text-xl md:text-2xl font-extrabold tracking-widest uppercase bg-linear-to-r from-orange-400 via-pink-400 to-violet-400 bg-clip-text text-transparent">
              MANY MORE
            </h2>

            <p className="mt-3 text-sm tracking-[0.3em] uppercase text-gray-500">
              INNOVATIONS IN PROGRESS
            </p>
          </div>

      </div> */}

      </div>
    </section>
  )
}
