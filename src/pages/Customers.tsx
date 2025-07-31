import { Building2, Users, Award, TrendingUp } from 'lucide-react';

const Customers = () => {
  const directClients = [
    {
      name: "Fortune Engineering",
      sector: "Engineering",
      description: "Leading engineering solutions provider"
    },
    {
      name: "Indo Farm",
      sector: "Agriculture",
      description: "Agricultural equipment manufacturer"
    },
    {
      name: "Dali & Samir Engineering Pvt. Ltd.",
      sector: "Engineering",
      description: "Fuel-filling component requirements specialist"
    },
    {
      name: "Voltamp Vadodara",
      sector: "Power",
      description: "The Power of Industry - Electrical equipment manufacturer"
    },
    {
      name: "S.M. Auto",
      sector: "Automotive",
      description: "Automotive component manufacturer"
    },
    {
      name: "Hydrolift",
      sector: "Industrial",
      description: "Born to Lift - Hydraulic equipment specialist"
    },
    {
      name: "Kross Sealing Solutions",
      sector: "Sealing",
      description: "Serving Excellence since 1986"
    },
    {
      name: "Lumina Enterprises",
      sector: "Electrical",
      description: "Electrical equipment and safety solutions"
    },
    {
      name: "Artfab",
      sector: "Manufacturing",
      description: "Manufacturing solutions provider"
    }
  ];

  const tier2Clients = [
    {
      name: "Sonalika International",
      sector: "Automotive",
      count: "Sonalika International"
    },
    {
      name: "Punch Powertrain",
      sector: "Automotive",
      count: "Punch Powertrain"
    },
    {
      name: "HYVA",
      sector: "Industrial",
      count: "HYVA"
    },
    {
      name: "TATA MOTORS",
      sector: "Automotive",
      count: "TATA MOTORS"
    },
    {
      name: "ESCORTS",
      sector: "Agriculture",
      count: "ESCORTS"
    },
    {
      name: "TAFE",
      sector: "Agriculture",
      count: "TAFE"
    }
  ];

  const testimonials = [
    {
      company: "Leading Automotive OEM",
      feedback: "Dev Press Tools has consistently delivered high-quality bonded seals that meet our stringent automotive standards. Their reliability and precision have made them our preferred supplier for critical sealing applications.",
      person: "Procurement Head"
    },
    {
      company: "Major Industrial Equipment Manufacturer",
      feedback: "The quality of O-rings and oil seals from Dev Press Tools is exceptional. Their technical support team has been instrumental in helping us optimize our sealing solutions.",
      person: "Technical Manager"
    },
    {
      company: "Construction Equipment Supplier",
      feedback: "We have been working with Dev Press Tools for over 8 years. Their consistent quality and on-time delivery have helped us maintain our production schedules without any interruptions.",
      person: "Supply Chain Manager"
    }
  ];

  const sectors = [
    {
      icon: Building2,
      name: "Automotive",
      description: "OEMs and Tier-1 suppliers",
      count: "150+"
    },
    {
      icon: TrendingUp,
      name: "Industrial",
      description: "Machinery and equipment manufacturers",
      count: "120+"
    },
    {
      icon: Building2,
      name: "Construction",
      description: "Heavy equipment and infrastructure",
      count: "80+"
    },
    {
      icon: Award,
      name: "Power & Energy",
      description: "Power generation and transmission",
      count: "60+"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="hero-text text-primary-foreground fade-in">
            Our Customers
          </h1>
          <p className="hero-subtitle fade-in fade-in-delay-1">
            Trusted by leading companies across automotive, industrial, construction, 
            and power sectors for our reliable and high-quality sealing solutions.
          </p>
        </div>
      </section>

      {/* Customer Stats */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center fade-in">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Total Customers</div>
            </div>
            <div className="text-center fade-in fade-in-delay-1">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center fade-in fade-in-delay-2">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Customer Retention</div>
            </div>
            <div className="text-center fade-in fade-in-delay-3">
              <div className="text-4xl font-bold text-primary mb-2">4</div>
              <div className="text-muted-foreground">Major Sectors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors We Serve */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header fade-in">Industries We Serve</h2>
            <p className="section-subtitle fade-in fade-in-delay-1">
              Delivering specialized sealing solutions across diverse industrial sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sectors.map((sector, index) => (
              <div key={index} className="card-feature text-center fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <sector.icon className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">{sector.name}</h3>
                <p className="text-muted-foreground mb-3">{sector.description}</p>
                <div className="text-2xl font-bold text-accent">{sector.count}</div>
                <div className="text-sm text-muted-foreground">Customers</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Clients */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header fade-in">Direct Clients</h2>
            <p className="section-subtitle fade-in fade-in-delay-1">
              Proud to serve some of India's leading industrial and automotive companies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {directClients.map((client, index) => (
              <div key={index} className="card-industrial fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Building2 className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{client.name}</h3>
                    <p className="text-accent font-medium">{client.sector}</p>
                  </div>
                </div>
                <p className="text-muted-foreground">{client.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tier-2 Clients */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header fade-in">Tier-2 Partners</h2>
            <p className="section-subtitle fade-in fade-in-delay-1">
              Supporting a wide network of component suppliers and manufacturers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tier2Clients.map((client, index) => (
              <div key={index} className="card-feature text-center fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl font-bold text-primary mb-2">{client.count}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{client.name}</h3>
                <p className="text-muted-foreground">{client.sector} Sector</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header fade-in">What Our Customers Say</h2>
            <p className="section-subtitle fade-in fade-in-delay-1">
              Testimonials from our valued customers across various industries
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-feature fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="mb-6">
                  <Users className="h-12 w-12 text-primary mb-4" />
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.feedback}"
                  </p>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.person}</p>
                  <p className="text-primary">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-header fade-in mb-12">Why Companies Choose Us</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card-feature fade-in fade-in-delay-1">
                <Award className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Quality Assurance</h3>
                <p className="text-muted-foreground">
                  ISO 9001 certified processes ensure consistent quality and reliability 
                  in every product we deliver.
                </p>
              </div>
              
              <div className="card-feature fade-in fade-in-delay-2">
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Scalable Solutions</h3>
                <p className="text-muted-foreground">
                  From prototype to mass production, we scale our operations 
                  to meet your growing demands.
                </p>
              </div>
              
              <div className="card-feature fade-in fade-in-delay-3">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Technical Support</h3>
                <p className="text-muted-foreground">
                  Dedicated technical team provides engineering support and 
                  customized solutions for complex applications.
                </p>
              </div>
              
              <div className="card-feature fade-in" style={{ animationDelay: '0.8s' }}>
                <Building2 className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Reliable Partnership</h3>
                <p className="text-muted-foreground">
                  Long-term partnerships built on trust, quality delivery, 
                  and continuous improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-primary-foreground mb-6 fade-in">
              Join Our Growing Family of Satisfied Customers
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 fade-in fade-in-delay-1">
              Experience the quality and reliability that has made us a trusted 
              partner for 500+ companies across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in fade-in-delay-2">
              <a href="/contact" className="btn-primary bg-accent hover:bg-accent-hover text-accent-foreground">
                Become Our Customer
              </a>
              <a href="/products" className="btn-outline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
                View Our Products
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Customers;