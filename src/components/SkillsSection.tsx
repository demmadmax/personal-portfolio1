import { Code, Server, Wrench } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Frontend",
    color: "primary",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Tailwind CSS", "Next.js"],
  },
  {
    icon: Server,
    title: "Backend",
    color: "accent",
    skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"],
  },
  {
    icon: Wrench,
    title: "Tools & Others",
    color: "secondary",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Docker", "Linux", "Figma"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 relative">
      {/* Background Elements */}
      <div className="blob w-72 h-72 bg-primary/20 bottom-0 -left-36 animate-blob animation-delay-2000" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            My Skills
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-xl bg-${category.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <category.icon className={`w-7 h-7 text-${category.color}`} />
              </div>

              <h3 className="text-2xl font-bold mb-6">{category.title}</h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-muted/50 rounded-lg text-sm text-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default"
                    style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
