import { Target, Eye, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Purpose",
      description:
        "To enable change for every business and each leader through their transformation journey.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "Your trusted partners in achieving transformation and meaningful change.",
    },
    {
      icon: Users,
      title: "Our Approach",
      description:
        "With experience across 18 countries in corporate and consulting, we help organizations build the capability to manage change with confidence.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-muted">
      <div className="container-max">
        <div className="text-center mb-16">
          <p className="text-winn-green font-semibold mb-3">ABOUT US</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Building Capability for Change
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Our career paths ran parallel for 20 years. They converged in 2025, under WINN-T Consulting. 
            We offer capacity building solutions on CHANGE to our clients in India and internationally.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-growth flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="text-secondary-foreground" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* What We Offer */}
        <div className="mt-20 bg-card rounded-2xl p-8 md:p-12 shadow-card">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            What We Offer
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              "Consulting + Diagnostics",
              "Development Centres",
              "Workshops on Change",
              "Executive Coaching",
              "Business School Collaboration",
            ].map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-lg bg-muted hover:bg-winn-light-blue transition-colors duration-200"
              >
                <div className="w-2 h-2 rounded-full bg-winn-gold flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
