const Partners = () => {
  const academicPartners = [
    "IIM Ahmedabad",
    "IIM Kozhikode",
    "IIM Visakhapatnam",
    "ISB",
    "XLRI",
    "SPJIMR",
    "NMIMS",
    "SYMBIOSIS",
    "IIT Patna",
    "SDA Bocconi",
  ];

  const countries = [
    "India",
    "Israel",
    "Japan",
    "UAE",
    "KSA",
  ];

  return (
    <section id="partners" className="section-padding bg-muted">
      <div className="container-max">
        <div className="text-center mb-16">
          <p className="text-winn-green font-semibold mb-3">OUR NETWORK</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Academic Collaborators
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We collaborate with leading business schools across India and internationally 
            to seed change leadership for the future.
          </p>
        </div>

        {/* Academic Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
          {academicPartners.map((partner, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl text-center shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <p className="font-semibold text-foreground">{partner}</p>
            </div>
          ))}
        </div>

        {/* Global Presence */}
        <div className="bg-gradient-brand rounded-2xl p-8 md:p-12 text-primary-foreground">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-3">Global Presence</h3>
            <p className="text-primary-foreground/80">
              We are globally distributed across multiple countries
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {countries.map((country, index) => (
              <div
                key={index}
                className="px-6 py-3 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-winn-gold" />
                <span className="font-medium">{country}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Kotter Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-card px-8 py-4 rounded-xl shadow-card">
            <div className="w-3 h-12 bg-gradient-accent rounded-full" />
            <div className="text-left">
              <p className="text-winn-gold font-bold text-lg">Kotter Certified</p>
              <p className="text-muted-foreground text-sm">
                India's First Kotter Training Certified Partner
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
