import { motion } from "framer-motion"
import {
  Mail,
  Github,
  Linkedin,
  Send,
} from "lucide-react"
import { useRef } from "react"
import emailjs from "@emailjs/browser"

/* ================= COMPONENT ================= */

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formRef.current) return

    const formData = new FormData(formRef.current)

    const name = formData.get("user_name") as string
    const email = formData.get("user_email") as string
    const message = formData.get("message") as string

    // Combine all info into ONE message field
    const finalMessage = `
New Message from Portfolio

----------------------------------------

Name: ${name}
Email: ${email}

----------------------------------------

Message:
${message}

----------------------------------------
`

    emailjs
      .send(
        "service_csa1qfj",
        "template_lbl35dm",
        {
          message: finalMessage, // 👈 sending everything inside message
        },
        "NoFD-Mq0GLCONReKg"
      )
      .then(
        () => {
          alert("Message sent successfully 🚀")
          formRef.current?.reset()
        },
        (error) => {
          console.error(error)
          alert("Failed to send message ❌")
        }
      )
  }

  return (
    <section
      id="contact"
      className="
        py-32 px-6
        relative
        overflow-hidden
      "
    >
      {/* Background */}
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
            Get In Touch
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto">
            Let's collaborate and build something amazing
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE (UNCHANGED) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Contact Information
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Have a project in mind or want to discuss
              opportunities? Feel free to reach out.
              I'm always open to meaningful conversations.
            </p>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-orange-500/10 text-orange-400">
                <Mail size={20} />
              </div>

              <span>
                agrawalshivam7352@gmail.com
              </span>
            </div>

            <div className="flex gap-5 pt-6">
              <a
                href="mailto:agrawalshivam7352@gmail.com"
                className="p-3 rounded-full bg-white/5 hover:bg-orange-500 transition"
              >
                <Mail />
              </a>

              <a
                href="https://github.com/shivamAgrawal12"
                target="_blank"
                className="p-3 rounded-full bg-white/5 hover:bg-orange-500 transition"
              >
                <Github />
              </a>

              <a
                href="https://www.linkedin.com/in/shivam-agrawal-developer/"
                target="_blank"
                className="p-3 rounded-full bg-white/5 hover:bg-orange-500 transition"
              >
                <Linkedin />
              </a>
            </div>
          </motion.div>

          {/* FORM (UNCHANGED DESIGN) */}
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="
              bg-black/60
              backdrop-blur-xl
              border border-white/10
              rounded-3xl
              p-8 md:p-10
              shadow-xl
              space-y-6
            "
          >
            <div className="relative">
              <input
                type="text"
                name="user_name"
                required
                className="
                  peer w-full bg-transparent
                  border border-gray-700 rounded-lg
                  px-4 py-3 outline-none
                  focus:border-orange-500 transition
                "
              />
              <label className="absolute left-4 top-3 text-gray-400 bg-black px-1 transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-orange-400 peer-valid:-top-2 peer-valid:text-xs peer-valid:text-orange-400">
                Your Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                name="user_email"
                required
                className="
                  peer w-full bg-transparent
                  border border-gray-700 rounded-lg
                  px-4 py-3 outline-none
                  focus:border-orange-500 transition
                "
              />
              <label className="absolute left-4 top-3 text-gray-400 bg-black px-1 transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-orange-400 peer-valid:-top-2 peer-valid:text-xs peer-valid:text-orange-400">
                Email Address
              </label>
            </div>

            <div className="relative">
              <textarea
                name="message"
                rows={4}
                required
                className="
                  peer w-full bg-transparent
                  border border-gray-700 rounded-lg
                  px-4 py-3 outline-none
                  focus:border-orange-500 transition resize-none
                "
              />
              <label className="absolute left-4 top-3 text-gray-400 bg-black px-1 transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-orange-400 peer-valid:-top-2 peer-valid:text-xs peer-valid:text-orange-400">
                Message
              </label>
            </div>

            <button
              type="submit"
              className="
                w-full flex items-center justify-center gap-2
                px-6 py-3 rounded-lg
                bg-orange-500 hover:bg-orange-600
                transition font-medium shadow-lg
                hover:shadow-orange-500/40
              "
            >
              Send Message <Send size={16} />
            </button>

          </motion.form>
        </div>
      </div>
    </section>
  )
}