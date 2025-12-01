import { Code2, Rocket, Users, Zap } from "lucide-react";

const stats = [
  { icon: Code2, value: "20+", label: "Projects Completed" },
  { icon: Rocket, value: "15+", label: "Technologies Used" },
  { icon: Users, value: "10+", label: "Happy Clients" },
  { icon: Zap, value: "2+", label: "Years Experience" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      {/* Background Elements */}
      <div className="blob w-64 h-64 bg-accent/20 top-1/2 -right-32 animate-blob" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            About Me
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            Know Me <span className="gradient-text">Better</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm <span className="text-primary font-semibold">Atharv Pandey</span>, 
              a passionate Full Stack Developer currently pursuing my degree at{" "}
              <span className="text-foreground font-semibold">Lovely Professional University</span>, India.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in web development started with curiosity and has evolved into 
              a deep passion for creating elegant, efficient, and scalable web applications. 
              I specialize in modern JavaScript frameworks, backend development, and creating 
              intuitive user experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing 
              to open source, or sharing my knowledge with the developer community.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {["Problem Solver", "Team Player", "Quick Learner", "Creative Thinker"].map((trait) => (
                <span
                  key={trait}
                  className="px-4 py-2 glass-card rounded-full text-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-all cursor-default"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="glass-card p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300 hover:border-primary/50 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-3xl font-bold gradient-text mb-1">{stat.value}</h3>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
