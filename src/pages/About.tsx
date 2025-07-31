import { Award, Target, Users, Leaf, TrendingUp, Factory } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: "2008", event: "Dev Press Tools established in Solapur, Maharashtra" },
    { year: "2012", event: "First major contract with automotive industry" },
    { year: "2016", event: "ISO 9001 certification achieved" },
    { year: "2019", event: "Expanded manufacturing facility with advanced machinery" },
    { year: "2022", event: "MSME ZED Bronze certification received" },
    { year: "2024", event: "500+ satisfied customers milestone reached" },
  ];

  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Commitment to delivering products that meet and exceed industry standards through rigorous quality control processes."
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Building long-term partnerships by understanding customer needs and providing tailored solutions."
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Implementing eco-friendly manufacturing practices and responsible resource management."
    },
    {
      icon: TrendingUp,
      title: "Continuous Innovation",
      description: "Investing in technology and process improvements to stay ahead of industry requirements."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="hero-text text-primary-foreground fade-in">
            About Dev Press Tools
          </h1>
          <p className="hero-subtitle fade-in fade-in-delay-1">
            Pioneering precision manufacturing in Solapur, India since 2017. 
            Building a legacy of quality, innovation, and customer satisfaction.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="section-header mb-6">Our Journey</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Dev Press Tools began its journey in 2017 with a vision to become a leading 
                  manufacturer of high-quality seals and rubber components in India. Founded 
                  in the industrial hub of Solapur, Maharashtra, we started with a small team 
                  and a big dream - to deliver precision-engineered products that meet the 
                  most demanding industrial requirements.
                </p>
                <p>
                  Over the years, we have evolved from a small manufacturing unit to a 
                  comprehensive solution provider for bonded seals, oil seals, O-rings, 
                  rubber parts, and shell components. Our commitment to quality and innovation 
                  has earned us the trust of customers across various industries.
                </p>
                <p>
                  Today, with our ISO 9001 certification and MSME ZED Bronze recognition, 
                  we continue to push the boundaries of manufacturing excellence while 
                  maintaining our core values of quality, integrity, and customer satisfaction.
                </p>
              </div>
            </div>
            <div className="slide-in-right">
              <div className="card-industrial">
                <Factory className="h-16 w-16 text-primary mb-6" />
                <h3 className="text-2xl font-semibold text-foreground mb-4">Manufacturing Excellence</h3>
                <p className="text-muted-foreground mb-6">
                  State-of-the-art facility equipped with advanced pressing machines, 
                  lathe & drilling equipment, rubber molding and mixing machines, 
                  and a comprehensive in-house testing laboratory.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">8+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">100+</div>
                    <div className="text-sm text-muted-foreground">Happy Customers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Director's Message */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="card-feature text-center">
              <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                <img
                  src="/directorimage.png"
                  alt="Director Harish V. Guntuk"
                  className="w-full h-full object-cover rounded-full border-4 border-primary shadow-lg"
                />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Director's Message</h2>
              <div className="text-xl text-muted-foreground italic mb-6 leading-relaxed">
                "As the founder of our esteemed manufacturing
                  company, I am proud to say that we have always
                  been committed to providing our customers with the
                  highest quality rubber products across a variety of
                  industries. From automotive to non-automotive,
                  agriculture, and more, we have consistently strived to
                  achieve universally acceptable standards of
                  excellence in everything we do."
              </div>
              <div className="text-lg font-semibold text-foreground">
                - Mr. Harish V. Guntuk
              </div>
              <div className="text-muted-foreground">
                Director, Dev Press Tools
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header fade-in">Our Core Values</h2>
            <p className="section-subtitle fade-in fade-in-delay-1">
              The principles that guide our operations and shape our company culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card-feature text-center fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      {/* <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header fade-in">Our Journey Through Time</h2>
            <p className="section-subtitle fade-in fade-in-delay-1">
              Key milestones that shaped Dev Press Tools into what we are today
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center space-x-6 fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">{milestone.year}</span>
                    </div>
                  </div>
                  <div className="card-industrial flex-1">
                    <p className="text-foreground font-medium">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Sustainability Goals */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary-foreground mb-6 fade-in">
              Commitment to Sustainability
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 fade-in fade-in-delay-1 leading-relaxed">
              As a responsible manufacturer, we are committed to sustainable practices 
              that minimize our environmental impact while maximizing efficiency. Our 
              MSME ZED Bronze certification reflects our dedication to zero waste, 
              zero pollution, and zero defect manufacturing processes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center fade-in fade-in-delay-2">
                <div className="text-3xl font-bold text-accent mb-2">Zero Waste</div>
                <p className="text-primary-foreground/80">Implementing circular economy principles</p>
              </div>
              <div className="text-center fade-in fade-in-delay-3">
                <div className="text-3xl font-bold text-accent mb-2">Zero Pollution</div>
                <p className="text-primary-foreground/80">Clean manufacturing processes</p>
              </div>
              <div className="text-center fade-in" style={{ animationDelay: '0.8s' }}>
                <div className="text-3xl font-bold text-accent mb-2">Zero Defect</div>
                <p className="text-primary-foreground/80">Right first time approach</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;