import { motion, AnimatePresence } from "framer-motion"

/* ================= TYPES ================= */

export interface Project {
  id: number
  title: string
  description: string
  image: string
  tech: string[]
  github: string
  demo: string
}

interface Props {
  project: Project | null
  onClose: () => void
}

/* ================= COMPONENT ================= */

export default function ProjectModal({
  project,
  onClose,
}: Props) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="
            fixed inset-0 z-50
            bg-black/70
            backdrop-blur-sm
            flex items-center justify-center
            px-4
          "
        >
          {/* Overlay */}
          <div
            className="absolute inset-0"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="
              relative
              max-w-2xl w-full
              bg-[var(--card)]
              rounded-2xl
              shadow-xl
              overflow-hidden
            "
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">
                {project.title}
              </h3>

              <p className="text-slate-500 dark:text-slate-400 mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="
                      px-3 py-1 text-sm
                      rounded-full
                      bg-indigo-500/10
                      text-indigo-500
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    px-4 py-2 rounded-lg
                    bg-slate-800 dark:bg-slate-200
                    text-white dark:text-black
                    hover:opacity-80
                    transition
                  "
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    px-4 py-2 rounded-lg
                    bg-indigo-600
                    text-white
                    hover:bg-indigo-700
                    transition
                  "
                >
                  Live Demo
                </a>
              </div>
            </div>

            {/* Close */}
            <button
              onClick={onClose}
              className="
                absolute top-3 right-3
                w-8 h-8 rounded-full
                bg-black/10 dark:bg-white/10
                hover:bg-black/20 dark:hover:bg-white/20
                transition
              "
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
