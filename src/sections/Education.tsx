import { motion } from "framer-motion"
import {
  GraduationCap,
  Award,
  Calendar,
} from "lucide-react"

/* ================= DATA ================= */

const educationData = [
  {
    degree: "Master of Computer Application (MCA)",
    field: "Computer Application",
    institute: "MS Ramaiah Institute of Technology",
    duration: "2021 - 2022",
    location: "Bangalore, India",
  },
  {
    degree: "Bachelor of Computer Application (BCA)",
    field: "Computer Application",
    institute: "Teerthankar Mahaveer University",
    duration: "2017 - 2020",
    location: "Moradabad, India",
  },
  
]

/* ================= COMPONENT ================= */

export default function Education() {
  return (
    <section
      id="education"
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
            Education
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto">
            Academic background and continuous learning
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative space-y-12">

          {/* Vertical Line */}
          <div className="hidden md:block absolute left-6 top-0 bottom-0 w-[2px] bg-orange-500/30" />

          {educationData.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
              }}
              viewport={{ once: true }}
              className="
                relative
                md:pl-20
              "
            >
              {/* Dot */}
              <div
                className="
                  hidden md:flex
                  absolute left-[18px] top-6
                  w-4 h-4
                  bg-orange-500
                  rounded-full
                  shadow-lg
                "
              />

              {/* Card */}
              <div
                className="
                  bg-black/60
                  backdrop-blur-xl
                  border border-white/10
                  rounded-3xl
                  p-8
                  shadow-xl
                  hover:border-orange-500/40
                  transition
                "
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">

                  <div className="flex items-center gap-3">
                    <GraduationCap className="text-orange-400" />

                    <h3 className="text-xl font-semibold">
                      {edu.degree}
                    </h3>
                  </div>

                  <div
                    className="
                      flex items-center gap-2
                      text-sm text-orange-400
                      bg-orange-500/10
                      px-3 py-1 rounded-full
                      border border-orange-500/30
                    "
                  >
                    <Calendar size={14} />
                    {edu.duration}
                  </div>

                </div>

                {/* Details */}
                <div className="text-gray-300 space-y-2">

                  <p>
                    <span className="text-orange-400 font-medium">
                      Field:
                    </span>{" "}
                    {edu.field}
                  </p>

                  <p>
                    <span className="text-orange-400 font-medium">
                      Institute:
                    </span>{" "}
                    {edu.institute}
                  </p>

                  <p>
                    <span className="text-orange-400 font-medium">
                      Location:
                    </span>{" "}
                    {edu.location}
                  </p>

                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}
