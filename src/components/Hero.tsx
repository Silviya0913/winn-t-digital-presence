import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Business transformation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-max section-padding text-center pt-32">
        <div className="max-w-4xl mx-auto">
          <p className="text-winn-gold font-semibold text-lg mb-4 animate-fade-up opacity-0" style={{ animationDelay: "0.1s" }}>
            Your Trusted Partners in Transformation
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.2s" }}>
            We Implement New Normal –{" "}
            <span className="text-winn-gold">Together</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto animate-fade-up opacity-0" style={{ animationDelay: "0.3s" }}>
            Enabling change for every business and each leader through their transformation journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0" style={{ animationDelay: "0.4s" }}>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-gradient-accent px-8 py-4 rounded-lg text-foreground font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Our Services
              <ArrowRight size={20} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-all duration-300"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto animate-fade-up opacity-0" style={{ animationDelay: "0.5s" }}>
          {[
            { number: "18+", label: "Countries Served" },
            { number: "10,000+", label: "Coaching Hours" },
            { number: "20+", label: "Years Experience" },
            { number: "15+", label: "Psychometric Tools" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-winn-gold mb-1">
                {stat.number}
              </p>
              <p className="text-sm text-primary-foreground/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center pt-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
