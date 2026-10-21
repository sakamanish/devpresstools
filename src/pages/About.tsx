import { Award, Users, Leaf, TrendingUp, UserRound } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: "2017", event: "Dev Press Tools started with metal shell manufacturing." },
    { year: "2018", event: "Welcomed our first customer and began supplying them." },
    { year: "2019", event: "Purchased a new molding machine with a rubber mixing unit." },
    { year: "2020", event: "Started rubber-moulded bonded seal production mid-year and introduced our first aftermarket part by year-end." },
    { year: "2021", event: "Management decided to pursue certification and make the company system-oriented." },
    { year: "2022", event: "Successfully obtained ISO 9001 certification from TÜV SÜD and MSME UDYAM registration." },
    { year: "2023", event: "Added a new automotive customer." },
    { year: "2024", event: "Learned a major lesson in the industrial sector." },
    { year: "2025", event: "Added an OEM customer." },
    { year: "2025", event: "Achieved MSME ZED Bronze certification, followed by MSME ZED Gold certification within six months." },
  ];

  const managementTeam = [
    {
      name: "Mr. Rakesh Ramesh Yannam",
      role: "General Manager / Plant Head",
      details: [
        "Experienced business leader responsible for marketing strategy, customer relationship management, business development, market expansion, new customer acquisition, sales growth, and strengthening long-term relationships with OEMs and key customers.",
        "Experienced manufacturing leader responsible for overall plant operations, production, quality, maintenance, productivity, cost optimisation, and continuous improvement, ensuring efficient and timely delivery of customer requirements.",
      ],
    },
    {
      name: "Mr. Satish C Changle",
      role: "Quality Head",
      quote: "Quality is not just a responsibility; it is a commitment to our customers and a foundation for our long-term success.",
    },
    {
      name: "Mrs. Pooja Harish Guntuk",
      role: "Marketing Head",
      details: [
        "With a strong vision for business growth and customer relationships, our Marketing Head has played an important role in shaping the company’s journey and expanding its presence across diverse markets. Through a customer-focused approach, strategic planning, and continuous market development, the Marketing Head has contributed significantly to building long-term partnerships and strengthening the company’s reputation.",
      ],
    },
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

      {/* Company Story, intentionally hidden as requested.
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
                  rubber parts,porcelan bushing gas kits, and Metal shell components. Our commitment to quality and innovation 
                  has earned us the trust of customers across various industries.
                </p>
                <p>
                  Today, with our ISO 9001 certification and MSME ZED Gold recognition,
                  we continue to push the boundaries of manufacturing excellence while 
                  maintaining our core values of quality, integrity, and customer satisfaction.
                </p>
              </div>
            </div>
            <div className="slide-in-right">
              <div className="card-industrial">
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
      */}

      {/* Company History */}
      <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header fade-in">Our History</h2>
            <p className="section-subtitle fade-in fade-in-delay-1">
              Transforming continually — milestones, achievements, and defining moments of our journey.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={`${milestone.year}-${index}`} className="flex items-start gap-4 sm:gap-6 fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-elegant">
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

      {/* Management Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header fade-in">Management Team</h2>
            <p className="section-subtitle fade-in fade-in-delay-1">
              Meet the leaders guiding our operations, quality, and customer relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {managementTeam.map((member, index) => (
              <article
                key={member.name}
                className="card-feature fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  role="img"
                  aria-label={`Photo placeholder for ${member.name}`}
                  className="w-full aspect-[4/3] rounded-lg border-2 border-dashed border-primary/30 bg-muted/70 flex flex-col items-center justify-center gap-3 mb-6 text-muted-foreground"
                >
                  <UserRound className="h-12 w-12 text-primary/60" aria-hidden="true" />
                  <span className="text-sm font-medium">Headshot photo</span>
                </div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">{member.role}</p>
                <h3 className="text-xl font-bold text-foreground mb-4">{member.name}</h3>
                {member.details?.map((detail) => (
                  <p key={detail} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">
                    {detail}
                  </p>
                ))}
                {member.quote && (
                  <blockquote className="text-muted-foreground italic leading-relaxed border-l-4 border-primary/30 pl-4">
                    “{member.quote}”
                  </blockquote>
                )}
              </article>
            ))}
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
              MSME ZED Gold certification reflects our dedication to zero waste,
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