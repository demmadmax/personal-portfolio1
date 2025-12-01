import { GraduationCap, Calendar, MapPin } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="py-20 relative">
      {/* Background Elements */}
      <div className="blob w-64 h-64 bg-primary/20 bottom-0 right-0 animate-blob animation-delay-4000" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            Education
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            Academic <span className="gradient-text">Journey</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20" />

            {/* Education Card */}
            <div className="relative pl-20">
              {/* Timeline Dot */}
              <div className="absolute left-5 top-8 w-6 h-6 rounded-full bg-primary glow-primary flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-background" />
              </div>

              <div className="glass-card p-8 rounded-2xl hover:border-primary/50 transition-all duration-300 group">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      Lovely Professional University
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      Bachelor of Technology in Computer Science & Engineering
                    </p>
                  </div>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-7 h-7 text-primary" />
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>2021 - 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Punjab, India</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border/50">
                  <h4 className="font-semibold mb-3 text-foreground">Key Coursework:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Data Structures", "Algorithms", "Web Development", "Database Systems", "Software Engineering", "Cloud Computing"].map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1 text-sm bg-muted/50 text-muted-foreground rounded-full hover:bg-primary/20 hover:text-primary transition-all"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
