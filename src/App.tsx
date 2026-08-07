import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import { Toaster } from "sonner"
import AnimatedBackground from "./components/AnimatedBackground"
import CustomCursor from "./components/CustomCursor"
import ChatBot from "./components/ChatBot"
import { useScrollAnimations } from "./hooks/useScrollAnimations"
import Immediate from "./sections/Immediate";

export default function App() {
  /* Enable Scroll Animations */
  useScrollAnimations()

  return (
    <main className="relative min-h-screen overflow-x-hidden">

      {/* Live Background */}
      <AnimatedBackground />

      {/* Cursor */}
      <CustomCursor />

      {/* Navbar */}
      <Navbar />

      {/* Immediate Joiner Badge */}
      <Immediate />

      {/* Main Content */}
      <div className="pt-20 relative z-10">
        <Home />
      </div>

      {/* Chatbot */}
      <ChatBot />

      <Toaster position="top-right" richColors />
    </main>
  )
}
