import { Globe, Server, Palette, Smartphone } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Application Development",
    description: "Building modern, scalable web applications using React, Next.js, and other cutting-edge frameworks with focus on performance and user experience.",
  },
  {
    icon: Server,
    title: "REST API Development",
    description: "Designing and implementing robust, secure, and well-documented RESTful APIs using Node.js, Express, and database integration.",
  },
  {
    icon: Palette,
    title: "Responsive UI Design",
    description: "Creating beautiful, intuitive, and fully responsive user interfaces that work seamlessly across all devices and screen sizes.",
  },
  {
    icon: Smartphone,
    title: "Full Stack Solutions",
    description: "End-to-end development from database design to frontend implementation, ensuring cohesive and efficient application architecture.",
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-20 relative">
      {/* Background Elements */}
      <div className="blob w-80 h-80 bg-accent/20 top-1/2 -left-40 animate-blob" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            What I Do
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            I offer comprehensive development services to help bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card p-8 rounded-2xl group hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 shrink-0 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
