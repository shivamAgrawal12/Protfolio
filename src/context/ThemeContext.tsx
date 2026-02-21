import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"

type Theme = "dark" | "light"

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<
  ThemeContextType | undefined
>(undefined)

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState<Theme>("dark")

  /* Load Theme */
  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme

    if (saved) {
      setTheme(saved)
      document.documentElement.classList.add(saved)
    } else {
      document.documentElement.classList.add("dark")
    }
  }, [])

  /* Toggle */
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"

    document.documentElement.classList.remove("dark", "light")
    document.documentElement.classList.add(newTheme)

    localStorage.setItem("theme", newTheme)
    setTheme(newTheme)
  }

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)

  if (!ctx)
    throw new Error(
      "useTheme must be inside ThemeProvider"
    )

  return ctx
}
