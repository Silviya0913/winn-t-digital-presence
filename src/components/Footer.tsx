import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-max section-padding !py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <img src={logo} alt="Winn-T Consulting" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-primary-foreground/70 max-w-sm">
              Enabling change for every business and each leader through their transformation journey.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Services", "Team", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-primary-foreground/70 hover:text-winn-gold transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>Consulting + Diagnostics</li>
              <li>Development Centres</li>
              <li>Workshops on Change</li>
              <li>Executive Coaching</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} WINN-T Consulting. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-sm">
            We Implement New Normal – Together
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
