import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Navigation from "@/components/Navigation"
import SocialSidebar from "@/components/SocialSidebar"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <SocialSidebar />

      {/* Main content with proper responsive containers */}
      <main className="relative">
        <Hero />
        <div className="">
          <About />
          <Projects />
          <Contact />
        </div>
      </main>
    </div>
  )
}
