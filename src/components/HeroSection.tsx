import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import developerAvatar from "@/assets/developer-avatar.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background Blobs */}
      <div className="blob w-96 h-96 bg-primary/30 top-20 -left-48 animate-blob" />
      <div className="blob w-96 h-96 bg-accent/30 top-40 -right-48 animate-blob animation-delay-2000" />
      <div className="blob w-72 h-72 bg-primary/20 bottom-20 left-1/3 animate-blob animation-delay-4000" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block px-4 py-2 glass-card mb-6 animate-fade-in-up">
              <span className="text-primary">👋</span>
              <span className="text-muted-foreground ml-2">Welcome to my portfolio</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Hi, I'm{" "}
              <span className="gradient-text">Atharv Pandey</span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Full Stack Developer
            </h2>

            <p className="text-lg text-muted-foreground max-w-xl mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              A passionate full stack developer from Lovely Professional University, 
              building scalable web applications and creating seamless digital experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <a
                href="#projects"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:scale-105 transition-all duration-300 glow-primary"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-4 glass-card text-foreground rounded-xl font-semibold hover:scale-105 transition-all duration-300 border border-border/50 hover:border-primary/50"
              >
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-xl hover:scale-110 hover:border-primary/50 transition-all duration-300"
              >
                <Github className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-xl hover:scale-110 hover:border-primary/50 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a
                href="mailto:atharv@example.com"
                className="p-3 glass-card rounded-xl hover:scale-110 hover:border-primary/50 transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Avatar Image */}
          <div className="flex-1 flex justify-center lg:justify-end animate-fade-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl" />
              <img
                src={developerAvatar}
                alt="Atharv Pandey - Full Stack Developer"
                className="relative w-80 h-80 lg:w-[450px] lg:h-[450px] object-cover rounded-3xl animate-float"
              />
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 px-4 py-2 glass-card rounded-xl animate-float" style={{ animationDelay: "1s" }}>
                <span className="text-primary font-semibold">React.js</span>
              </div>
              <div className="absolute -bottom-4 -left-4 px-4 py-2 glass-card rounded-xl animate-float" style={{ animationDelay: "2s" }}>
                <span className="text-accent font-semibold">Node.js</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
