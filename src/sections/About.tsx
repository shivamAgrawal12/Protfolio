import { motion } from "framer-motion"
import {
  User,
  Code2,
  Palette,
  Award,
} from "lucide-react"

/* ================= COMPONENT ================= */

export default function About() {
  return (
    <section
      id="about"
      className="py-15 px-6 relative overflow-hidden"
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
            About Me
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto">
            Building digital experiences with
            passion, precision and creativity
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              relative
              bg-black/70
              backdrop-blur-xl
              border border-white/10
              rounded-3xl
              p-8 md:p-10
              shadow-xl
              overflow-hidden
            "
          >
            {/* Glow Border */}
            <div
              className="
                absolute inset-0
                rounded-3xl
                bg-linear-to-r
                from-orange-500/20
                via-purple-500/20
                to-blue-500/20
                blur-xl
                opacity-40
              "
            />

            {/* Content */}
            <div className="relative z-10 space-y-6">
              
              <p className="text-gray-300 leading-relaxed">
                I build fast, user-centric interfaces for complex, data-heavy 
                products currently specialising in React, TypeScript, and Next.js.
              </p>

              <p className="text-gray-300 leading-relaxed">
                Biggest win so far: a full performance overhaul at LeapMile Robotics that 
                improved API response accuracy and reduced load times by 70% achieved through 
                targeted refactoring, Redux state optimisation, and eliminating redundant re-renders.
              </p>

              <p className="text-gray-300 leading-relaxed">
                For 4+ years I was the sole software engineer on a real-time robot control and operations 
                platform, owning the entire client-side stack: live data visualisation, interactive maps, 
                role-based authentication, reporting dashboards, and a component library of 20+ reusable 
                elements used across the product.
              </p>

              <div className="max-w-3xl">
                <p className="text-gray-300 leading-relaxed mb-6">
                  What I bring to a team:
                </p>

                <div className="space-y-4">
                  {[
                    "End-to-end ownership of complex UIs from architecture to pixel-level polish",
                    "Strong instinct for performance: Web Vitals, Lighthouse, lazy loading, code splitting",
                    "Experience bridging design and engineering: Figma to production with Tailwind CSS and custom component systems",
                    "A bias for clean, testable code readable in six months, not just today",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm transition-all duration-300 hover:border-emerald-400/40 hover:bg-white/[0.06] hover:translate-x-1"
                    >
                      {/* Icon */}
                      <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>

                      {/* Text */}
                      <p className="text-gray-300 leading-7 text-[15px]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            {/* Mini Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">

                <div className="relative overflow-hidden rounded-2xl p-5 text-center group">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-yellow-500/20 blur-2xl animate-pulse"></div>
                  <div className="absolute -top-6 -right-6 h-20 w-20 rounded-full bg-orange-500/20 blur-xl group-hover:scale-125 transition duration-700"></div>
                  <div className="relative z-10">
                    <Code2 className="mx-auto text-orange-400 mb-2" />
                    <p className="text-2xl font-bold text-white"> 4+ </p>
                    <p className="text-sm text-gray-400">
                      Years Exp
                    </p>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl p-5 text-center group">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-yellow-500/20 blur-2xl animate-pulse"></div>
                  <div className="absolute -top-6 -right-6 h-20 w-20 rounded-full bg-orange-500/20 blur-xl group-hover:scale-125 transition duration-700"></div>
                  <div className="relative z-10">
                    <Palette className="mx-auto text-orange-400 mb-1" />
                    <p className="text-2xl font-bold text-white"> 13+ </p>
                    <p className="text-sm text-gray-400">
                      UI Designs
                    </p>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl p-5 text-center group">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-yellow-500/20 blur-2xl animate-pulse"></div>
                  <div className="absolute -top-6 -right-6 h-20 w-20 rounded-full bg-orange-500/20 blur-xl group-hover:scale-125 transition duration-700"></div>
                  <div className="relative z-10">
                    <Award className="mx-auto text-orange-400 mb-1" />
                    <p className="text-2xl font-bold text-white"> 5+ </p>
                    <p className="text-sm text-gray-400">
                      Certifications
                    </p>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl p-5 text-center group">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-yellow-500/20 blur-2xl animate-pulse"></div>
                  <div className="absolute -top-6 -right-6 h-20 w-20 rounded-full bg-orange-500/20 blur-xl group-hover:scale-125 transition duration-700"></div>
                  <div className="relative z-10">
                    <User className="mx-auto text-orange-400 mb-1" />
                    <p className="text-2xl font-bold text-white"> 18+ </p>
                    <p className="text-sm text-gray-400">
                      Projects
                    </p>
                  </div>
                </div>
              </div>

            {/* Role Cards */}
            <div
              className="
                bg-black/60
                backdrop-blur-xl
                border border-white/10
                rounded-2xl
                p-6
                flex items-center gap-4
                hover:border-orange-500/40
                transition
              "
            >
              <Code2 className="text-orange-400" size={28} />

              <div>
                <h4 className="font-semibold">
                  Software Engineer
                </h4>
                <p className="text-gray-400 text-sm">
                  React • TypeScript • Node.js
                </p>
              </div>
            </div>

            <div
              className="
                bg-black/60
                backdrop-blur-xl
                border border-white/10
                rounded-2xl
                p-6
                flex items-center gap-4
                hover:border-orange-500/40
                transition
              "
            >
              <Palette className="text-orange-400" size={28} />

              <div>
                <h4 className="font-semibold">
                  UI/UX Designer
                </h4>
                <p className="text-gray-400 text-sm">
                  Figma • Prototyping • Motion
                </p>
              </div>
            </div>

            <div
              className="
                bg-black/60
                backdrop-blur-xl
                border border-white/10
                rounded-2xl
                p-6
                flex items-center gap-4
                hover:border-orange-500/40
                transition
              "
            >
              <Award className="text-orange-400" size={28} />

              <div>
                <h4 className="font-semibold">
                  Problem Solver
                </h4>
                <p className="text-gray-400 text-sm">
                  Clean Code • Architecture • UX
                </p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}
