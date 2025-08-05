import { Settings, Cog, FlaskConical, Paintbrush, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Power Press Machine",
      description: "Advanced hydraulic and mechanical pressing machines for precision forming of seals and gaskets",
      features: [
        "High-pressure hydraulic presses up to 500 tons",
        "Precision tooling for consistent quality",
        "Multi-stage pressing capabilities",
        "Quality control at every stage"
      ],
      image: "/updated images/Press_Shop.jpg"
    },
    {
      title: "Lathe & Drilling Machine Setup",
      description: "State-of-the-art machining capabilities for precise dimensional accuracy",
      features: [
        "CNC lathe machines for complex geometries",
        "High-precision drilling operations",
        "Surface finishing to exact specifications",
        "Dimensional accuracy up to ±0.01mm"
      ],
      image: "/updated images/lathe.jpg"
    },
    {
      title: "Rubber Mixing",
      description: "Precision mixing of raw rubber materials to achieve desired compound properties",
      features: [
        "Own Compound Formulation",
        "Accurate raw material weighing and batching",
        "Banbury/internal mixing and open mill mixing",
        "Consistent dispersion of fillers and additives",
        "Temperature and shear control for uniform mixing"
      ],
      image: "/updated images/mixing.jpg"
    },
    {
      title: "Rubber Molding",
      description: "Forming rubber into final shapes using precision molds and controlled processes",
      features: [
        
        "Injection, compression, and transfer molding techniques",
        "Dimensional accuracy with steel/aluminum molds",
        "Controlled vulcanization for durability",
        "Deflashing and finishing for final product quality"
      ],
      image: "/updated images/Moulding_Machines.jpg"
    },
    
    {
      title: "In-house Rubber Testing Laboratory",
      description: "Comprehensive quality testing ensuring product reliability and performance",
      features: [
        "Material hardness Test",
        "Tensile & Elongation Strength analysis",
        "Compression Set Test",
        "Ash Content",
        "Metal to Rubber Bonding Test",
        "Specific Gravity",
        "Heat and Oil Aging",
        "Chemical resistance Test",
        "Dimensional verification"
      ],
      image: "/updated images/Rubber_Testing_Lab.jpg"
    },
    {
      title: "Surface Treatment Processes",
      description: "Advanced surface treatment for enhanced durability and performance",
      features: [
        "Chemical surface treatment",
        "Protective coating application",
        "Anti-corrosion treatments",
        "Surface roughness optimization",
        "7 Tank Process",
        "Electroplating Facility available"
      ],
      image: "/updated images/Surface Treatment Process.jpg"
    }
  ];

  const capabilities = [
    {
      title: "Design & Engineering",
      description: "Custom design solutions based on specific requirements and applications"
    },
    {
      title: "Prototyping",
      description: "Rapid prototyping for testing and validation before mass production"
    },
    {
      title: "Quality Assurance",
      description: "ISO 9001 certified quality management system ensuring consistent excellence"
    },
    {
      title: "Technical Support",
      description: "Expert technical guidance and support throughout the product lifecycle"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="hero-text text-primary-foreground fade-in">
            Our Services
          </h1>
          <p className="hero-subtitle fade-in fade-in-delay-1">
            Comprehensive manufacturing services powered by advanced technology, 
            expert craftsmanship, and unwavering commitment to quality excellence.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header fade-in">Manufacturing Capabilities</h2>
            <p className="section-subtitle fade-in fade-in-delay-1">
              End-to-end manufacturing solutions with state-of-the-art equipment and processes
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} slide-in-left`}>
                  <div className="card-feature">
                    <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 text-lg">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <ArrowRight className="h-4 w-4 text-accent flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} slide-in-right`}>
                  <div className="h-80 bg-gradient-secondary rounded-xl flex items-center justify-center">
                    <img src={service.image} alt={service.title} className="max-h-72 max-w-full w-auto h-auto object-contain rounded shadow bg-white p-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header fade-in">Additional Capabilities</h2>
            <p className="section-subtitle fade-in fade-in-delay-1">
              Beyond manufacturing, we offer comprehensive support services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="card-industrial text-center fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-xl font-semibold text-foreground mb-3">{capability.title}</h3>
                <p className="text-muted-foreground">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-header fade-in mb-8">Quality Standards & Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="card-feature fade-in fade-in-delay-1">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-primary-foreground font-bold text-2xl">ISO</span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">ISO 9001:2015</h3>
                <p className="text-muted-foreground">
                  Internationally recognized quality management system certification 
                  ensuring consistent quality and customer satisfaction.
                </p>
              </div>
              <div className="card-feature fade-in fade-in-delay-2">
                <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-accent-foreground font-bold text-xl">ZED</span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">MSME ZED Bronze</h3>
                <p className="text-muted-foreground">
                  Zero Effect Zero Defect certification recognizing our commitment 
                  to sustainable and defect-free manufacturing.
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
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 fade-in fade-in-delay-1">
              Let's discuss your manufacturing requirements and explore how our 
              services can add value to your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in fade-in-delay-2">
              <Link to="/contact" className="btn-primary bg-accent hover:bg-accent-hover text-accent-foreground">
                Request Quote
              </Link>
              <Link to="/products" className="btn-outline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;