import { useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimations() {
  useEffect(() => {
    /* Fade Up */
    gsap.utils.toArray<HTMLElement>(".fade-up").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      )
    })

    /* Stagger */
    gsap.utils
      .toArray<HTMLElement>(".stagger-parent")
      .forEach((parent) => {
        const children =
          parent.querySelectorAll(".stagger-item")

        gsap.fromTo(
          children,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: parent,
              start: "top 85%",
            },
          }
        )
      })

    /* Parallax */
    gsap.utils
      .toArray<HTMLElement>(".parallax")
      .forEach((el) => {
        gsap.fromTo(
          el,
          { y: 100 },
          {
            y: -100,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        )
      })

    return () => {
      ScrollTrigger.getAll().forEach((t) =>
        t.kill()
      )
    }
  }, [])
}
