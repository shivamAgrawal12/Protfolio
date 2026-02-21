import { useState } from "react"
import { MessageCircle, X } from "lucide-react"

/* ================= COMPONENT ================= */

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi 👋 I'm Shivam's virtual assistant. How can I help you?",
    },
  ])
  const [input, setInput] = useState("")

  /* ===== Basic Info Response ===== */
  function getBotReply(userText: string) {
    const text = userText.toLowerCase()

    if (text.includes("about")) {
      return "Shivam is a Frontend Developer & UI Engineer with 3.6+ years of experience building modern, scalable web applications using React, TypeScript, and Tailwind."
    }

    if (text.includes("skills")) {
      return "He specializes in React.js, Next.js, TypeScript, Tailwind CSS, Node.js, REST APIs, performance optimization and UI/UX design."
    }

    if (text.includes("experience")) {
      return "Shivam has 3.6+ years of professional experience working as a Software Engineer, building scalable and high-performance applications."
    }

    if (text.includes("contact")) {
      return "You can contact him at agrawalshyamcool786@gmail.com or via LinkedIn & GitHub links in the navbar."
    }

    return "Thanks for your message! Shivam will get back to you soon 😊"
  }

  function sendMessage() {
    if (!input.trim()) return

    const userMessage = {
      from: "user",
      text: input,
    }

    const botMessage = {
      from: "bot",
      text: getBotReply(input),
    }

    setMessages((prev) => [
      ...prev,
      userMessage,
      botMessage,
    ])

    setInput("")
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="
          fixed bottom-6 right-6 z-50
          p-4 rounded-full
          bg-orange-500
          text-black
          shadow-xl
          hover:scale-110
          transition
        "
      >
        {open ? <X size={20} /> : <MessageCircle size={20} />}
      </button>

      {/* Chat Window */}
      {open && (
        <div
          className="
            fixed z-50
            bottom-24 right-6
            w-[90%] sm:w-80
            h-[75vh] sm:h-96
            bg-black/90 backdrop-blur-xl
            border border-white/10
            rounded-2xl
            flex flex-col
            shadow-2xl
          "
        >
          {/* Header */}
          <div className="p-4 border-b border-white/10">
            <h3 className="font-semibold text-orange-400">
              Shivam Assistant
            </h3>
            <p className="text-xs text-gray-400">
              Ask about skills, experience, or contact
            </p>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-3 text-sm">

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`
                  max-w-[80%] p-3 rounded-lg
                  ${
                    msg.from === "user"
                      ? "ml-auto bg-orange-500 text-black"
                      : "bg-white/10 text-white"
                  }
                `}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-white/10 flex gap-2">

            <input
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage()
              }}
              placeholder="Type your question..."
              className="
                flex-1
                bg-transparent
                border border-gray-700
                rounded-lg
                px-3 py-2
                text-sm
                outline-none
                focus:border-orange-500
                transition
              "
            />

            <button
              onClick={sendMessage}
              className="
                px-3 py-2
                bg-orange-500
                text-black
                rounded-lg
                text-sm
                hover:bg-orange-600
                transition
              "
            >
              Send
            </button>

          </div>
        </div>
      )}
    </>
  )
}
