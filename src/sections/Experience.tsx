import { motion } from "framer-motion"

/* ================= DATA ================= */

const experiences = [
  {
    role: "Software Engineer",
    company: "LeapMile Robotics",
    duration: "Aug 2022 - Feb 2026 (3.6+ years)",
    highlights: [
      "Achieved up to 70% improvement in application and API performance through systematic optimization, refactoring, and efficient state management.",
      "Developed and maintained scalable, secure, and high-performance web applications using React.js, TypeScript, JavaScript, Tailwind CSS, and Python.",
      "Led and collaborated with cross-functional teams to deliver impactful, user-focused UI features that improved product usability and business outcomes.",
      "Enhanced application performance, accessibility, and code quality by implementing modern frontend best practices and reusable component architectures.",
      "Leveraged Git for version control and implemented structured branching strategies to streamline development, code reviews, testing, and release workflows."
    ],
  },
]

/* ================= COMPONENT ================= */

export default function Experience() {
  return (
    <section
      id="experience"
      className="
        py-32 px-6
        relative
        overflow-hidden
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-br
          from-orange-500/5
          via-transparent
          to-purple-500/5
          -z-10
        "
      />

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-4">
            Work Experience
          </h2>

          <p className="text-gray-400">
            Professional journey and key achievements
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="hidden md:block absolute left-4 top-0 bottom-0 w-[2px] bg-orange-500/30" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="
                relative
                md:pl-16
                mb-16
              "
            >
              {/* Timeline Dot */}
              <div className="
                hidden md:block
                absolute left-[6px] top-3
                w-4 h-4
                bg-orange-500
                rounded-full
                shadow-lg
              " />

              {/* Experience Card */}
              <div
                className="
                  bg-black/60
                  backdrop-blur-xl
                  border border-white/10
                  rounded-3xl
                  p-8 md:p-12
                  shadow-xl
                  hover:border-orange-500/40
                  transition
                "
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">

                  <div>
                    <h3 className="text-2xl font-bold text-orange-400">
                      {exp.role}
                    </h3>

                    <p className="text-gray-300 font-medium">
                      {exp.company}
                    </p>
                  </div>

                  <span
                    className="
                      px-4 py-2
                      bg-orange-500/10
                      text-orange-400
                      text-sm
                      rounded-full
                      border border-orange-500/30
                    "
                  >
                    {exp.duration}
                  </span>

                </div>

                {/* Highlights */}
                <ul className="space-y-4 text-gray-300">

                  {exp.highlights.map((point, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-orange-400 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}

                </ul>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}
