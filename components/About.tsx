"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Smartphone, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const workExperience = [
    {
      company: "ApexBart Solution",
      role: "Frontend Developer",
      period: "October 2024 - Present",
      type: "Remote",
      description:
        "Working on multiple projects with modern tech stack. Collaborating with international teams and delivering high-quality solutions.",
      highlights: [
        "Modern Frontend Development",
        "Team Collaboration",
        "Project Management",
      ],
    },
    {
      company: "SmartBase",
      role: "Frontend Developer",
      period: "August 2024 - January 2025",
      type: "Remote",
      description:
        "Worked on 3-4 team projects, enhanced algorithmic thinking, and gained solid experience in frontend-backend integration.",
      highlights: [
        "Team Projects",
        "Algorithm Development",
        "Full-Stack Integration",
      ],
    },
    {
      company: "Najot Ta'lim",
      role: "Assistant Instructor",
      period: "March 2024 - July 2024",
      type: "On-site",
      description:
        "Mentored students in frontend development, conducted code reviews, and assisted in curriculum development.",
      highlights: ["Teaching", "Mentoring", "Technical Leadership"],
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      className="py-16 bg-black/50 relative overflow-hidden scroll-smooth"
    >
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-primary/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-primary/20 rounded-full animate-bounce"></div>
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="container mx-auto px-4 lg:px-8 relative z-10 max-w-7xl"
      >
        <motion.div
          variants={itemVariants}
          className="text-center mb-20 lg:mb-24"
        >
          <div className="mb-6 font-mono text-sm text-muted-foreground animate-fade-in">
            <span className="text-primary">[PROFILE]</span> DEVELOPER INFO
          </div>
          <h2 className="font-mono font-bold text-4xl md:text-5xl lg:text-6xl mb-6 matrix-text">
            ABOUT ME
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg lg:text-xl max-w-3xl mx-auto font-mono leading-relaxed">
            <span className="text-primary">&gt;</span> Passionate frontend
            developer creating modern, responsive web applications with
            cutting-edge technologies and clean code practices.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-20 lg:mb-24"
        >
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <div className="terminal-border rounded-xl p-8 relative group mx-auto lg:mx-0 w-full max-w-md lg:max-w-none hover:scale-105 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src="/nodir.dev.jpg"
                alt="Nodir - Frontend Developer"
                className="w-full h-[500px] md:h-[650px]  object-fill rounded-xl neon-glow relative z-10"
              />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-primary rounded-full animate-pulse"></div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="order-1 lg:order-2 space-y-8"
          >
            <div>
              <h3 className="font-mono font-semibold text-2xl lg:text-3xl mb-6 text-primary flex items-center">
                <Terminal className="w-7 h-7 mr-3" />
                DEVELOPER PROFILE
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-sm lg:text-base">
                {[
                  { label: "Name", value: "Nodir" },
                  { label: "Role", value: "Frontend Developer" },
                  { label: "Experience", value: "1+ Years" },
                  { label: "Location", value: "Uzbekistan" },
                ].map((item, index) => (
                  <div
                    key={item.label}
                    className="flex flex-col space-y-1 p-3 rounded-lg bg-gray-900/30 border border-primary/20 hover:border-primary/40 transition-colors"
                  >
                    <span className="text-primary text-xs uppercase tracking-wider">
                      {item.label}
                    </span>
                    <span className="text-white">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-primary font-mono text-lg">Specialization:</p>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Tailwind CSS"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-mono border border-primary/30 hover:bg-primary/30 transition-colors"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            <p className="text-muted-foreground font-mono leading-relaxed text-base lg:text-lg">
              I'm a dedicated frontend developer with a passion for creating
              beautiful, functional, and user-friendly web applications. I love
              working with modern technologies and always strive to write clean,
              maintainable code that delivers exceptional user experiences.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="terminal-border rounded-xl p-8 lg:p-12 hologram relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-2xl"></div>

          <h3 className="font-mono font-semibold text-2xl lg:text-3xl mb-8 lg:mb-12 text-primary flex items-center">
            <Terminal className="w-7 h-7 mr-3" />
            TECH STACK & TOOLS
          </h3>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
            <div className="space-y-6">
              {[
                { name: "React", level: 95, category: "Framework" },
                { name: "Next.js", level: 90, category: "Framework" },
                { name: "TypeScript", level: 78, category: "Language" },
                { name: "Tailwind CSS", level: 92, category: "Styling" },
              ].map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-mono text-base lg:text-lg text-primary">
                      {skill.name}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-mono text-muted-foreground px-2 py-1 bg-gray-800/50 rounded">
                        {skill.category}
                      </span>
                      <span className="text-sm font-mono text-primary font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden relative">
                    <div
                      className="h-full bg-gradient-to-r from-primary/60 to-primary rounded-full transition-all duration-1000 ease-out group-hover:from-primary group-hover:to-primary/80 relative"
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${index * 100}ms`,
                      }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {[
                { name: "JavaScript", level: 94, category: "Language" },
                { name: "Framer Motion", level: 50, category: "Animation" },
                { name: "Node.js", level: 30, category: "Backend" },
                { name: "Git & GitHub", level: 60, category: "Tools" },
              ].map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-mono text-base lg:text-lg text-primary">
                      {skill.name}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-mono text-muted-foreground px-2 py-1 bg-gray-800/50 rounded">
                        {skill.category}
                      </span>
                      <span className="text-sm font-mono text-primary font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden relative">
                    <div
                      className="h-full bg-gradient-to-r from-primary/60 to-primary rounded-full transition-all duration-1000 ease-out group-hover:from-primary group-hover:to-primary/80 relative"
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${(index + 4) * 100}ms`,
                      }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div variants={containerVariants} className="space-y-8 mb-20">
          <motion.h3
            variants={itemVariants}
            className="font-mono font-semibold text-2xl lg:text-3xl mb-6 text-primary flex items-center"
          >
            <Terminal className="w-7 h-7 mr-3" />
            WORK EXPERIENCE
          </motion.h3>

          <motion.div variants={containerVariants} className="grid gap-6">
            {workExperience.map((job, index) => (
              <motion.div
                key={job.company}
                variants={itemVariants}
                custom={index}
                whileHover={{ scale: 1.02, y: -5 }}
                className="terminal-border border border-gray-700 rounded-xl p-6 relative group hover:neon-glow transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h4 className="text-primary text-xl font-mono font-semibold mb-2">
                        {job.company}
                      </h4>
                      <p className="text-lg text-white/90 font-mono">
                        {job.role}
                      </p>
                    </div>

                    <div className="text-right">
                      <div className="text-primary/80 font-mono mb-2">
                        {job.period}
                      </div>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-mono border border-primary/30">
                        {job.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground font-mono leading-relaxed mb-4">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {job.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 bg-gray-900/50 text-primary/90 rounded-full text-sm font-mono border border-primary/20"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="container mx-auto px-4 lg:px-8 relative z-10 max-w-7xl"
        >
          {/* Existing content ... */}

          {/* CERTIFICATIONS SECTION */}
          <motion.div variants={containerVariants} className="mb-20">
            <motion.h3
              variants={itemVariants}
              className="font-mono font-semibold text-2xl lg:text-3xl mb-12 text-primary flex items-center"
            >
              <Terminal className="w-7 h-7 mr-3" />
              CERTIFICATIONS
            </motion.h3>

            <div className="grid gap-12 lg:gap-16">
              {/* Certificate 1 */}
              <motion.div
                variants={itemVariants}
                className="grid lg:grid-cols-2 gap-8 items-center terminal-border p-6 rounded-xl hover:neon-glow transition"
              >
                <img
                  src="/cefr.jpg"
                  alt="English B2 Certificate"
                  className="rounded-xl shadow-lg  h-[350px]  object-contain mx-auto"
                />
                <div className="space-y-4">
                  <h4 className="text-primary font-mono text-xl font-semibold">
                    English B2 Multi-level Certificate
                  </h4>
                  <p className="text-muted-foreground font-mono leading-relaxed">
                    Achieved B2 proficiency in English, demonstrating advanced
                    understanding in reading, writing, listening, and speaking.
                  </p>
                </div>
              </motion.div>

              {/* Certificate 2 */}
              <motion.div
                variants={itemVariants}
                className="grid lg:grid-cols-2 gap-8 items-center terminal-border p-6 rounded-xl hover:neon-glow transition"
              >
                <div className="order-2 lg:order-1 space-y-4">
                  <h4 className="text-primary font-mono text-xl font-semibold">
                    Najot Ta'lim Certificate
                  </h4>
                  <p className="text-muted-foreground font-mono leading-relaxed">
                    Successfully completed intensive training at Najot Ta'lim in
                    frontend development, focusing on modern frameworks and
                    clean coding practices.
                  </p>
                </div>
                <img
                  src="/najotTalim.jpg"
                  alt="Najot Ta'lim Certificate"
                  className="order-1 lg:order-2 h-[350px]  rounded-xl shadow-lg   object-contain mx-auto"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Existing Work Experience Section ... */}
        </motion.div>
      </motion.div>
    </section>
  );
}
