import { motion } from "framer-motion"

export default function GitHub() {
  const username = "your-github-username"

  return (
    <section
      className="
        py-15 px-6
        bg-white dark:bg-slate-900
        transition-colors
      "
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4">
          GitHub Activity
        </h2>

        <p className="text-slate-500 dark:text-slate-400">
          My open-source contributions
        </p>
      </motion.div>

      {/* Stats */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

        {/* Profile Stats */}
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent`}
          alt="GitHub Stats"
          className="w-full rounded-xl shadow"
        />

        {/* Streak */}
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=transparent`}
          alt="GitHub Streak"
          className="w-full rounded-xl shadow"
        />

      </div>
    </section>
  )
}
