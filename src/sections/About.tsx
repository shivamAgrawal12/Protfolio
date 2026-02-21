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
                bg-gradient-to-r
                from-orange-500/20
                via-purple-500/20
                to-blue-500/20
                blur-xl
                opacity-40
              "
            />

            {/* Content */}
            <div className="relative z-10 space-y-6">

              <h3 className="text-2xl font-semibold text-white">
                Hi, I'm Shivam
              </h3>

              <p className="text-gray-300 leading-relaxed">
                I'm a passionate <span className="text-orange-400 font-medium">
                Software Engineer</span> and <span className="text-orange-400 font-medium">
                UI/UX Designer</span> with over 3.6+ years of experience
                building modern, scalable, and user-focused
                web applications.
              </p>

              <p className="text-gray-400 leading-relaxed">
                I specialize in transforming complex ideas into
                intuitive digital products using React,
                TypeScript, Tailwind CSS, and modern
                frontend architecture.
              </p>

              <p className="text-gray-400 leading-relaxed">
                I enjoy working at the intersection of
                design and engineering, creating interfaces
                that are not only functional but visually engaging.
              </p>

              {/* Mini Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">

                <div className="text-center">
                  <Code2 className="mx-auto text-orange-400 mb-1" />
                  <p className="text-xl font-bold">3.6+</p>
                  <p className="text-xs text-gray-400">
                    Years Exp
                  </p>
                </div>

                <div className="text-center">
                  <Palette className="mx-auto text-orange-400 mb-1" />
                  <p className="text-xl font-bold">10+</p>
                  <p className="text-xs text-gray-400">
                    UI Designs
                  </p>
                </div>

                <div className="text-center">
                  <Award className="mx-auto text-orange-400 mb-1" />
                  <p className="text-xl font-bold">5+</p>
                  <p className="text-xs text-gray-400">
                    Certifications
                  </p>
                </div>

                <div className="text-center">
                  <User className="mx-auto text-orange-400 mb-1" />
                  <p className="text-xl font-bold">15+</p>
                  <p className="text-xs text-gray-400">
                    Projects
                  </p>
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
                  Frontend Engineer
                </h4>
                <p className="text-gray-400 text-sm">
                  React • TypeScript • Performance
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
