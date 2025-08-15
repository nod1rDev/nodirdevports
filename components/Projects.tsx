"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Github,
  Shield,
  Lock,
  Eye,
  Terminal,
  ArrowRight,
  Star,
  Calendar,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ProjectsProps {
  showAll?: boolean;
}

export default function Projects({ showAll = false }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  // Refs for scroll animations
  const headerRef = useRef(null);
  const categoriesRef = useRef(null);
  const projectsRef = useRef(null);
  const ctaRef = useRef(null);

  // InView hooks
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const categoriesInView = useInView(categoriesRef, {
    once: true,
    margin: "-50px",
  });
  const projectsInView = useInView(projectsRef, {
    once: true,
    margin: "-100px",
  });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-50px" });

  const categories = ["All", "E-Commerce", "Web Apps", "Tools", "Mobile"];

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Modern e-commerce solution with advanced filtering, cart management, and secure payment integration.",
      tech: ["Next.js", "TypeScript", "Stripe", "Prisma"],
      image: "/project1.png",
      status: "LIVE",
      icon: Shield,
      category: "E-Commerce",
      github: "https://github.com/nod1rDev/comfy_store", // This project has GitHub
      demo: "https://nodirbek-react-comfy-store.vercel.app/",
      featured: true,
      year: "2024",
    },
    {
      title: "ApexBart Solution",
      description:
        "ApexBart Solutions is a tech company specializing in custom AI-driven solutions for businesses.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      image: "/project2.png",
      status: "SERVICE",
      icon: Eye,
      category: "Business",
      demo: "https://apexbart.com",
      featured: true,
      year: "2024",
    },
    {
      title: "Portfolio Website",
      description:
        "Modern, responsive portfolio with smooth animations, dark mode, and optimized performance.",
      tech: ["Next.js", "Tailwind", "Framer Motion", "Vercel"],
      image: "/project3.png",
      status: "COMPLETED",
      icon: Lock,
      category: "Portfolio",
      github: "https://github.com/nod1rDev/bartportfolio2", // This project has GitHub
      demo: "https://bartportfolio2.vercel.app/",
      featured: false,
      year: "2024",
    },
    {
      title: "Weather Dashboard",
      description:
        "Real-time weather application with location-based forecasts, interactive maps, and data visualization.",
      tech: ["React", "Chart.js", "OpenWeather API", "PWA"],
      image: "/project4.png",
      status: "LIVE",
      icon: Terminal,
      category: "Tools",
      demo: "https://todaysrecordhigh.com/",
      featured: true,
      year: "2023",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Modern e-commerce solution with advanced filtering, cart management, and secure payment integration.",
      tech: ["Next.js", "TypeScript", "TailwindCss", "Framer Motion"],
      image: "/project5.png",
      status: "LIVE",
      icon: Shield,
      category: "E-Commerce",
      demo: "https://demo.vercel.store/",
      featured: true,
      year: "2024",
    },
    {
      title: "SR Publishing House",
      description:
        "SR Publishing House is an independent, international academic publisher committed to supporting and advancing scholarly communication across all major fields of science.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      image: "/project6.png",
      status: "SERVICE",
      icon: Eye,
      category: "Business",
      demo: "https://vertex-ten-rho.vercel.app/",
      featured: true,
      year: "2025",
    },
    {
      title: "Crypto Tracker",
      description:
        "Cryptocurrency tracking application with real-time prices, portfolio management, and market analysis.",
      tech: ["Vue.js", "Chart.js", "CoinGecko API", "Vuex"],
      image: "/project7.png",
      status: "LIVE",
      icon: Terminal,
      category: "Tools",
      demo: "https://feliperdamaceno.github.io/crypto-tracker/",
      featured: true,
      year: "2023",
    },
    {
      title: "Food Delivery App",
      description:
        "Mobile-first food delivery platform with restaurant management, order tracking, and payment processing.",
      tech: ["React Native", "Node.js", "MongoDB", "Stripe"],
      image: "/placeholder.svg?height=300&width=500",
      status: "DEVELOPMENT",
      icon: Shield,
      category: "Mobile",
      demo: "https://food.nodir.dev",
      featured: false,
      year: "2024",
    },
    {
      title: "REST API Service",
      description:
        "Scalable REST API with authentication, rate limiting, documentation, and comprehensive testing suite.",
      tech: ["Node.js", "Express", "PostgreSQL", "JWT"],
      image: "/placeholder.svg?height=300&width=500",
      status: "COMPLETED",
      icon: Lock,
      category: "API",
      github: "https://github.com/nodir", // This project has GitHub
      demo: "https://api.nodir.dev",
      featured: false,
      year: "2023",
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "LIVE":
        return "text-green-400 border-green-400/50";
      case "DEVELOPMENT":
        return "text-yellow-400 border-yellow-400/50";
      case "COMPLETED":
        return "text-blue-400 border-blue-400/50";
      default:
        return "text-primary border-primary/50";
    }
  };

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const projectCardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section
      id="projects"
      className="py-20 relative bg-black/50 backdrop-blur-sm"
    >
      <div className="absolute inset-0 bg-grid-white/5 bg-grid animate-grid-flow"></div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          ref={headerRef}
          variants={headerVariants}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="mb-4 font-mono text-sm text-muted-foreground"
          >
            <span className="text-primary">[PORTFOLIO]</span>{" "}
            {showAll ? "ALL PROJECTS" : "FEATURED PROJECTS"}
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="font-mono font-bold text-3xl md:text-4xl mb-4 matrix-text"
          >
            {showAll ? "ALL MY PROJECTS" : "MY PROJECTS"}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-muted-foreground text-lg max-w-2xl mx-auto font-mono"
          >
            <span className="text-primary">&gt;</span>{" "}
            {showAll
              ? "Complete collection of my web applications and development projects."
              : "Showcase of modern web applications built with cutting-edge technologies and best practices."}
          </motion.p>
        </motion.div>


        {/* Projects Grid */}
        <motion.div
          ref={projectsRef}
          variants={containerVariants}
          initial="hidden"
          animate={projectsInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayedProjects.map((project, index) => (
            <motion.div
              key={`${project.title}-${activeCategory}`}
              variants={projectCardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="h-full object-cover"
            >
              <Card className="project-card group relative overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-700/30 border border-slate-700/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 h-full">
                <div className="aspect-video  overflow-hidden relative">
                  <motion.img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full   object-cover  "
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className={`absolute top-3 right-3 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md border ${getStatusColor(
                      project.status
                    )}`}
                  >
                    <div className="flex items-center gap-1.5">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          project.status === "LIVE"
                            ? "bg-emerald-400"
                            : project.status === "DEVELOPMENT"
                            ? "bg-yellow-400"
                            : "bg-blue-400"
                        } animate-pulse-soft`}
                      ></div>
                      {project.status}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="absolute bottom-3 left-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10"
                  >
                    <Calendar size={12} className="text-muted-foreground" />
                    <span className="text-xs font-mono text-muted-foreground">
                      {project.year}
                    </span>
                  </motion.div>
                </div>

                <CardHeader className="relative z-10">
                  <CardTitle className="flex items-center gap-3 text-white group-hover:text-primary transition-colors duration-300 text-lg font-semibold">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"
                    >
                      <project.icon size={20} className="text-primary" />
                    </motion.div>
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10">
                  <p className="text-slate-300 mb-6 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: 0.6 + techIndex * 0.1,
                          duration: 0.3,
                        }}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1.5 rounded-full text-xs font-medium bg-slate-800/50 text-primary border border-slate-700/50 hover:border-primary/50 transition-all duration-300 cursor-default hover:bg-primary/10"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="flex gap-3"
                  >
                    {project.github ? (
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 cursor-pointer bg-transparent border-slate-600 hover:border-primary/50 hover:bg-primary/10 text-slate-300 hover:text-primary transition-all duration-300"
                        asChild
                      >
                        <Link href={project.github} target="_blank">
                          <Github size={16} className="mr-2" />
                          GitHub
                        </Link>
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        variant="outline"
                        disabled
                        className="flex-1 cursor-not-allowed bg-transparent border-slate-700/30 text-slate-500"
                      >
                        <Lock size={16} className="mr-2" />
                        Private
                      </Button>
                    )}
                    <Button
                      size="sm"
                      className="flex-1 cursor-pointer bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30 hover:border-primary/50 transition-all duration-300"
                      asChild
                    >
                      <Link href={project.demo} target="_blank">
                        <Terminal size={16} className="mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {!showAll && (
          <motion.div
            ref={ctaRef}
            initial={{ opacity: 0, y: 50 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mt-16"
          >
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="group cursor-pointer relative overflow-hidden bg-black/30 hover:bg-black/50 border border-primary/30 hover:border-primary/50 text-primary font-mono px-8 py-4 rounded-xl transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20"
                >
                  <div className="relative flex items-center gap-3">
                    <span className="text-lg">Explore All Projects</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    >
                      <ArrowRight size={20} />
                    </motion.div>
                  </div>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
