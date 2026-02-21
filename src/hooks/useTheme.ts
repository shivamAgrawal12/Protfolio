import { useEffect, useState } from "react"

type Theme = "dark" | "light"

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("dark")

  // Load theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null

    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle(
        "dark",
        savedTheme === "dark"
      )
    } else {
      const systemDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches

      const defaultTheme = systemDark ? "dark" : "light"

      setTheme(defaultTheme)

      document.documentElement.classList.toggle(
        "dark",
        defaultTheme === "dark"
      )
    }
  }, [])

  // Update theme
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"

    setTheme(newTheme)

    document.documentElement.classList.toggle(
      "dark",
      newTheme === "dark"
    )

    localStorage.setItem("theme", newTheme)
  }

  return {
    theme,
    toggleTheme,
  }
}
