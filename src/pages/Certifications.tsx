import { Award, Shield, CheckCircle, Download, Calendar, Building } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      name: "ISO 9001:2015",
      type: "Quality Management System",
      issuedBy: "International Organization for Standardization",
      validUntil: "December 2027",
      description: "Internationally recognized standard for quality management systems, ensuring consistent quality in manufacturing processes and customer satisfaction.",
      benefits: [
        "Consistent quality in all manufacturing processes",
        "Continuous improvement in operations",
        "Enhanced customer satisfaction",
        "Systematic approach to quality management"
      ],
      certificateNumber: "ISO-9001-2024-DPT-001"
    },
    {
      name: "MSME ZED Bronze",
      type: "Zero Effect Zero Defect Certification",
      issuedBy: "Ministry of MSME, Government of India",
      validUntil: "March 2026",
      description: "Government of India certification recognizing our commitment to zero waste, zero pollution, and zero defect manufacturing practices.",
      benefits: [
        "Zero waste manufacturing processes",
        "Environmentally sustainable operations",
        "Defect-free production systems",
        "Energy efficient manufacturing"
      ],
      certificateNumber: "ZED-BRZ-2024-MH-DPT-142"
    }
  ];

  const qualityStandards = [
    {
      standard: "ISO/TS 16949",
      description: "Automotive quality management system requirements",
      status: "Under Implementation"
    },
    {
      standard: "IS 3400",
      description: "Indian standard for rubber seals and gaskets",
      status: "Compliant"
    },
    {
      standard: "ASTM D2000",
      description: "Standard classification system for rubber products",
      status: "Compliant"
    },
    {
      standard: "DIN 3760",
      description: "German standard for radial shaft seals",
      status: "Compliant"
    }
  ];

  const processes = [
    {
      icon: CheckCircle,
      title: "Quality Control",
      description: "Rigorous quality control at every stage of manufacturing"
    },
    {
      icon: Shield,
      title: "Testing Protocols",
      description: "Comprehensive testing procedures for all products"
    },
    {
      icon: Award,
      title: "Continuous Improvement",
      description: "Regular audits and process optimization"
    },
    {
      icon: Building,
      title: "Documentation",
      description: "Complete traceability and documentation systems"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="hero-text text-primary-foreground fade-in">
            Certifications
          </h1>
          <p className="hero-subtitle fade-in fade-in-delay-1">
            Certified excellence in quality management and sustainable manufacturing practices, 
            ensuring the highest standards in every product we deliver.
          </p>
        </div>
      </section>

      {/* Certifications Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header fade-in">Our Certifications</h2>
            <p className="section-subtitle fade-in fade-in-delay-1">
              Internationally recognized certifications that validate our commitment to quality and sustainability
            </p>
          </div>

          <div className="space-y-16">
            {certifications.map((cert, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} slide-in-left`}>
                  <div className="card-feature">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                        <Award className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{cert.name}</h3>
                        <p className="text-accent font-medium">{cert.type}</p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">{cert.description}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Issued By:</h4>
                        <p className="text-muted-foreground text-sm">{cert.issuedBy}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Valid Until:</h4>
                        <p className="text-muted-foreground text-sm">{cert.validUntil}</p>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {cert.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <div>
                        <p className="text-sm text-muted-foreground">Certificate Number</p>
                        <p className="font-mono text-foreground">{cert.certificateNumber}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} slide-in-right`}>
                  <div className="card-industrial">
                    <div className="h-auto min-h-[24rem] bg-gradient-secondary rounded-lg mb-6 flex items-center justify-center p-4">
                      {/* Certificate Image Preview */}
                      {cert.name === "ISO 9001:2015" && (
                        <img
                          src="/isocertificate.png"
                          alt="ISO 9001:2015 Certificate"
                          className="max-h-[22rem] max-w-full w-auto h-auto object-contain rounded shadow-lg border"
                        />
                      )}
                      {cert.name === "MSME ZED Bronze" && (
                        <img
                          src="/msmecertificate.png"
                          alt="MSME ZED Bronze Certificate"
                          className="max-h-[22rem] max-w-full w-auto h-auto object-contain rounded shadow-lg border"
                        />
                      )}
                    </div>
                    <div className="text-center">
                      <p className="text-primary font-semibold">{cert.name}</p>
                      <p className="text-muted-foreground text-sm">Certificate Preview</p>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>Valid until {cert.validUntil}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Shield className="h-4 w-4" />
                        <span>Verified</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Management Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header fade-in">Quality Management Process</h2>
            <p className="section-subtitle fade-in fade-in-delay-1">
              Systematic approach to ensuring quality excellence in every aspect of our operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processes.map((process, index) => (
              <div key={index} className="card-feature text-center fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <process.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      {/* <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="section-header fade-in">Industry Standards Compliance</h2>
              <p className="section-subtitle fade-in fade-in-delay-1">
                Adherence to international and national standards ensuring product quality and reliability
              </p>
            </div>

            <div className="space-y-6">
              {qualityStandards.map((standard, index) => (
                <div key={index} className="card-industrial fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">{standard.standard}</h3>
                      <p className="text-muted-foreground">{standard.description}</p>
                    </div>
                    <div className="ml-6">
                      <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                        standard.status === 'Compliant' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {standard.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */ }

      {/* Audit and Compliance */}
      <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-header fade-in mb-8">Audit & Compliance</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="card-feature fade-in fade-in-delay-1">
                <div className="text-3xl font-bold text-primary mb-2">Annual</div>
                <h3 className="font-semibold text-foreground mb-2">External Audits</h3>
                <p className="text-muted-foreground">Regular third-party audits to ensure compliance</p>
              </div>
              <div className="card-feature fade-in fade-in-delay-2">
                <div className="text-3xl font-bold text-primary mb-2">Monthly</div>
                <h3 className="font-semibold text-foreground mb-2">Internal Reviews</h3>
                <p className="text-muted-foreground">Comprehensive internal quality reviews</p>
              </div>
              <div className="card-feature fade-in fade-in-delay-3">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <h3 className="font-semibold text-foreground mb-2">Traceability</h3>
                <p className="text-muted-foreground">Complete product and process traceability</p>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed fade-in" style={{ animationDelay: '0.8s' }}>
              Our commitment to quality excellence is demonstrated through regular audits, 
              continuous improvement initiatives, and strict adherence to international standards. 
              This ensures that our customers receive products that consistently meet or exceed 
              their expectations and industry requirements.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-primary-foreground mb-6 fade-in">
              Trust in Certified Quality
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 fade-in fade-in-delay-1">
              Our certifications are your assurance of quality, reliability, and sustainable 
              manufacturing practices. Partner with us for certified excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in fade-in-delay-2">
              <a href="/contact" className="btn-primary bg-accent hover:bg-accent-hover text-accent-foreground">
                Partner With Us
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

export default Certifications;