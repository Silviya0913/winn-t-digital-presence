import { 
  ClipboardCheck, 
  Users, 
  GraduationCap, 
  HeartHandshake, 
  School 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: ClipboardCheck,
      title: "Consulting + Diagnostics",
      tagline: "Successful change begins with understanding the 'WHY'",
      features: [
        "Survey (30 mins, online, PDF Report), Debrief",
        "Psychometrics (15 tools, PDF Report), Debrief",
        "Focus Group Discussions (60 mins, Anonymised Insights)",
        "1:1 Interviews (30 mins, Anonymised Insights)",
        "Shadow Coaching (Observe from distance, Debrief)",
      ],
    },
    {
      icon: Users,
      title: "Development Centres",
      tagline: "Identify and nurture your top talent for change",
      features: [
        "Study your unique context",
        "Create BESPOKE tools for Assessment",
        "Offer ONE seamless experience",
        "Online or Offline options",
        "Across locations and countries",
      ],
    },
    {
      icon: GraduationCap,
      title: "Workshops on Change",
      tagline: "Empower your teams with globally accredited programs",
      features: [
        "India's first Kotter Training Certified Partner",
        "Designed ground-up through stakeholder interviews",
        "Case studies linked to your context",
        "Latest neuroscience research for debriefs",
        "Real plays (not role plays) for hands-on learning",
      ],
    },
    {
      icon: HeartHandshake,
      title: "Executive Coaching",
      tagline: "Walk with you through your transformation",
      features: [
        "Focus on context and psychological safety",
        "Engage in 1:1 coaching",
        "Enable courage, conviction and confidence",
        "Over 10,000+ hours of coaching experience",
        "Customized transition support",
      ],
    },
    {
      icon: School,
      title: "Business School Collaboration",
      tagline: "Seeding change leadership for the future",
      features: [
        "Change Workshops",
        "Diagnosis Using Psychometric Tools",
        "Guest Lectures",
        "Case Study Competitions",
        "Research Projects",
      ],
    },
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center mb-16">
          <p className="text-winn-blue font-semibold mb-3">OUR SERVICES</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Comprehensive Change Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Choose from our suite of services designed to help your organization 
            navigate change with confidence and clarity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.slice(0, 4).map((service, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-winn-blue/30"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-brand flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-primary-foreground" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-winn-green font-medium text-sm mb-4">
                    {service.tagline}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-winn-gold mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Business School Collaboration - Full Width */}
        <div className="mt-8 bg-gradient-brand rounded-2xl p-8 md:p-12 text-primary-foreground">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-xl bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                <School className="text-primary-foreground" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  {services[4].title}
                </h3>
                <p className="text-winn-gold font-medium text-sm">
                  {services[4].tagline}
                </p>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap gap-3">
                {services[4].features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-full bg-primary-foreground/10 text-sm font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
