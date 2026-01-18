import { Mail } from "lucide-react";

const Team = () => {
  const team = [
    { name: "Rajeev Jain", email: "Rajeev@winn-t.com" },
    { name: "Savita Upponi", email: "Savita@winn-t.com" },
    { name: "Dr Chirravuri Srinivas", email: "Srinivas.ch@winn-t.com" },
    { name: "Avigail Gutman", email: "Avigail@winn-t.com" },
    { name: "Kingshuk Ganguly", email: "Kingshuk@winn-t.com" },
    { name: "Biswajit Chakraborty", email: "Biswajit@winn-t.com" },
    { name: "Silviya Jose", email: "Silviya@winn-t.com" },
  ];

  // Generate initials from name
  const getInitials = (name: string) => {
    const parts = name.replace("Dr ", "").split(" ");
    return parts.length > 1 
      ? `${parts[0][0]}${parts[parts.length - 1][0]}`
      : parts[0].substring(0, 2);
  };

  // Generate consistent color based on index
  const getAvatarGradient = (index: number) => {
    const gradients = [
      "from-winn-navy to-winn-blue",
      "from-winn-blue to-winn-green",
      "from-winn-green to-winn-blue",
      "from-winn-gold to-winn-green",
      "from-winn-navy to-winn-green",
      "from-winn-blue to-winn-gold",
      "from-winn-green to-winn-navy",
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section id="team" className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center mb-16">
          <p className="text-winn-blue font-semibold mb-3">OUR TEAM</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Meet the Experts
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Our team brings together decades of experience in corporate transformation, 
            consulting, and change management across multiple industries.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 text-center group hover:-translate-y-1"
            >
              <div
                className={`w-20 h-20 rounded-full bg-gradient-to-br ${getAvatarGradient(index)} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <span className="text-xl font-bold text-primary-foreground">
                  {getInitials(member.name)}
                </span>
              </div>
              <h3 className="font-bold text-foreground mb-2">{member.name}</h3>
              <a
                href={`mailto:${member.email}`}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-winn-blue transition-colors"
              >
                <Mail size={14} />
                {member.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
