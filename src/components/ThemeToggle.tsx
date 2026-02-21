import { useTheme } from "../hooks/useTheme"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="
        w-10 h-10 rounded-full
        flex items-center justify-center
        bg-slate-800 dark:bg-slate-200
        text-white dark:text-slate-900
        hover:scale-110
        transition-all
        duration-300
      "
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  )
}
