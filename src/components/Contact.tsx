import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-brand text-primary-foreground">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-winn-gold font-semibold mb-3">GET IN TOUCH</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Organization?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Let's discuss how we can help you navigate change with confidence. 
              Our team is ready to understand your unique context and create tailored solutions.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                  <Phone className="text-winn-gold" size={24} />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">Phone / WhatsApp</p>
                  <a href="tel:+919360408563" className="font-semibold hover:text-winn-gold transition-colors">
                    +91 93604 08563
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                  <Mail className="text-winn-gold" size={24} />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">Email</p>
                  <a href="mailto:Silviya@winn-t.com" className="font-semibold hover:text-winn-gold transition-colors">
                    Silviya@winn-t.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                  <MapPin className="text-winn-gold" size={24} />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">Global Presence</p>
                  <p className="font-semibold">India • Israel • Japan • UAE • KSA</p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/919360408563"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 bg-gradient-accent px-6 py-3 rounded-lg font-semibold text-foreground hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={20} />
              Message on WhatsApp
            </a>
          </div>

          <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="name">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-winn-gold transition-colors"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-winn-gold transition-colors"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="organization">
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-winn-gold transition-colors"
                  placeholder="Your organization name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-winn-gold transition-colors resize-none"
                  placeholder="Tell us about your needs"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-accent px-6 py-4 rounded-lg font-semibold text-foreground hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
