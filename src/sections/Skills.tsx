import { motion } from "framer-motion"
import {
  Atom,
  Palette,
  Server,
  Laptop,
  Computer,
  Tickets,
  MessageSquareHeart,
} from "lucide-react"
/* ================= DATA ================= */

const skillGroups = [
  {
    title: "Frontend Core",
    icon: Atom,
    gradient: "from-orange-500 to-pink-500",
    skills: [
      "React.js",
      "Next.js",
      "React Native",
      "Vue.js",
      "JavaScript",
      "TypeScript",
      "Redux",
      "Hook",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Styling & UI",
    icon: Palette,
    gradient: "from-purple-500 to-blue-500",
    skills: [
      "Tailwind CSS",
      "Bootstrap",
      "Responsive Design",
      "UI/UX",
      "Component Libraries",
      "CSS-in-JS",
      "CSS Animations",
      "Animations",
    ],
  },
  {
    title: "Backend & Tools",
    icon: Server,
    gradient: "from-green-500 to-emerald-500",
    skills: [
      "Node.js",
      "REST APIs",
      "Python",
      "SQL",
      "PostgreSQL",
      "MongoDB",
      "Git",
      "Docker",
      "CI/CD",  
      "Playwright"
    ],
  },
  {
    title: "Development",
    icon: Laptop,
    gradient: "from-cyan-500 to-sky-500",
    skills: [
      "VS Code",
      "Postman",
      "Figma",
      "Adobe",
      "Agile",
      "Performance Optimization",
    ],
  },
  {
    title: "Tools",
    icon: Computer,
    gradient: "from-indigo-500 to-violet-500",
    skills: [
      "Claude",
      "Chat GPT",
      "Flutterflow",
      "Many More ..."
    ],
  },
    {
    title: "Concepts",
    icon: Tickets,
    gradient: "from-amber-400 to-orange-500",
    skills: [
      "Angular",
      "OOPS",
      "DS & Algo",
      "System Design",
      "AWS"
    ],
  },
  {
    title: "Interest In",
    icon: MessageSquareHeart,
    gradient: "from-rose-400 to-fuchsia-500",
    skills: [
      "Multi-Agent System",
      "Agentic AI",
      "Cloud Computing",
      "Gen AI",
      "Blockchain",
    ],
  }
]

/* ================= COMPONENT ================= */

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32 px-6 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-4">
            Technical Expertise
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto">
            Technologies and tools I use to build
            high-performance digital products
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {skillGroups.map((group, i) => {
            const Icon = group.icon

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.12,
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="relative group"
              >
                {/* Gradient Border */}
                <div
                  className={`
                    absolute inset-0
                    rounded-3xl
                    bg-gradient-to-r ${group.gradient}
                    opacity-0
                    group-hover:opacity-100
                    blur-xl
                    transition
                  `}
                />

                {/* Card */}
                <div
                  className="
                    relative
                    h-full
                    bg-black/70
                    backdrop-blur-xl
                    border border-white/10
                    rounded-3xl
                    p-6
                    shadow-xl
                    overflow-hidden
                  "
                >
                  {/* Shine Effect */}
                  <div
                    className="
                      absolute top-0 left-[-150%]
                      w-[120%] h-full
                      bg-gradient-to-r
                      from-transparent
                      via-white/10
                      to-transparent
                      rotate-12
                      group-hover:left-[150%]
                      transition-all
                      duration-1000
                    "
                  />

                  {/* Header */}
                  <div className="relative z-10 flex items-center gap-3 mb-6">

                    <div
                      className={`
                        p-3 rounded-xl
                        bg-gradient-to-r ${group.gradient}
                        text-black
                        shadow-lg
                      `}
                    >
                      <Icon size={22} />
                    </div>

                    <h3 className="text-lg font-semibold text-white">
                      {group.title}
                    </h3>

                  </div>

                  {/* Skills */}
                  <div className="relative z-10 flex flex-wrap gap-2">

                    {group.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="
                          px-3 py-1.5
                          text-sm
                          rounded-full
                          bg-white/5
                          text-gray-300
                          border border-white/10
                          hover:border-orange-500/50
                          hover:text-orange-400
                          transition
                          cursor-default
                        "
                      >
                        {skill}
                      </motion.span>
                    ))}

                  </div>

                  {/* Floating Dots */}
                  <div
                    className="
                      absolute -bottom-6 -right-6
                      w-24 h-24
                      bg-orange-500/10
                      rounded-full
                      blur-2xl
                    "
                  />

                </div>
              </motion.div>
            )
          })}

        </div>
      </div>
    </section>
  )
}
