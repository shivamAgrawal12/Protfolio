import { useEffect, useState } from "react"
import { motion } from "framer-motion"

/* ================= COMPONENT ================= */

export default function CustomCursor() {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  })

  const [isHover, setIsHover] = useState(false)

  /* ---------- Mouse Move ---------- */

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", move)

    return () => window.removeEventListener("mousemove", move)
  }, [])

  /* ---------- Hover Detection ---------- */

  useEffect(() => {
    const addHover = () => setIsHover(true)
    const removeHover = () => setIsHover(false)

    const elements =
      document.querySelectorAll("a, button")

    elements.forEach((el) => {
      el.addEventListener("mouseenter", addHover)
      el.addEventListener("mouseleave", removeHover)
    })

    return () => {
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", addHover)
        el.removeEventListener("mouseleave", removeHover)
      })
    }
  }, [])

  /* ---------- Disable on Mobile ---------- */

  if (window.innerWidth < 768) return null

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="
          fixed top-0 left-0
          w-10 h-10
          rounded-full
          border border-orange-400
          pointer-events-none
          z-[9999]
        "
        animate={{
          x: mouse.x - 20,
          y: mouse.y - 20,
          scale: isHover ? 1.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      />

      {/* Inner Dot */}
      <motion.div
        className="
          fixed top-0 left-0
          w-2 h-2
          rounded-full
          bg-orange-400
          pointer-events-none
          z-[9999]
        "
        animate={{
          x: mouse.x - 4,
          y: mouse.y - 4,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      />
    </>
  )
}
