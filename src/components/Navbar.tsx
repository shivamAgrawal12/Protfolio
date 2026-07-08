import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Link } from "react-scroll"
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import {
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from "lucide-react"

import logo from "../assets/logo.png"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const scroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", scroll)
    return () => window.removeEventListener("scroll", scroll)
  }, [])

  const links = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Experience", to: "experience" },
    { name: "Skills", to: "skills" },
    { name: "Education", to: "education" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      className={`
        fixed w-full z-50 transition-all
        ${
          scrolled
            ? "bg-black/70 backdrop-blur-xl shadow-lg"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} className="w-15" />
        </div>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">

          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              smooth
              offset={-80}
              className="cursor-pointer hover:text-orange-400"
            >
              {l.name}
            </Link>
          ))}

          <a href="mailto:agrawalshivam7352@gmail.com">
            <Mail size={18} />
          </a>

          <a href="https://github.com/shivamAgrawal12" target="_blank">
            <Github size={18} />
          </a>

          <a href="https://www.linkedin.com/in/shivam-agrawal-developer/" target="_blank">
            <Linkedin size={18} />
          </a>

          <a href="https://wa.me/917352334273?text=Hello%20Shivam%20Agrawal,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp
          ">
            <FaWhatsapp size={18} />
          </a>

          <a href="tel:+917352334273"
              aria-label="Call Shivam Agrawal"
          >
            <FaPhoneAlt size={14} />
          </a>
        </div>

        {/* Mobile */}
        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-black/90 px-6 py-6 space-y-5">

          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              smooth
              onClick={() => setOpen(false)}
              className="block"
            >
              {l.name}
            </Link>
          ))}
        </div>
      )}
    </motion.nav>
  )
}
