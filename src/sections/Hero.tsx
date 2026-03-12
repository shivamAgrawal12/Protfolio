import { motion } from "framer-motion"
import { Typewriter } from "react-simple-typewriter"
import { Rocket, MessageCircle, FileDown } from "lucide-react"

export default function Hero() {

  return (
    <>
      <section
        id="hero"
        className="
        relative min-h-screen
        flex items-center justify-center
        overflow-hidden px-6
      "
      >

        {/* Background */}
        <div className="absolute inset-0 -z-10">

          <div
            className="
            absolute inset-0
            bg-linear-to-r
            from-orange-500/10
            via-transparent
            to-purple-600/10
            animate-pulse
          "
          />

          <motion.div
            animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
            transition={{ duration: 12, repeat: Infinity }}
            className="
            absolute top-20 left-20
            w-72 h-72
            bg-orange-500/20
            rounded-full blur-3xl
          "
          />

          <motion.div
            animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="
            absolute bottom-20 right-20
            w-96 h-96
            bg-purple-500/20
            rounded-full blur-3xl
          "
          />

        </div>

        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <div
              className="
              inline-flex items-center gap-2
              px-4 py-1 rounded-full
              bg-orange-500/10 text-orange-500
              mb-6 text-sm
            "
            >
              ⚡ Available for Opportunities
            </div>

            <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold leading-tight mb-6">

              Hi, I'm <span className="text-orange-500">Shivam</span>

              <br />

              <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-pink-500">
                Agrawal
              </span>

            </h1>

            <h2 className="text-xl md:text-2xl text-gray-400 mb-6">

              I'm a{" "}

              <span className="text-orange-400 font-semibold">

                <Typewriter
                  words={[
                    "Frontend Developer",
                    "UI Engineer",
                    "Creative Designer",
                    "Problem Solver",
                  ]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />

              </span>

            </h2>

            <p className="text-gray-400 max-w-xl mb-10 leading-relaxed">
              I design and develop high-performance,
              visually engaging digital experiences
              using modern technologies like
              React, TypeScript, and Tailwind CSS.
            </p>

            <div className="flex flex-wrap gap-4">

              {/* View Work */}
              <a
                href="#projects"
                className="
                px-7 py-3 rounded-lg
                bg-orange-500 hover:bg-orange-600
                transition font-medium
                flex items-center gap-2
              "
              >
                <Rocket size={18} />
                View Work
              </a>

              {/* Contact */}
              <a
                href="#contact"
                className="
                px-7 py-3 rounded-lg
                border border-orange-500
                text-orange-500
                hover:bg-orange-500
                hover:text-black
                transition font-medium
                flex items-center gap-2
              "
              >
                <MessageCircle size={18} />
                Let's Connect
              </a>

              {/* Download Resume */}
              <a
                href="/resume.pdf"
                download
                className="
                px-7 py-3 rounded-lg
                border border-gray-600
                text-gray-300
                hover:border-orange-500
                hover:text-orange-500
                transition font-medium
                flex items-center gap-2
              "
              >
                <FileDown size={18} />
                Resume
              </a>

            </div>

          </motion.div>


          {/* CODE TAB */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="
              bg-black/70
              backdrop-blur-xl
              border border-white/10
              rounded-2xl p-6 shadow-2xl
            "
            >

              <div className="flex gap-2 mb-4">
                <span className="w-3 h-3 bg-red-500 rounded-full" />
                <span className="w-3 h-3 bg-yellow-400 rounded-full" />
                <span className="w-3 h-3 bg-green-500 rounded-full" />
              </div>

              <pre
                className="
                text-sm text-gray-300
                overflow-x-auto
                h-[260px] md:h-auto
              "
              >

                {`const developer = {
  name: "Shivam Agrawal",
  role: "Frontend Engineer",
  designer: true,
  experience: "3.6+ Years",
  skills: [
    "React",
    "TypeScript",
    "Tailwind",
    "Next.js"
  ],
  passion: "Building Impactful UI"
};`}

              </pre>

            </motion.div>

          </motion.div>

        </div>

      </section>
    </>
  )
}