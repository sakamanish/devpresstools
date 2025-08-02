import { ArrowRight, Download, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    {
      category: "Bonded Seals",
      description: "High-performance bonded seals combining metal and rubber for superior sealing solutions",
      applications: ["Automotive", "Hydraulic Systems", "Industrial Machinery", "Aerospace"],
      sizes: "M4 to M30",
      materials: ["NBR", "Viton", "Silicone"],
      features: [
        "Self-centering design",
        "Zero face seal leakage",
        "High pressure resistance",
        "Temperature range: -40°C to +200°C"
      ],
      image: "/Bonded Seals.jpeg"
    },
    {
      category: "Oil Seals",
      description: "Precision oil seals designed for rotating shaft applications with excellent sealing performance",
      applications: ["Automotive Engines", "Gearboxes", "Pumps", "Compressors"],
      sizes: "10mm to 200mm shaft diameter",
      materials: ["NBR", "FKM", "PTFE", "ACM"],
      features: [
        "Low friction design",
        "Excellent wear resistance",
        "Multiple lip configurations",
        "Wide temperature range"
      ],
      image: "/Oil Seals.jpeg"
    },
    {
      category: "O-Rings",
      description: "Comprehensive range of O-rings for static and dynamic sealing applications",
      applications: ["Diesel Tanks", "Hyva Systems", "Radiators", "Hydraulic Cylinders"],
      sizes: "As per customer requirement",
      materials: ["NBR", "EPDM", "Viton", "Silicone", "HNBR", "ACM"],
      features: [
        "Excellent chemical resistance",
        "Wide temperature range",
        "Low compression set",
        "Custom formulations available"
      ],
      image: "/O Ring Snaps.jpg"
    },
    {
      category: "Rubber Pads",
      description: "Durable rubber pads for vibration damping and load distribution applications",
      applications: ["Industrial Equipment", "Construction", "Automotive", "Railway"],
      sizes: "Custom sizes available",
      materials: ["NBR", "NBR+PVC", "EPDM", "Neoprene"],
      features: [
        "Excellent vibration isolation",
        "High load bearing capacity",
        "Weather resistant",
        "Long service life"
      ],
      image: "/rubber pads.jpg"
    },
    {
      category: "Porcelain Bushing Gasket",
      description: "Specialized porcelain bushing gasket for transformer and electrical applications",
      applications: ["Transformers", "Electrical Equipment", "Oil-filled systems", "Switchgear"],
      sizes: "Standard and custom sizes",
      materials: ["NBR", "Vitol", "Silicone"],
      features: [
        "Electrical insulation properties",
        "Oil and chemical resistance",
        "High dielectric strength",
        "Temperature stability"
      ],
      image: "/Porcelain Bushing Gasket All Sizes.jpg"
    },
    {
      category: "Metal Shell Components",
      description: "Precision-manufactured shell components in L, C, and Z configurations",
      applications: ["Industrial Assembly", "Machinery", "Automotive", "Construction"],
      sizes: "Custom manufactured to specifications",
      materials: ["Steel", "Stainless Steel", "MS, CR sheet , HR"],
      features: [
        "Precise dimensional accuracy",
        "Multiple configuration options",
        "Surface treatment available",
        "Quality assured manufacturing"
      ],
      image: "/Shell Components.png"
    },
    {
      category: "Gaskets",
      description: "High-performance gaskets for sealing applications in various industrial environments",
      applications: ["Piping Systems", "Flanges", "Heat Exchangers", "Pressure Vessels"],
      sizes: "Custom sizes and shapes",
      materials: ["NBR", "Silicone", "PTFE", "Graphite"],
      features: [
        "Excellent compression resistance",
        "Chemical and temperature resistance",
        "Custom die-cutting available",
        "Long service life"
      ],
      image: "/Gaskets.jpeg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="hero-text text-primary-foreground fade-in">
            Our Products
          </h1>
          <p className="hero-subtitle fade-in fade-in-delay-1">
            Comprehensive range of high-quality seals, O-rings, and rubber components 
            engineered for demanding industrial applications across various sectors.
          </p>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header fade-in">Product Portfolio</h2>
            <p className="section-subtitle fade-in fade-in-delay-1">
              Precision-engineered solutions for sealing, vibration control, and mechanical applications
            </p>
          </div>

          <div className="space-y-16">
            {products.map((product, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} slide-in-left`}>
                  <div className="card-feature">
                    <h3 className="text-3xl font-bold text-foreground mb-4">{product.category}</h3>
                    <p className="text-muted-foreground mb-6 text-lg">{product.description}</p>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {product.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-3">
                              <ArrowRight className="h-4 w-4 text-accent flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Size Range:</h4>
                          <p className="text-muted-foreground">{product.sizes}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Materials:</h4>
                          <p className="text-muted-foreground">{product.materials.join(", ")}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} slide-in-right`}>
                  <div className="card-industrial">
                    <div className="h-64 bg-gradient-secondary rounded-lg mb-6 flex items-center justify-center">
                      <img src={product.image} alt={product.category} className="max-h-56 max-w-full w-auto h-auto object-contain rounded shadow bg-white p-2" />
                    </div>
                    
                    <h4 className="font-semibold text-foreground mb-3">Applications:</h4>
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {product.applications.map((app, appIndex) => (
                        <div key={appIndex} className="bg-muted/50 rounded-lg px-3 py-2 text-sm text-center">
                          {app}
                        </div>
                      ))}
                    </div>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Size Chart Section for Bonded Seals */}
      {/* <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-header fade-in">Bonded Seals Size Chart</h2>
              <p className="section-subtitle fade-in fade-in-delay-1">
                Standard size specifications for our bonded seal range
              </p>
            </div>
            
            <div className="card-industrial overflow-x-auto fade-in fade-in-delay-2">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">Thread Size</th>
                    <th className="text-left py-3 px-4 font-semibold">A (mm)</th>
                    <th className="text-left py-3 px-4 font-semibold">B (mm)</th>
                    <th className="text-left py-3 px-4 font-semibold">C (mm)</th>
                    <th className="text-left py-3 px-4 font-semibold">Material</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { size: "M6", a: "8.5", b: "12.0", c: "1.5", material: "NBR/Steel" },
                    { size: "M8", a: "10.5", b: "14.0", c: "1.5", material: "NBR/Steel" },
                    { size: "M10", a: "12.5", b: "16.0", c: "1.5", material: "NBR/Steel" },
                    { size: "M12", a: "14.5", b: "18.0", c: "1.5", material: "NBR/Steel" },
                    { size: "M14", a: "16.5", b: "20.0", c: "1.5", material: "NBR/Steel" },
                    { size: "M16", a: "18.5", b: "22.0", c: "1.5", material: "NBR/Steel" },
                    { size: "M20", a: "22.5", b: "27.0", c: "2.0", material: "NBR/Steel" },
                    { size: "M24", a: "26.5", b: "32.0", c: "2.0", material: "NBR/Steel" },
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-border/50">
                      <td className="py-3 px-4 font-medium">{row.size}</td>
                      <td className="py-3 px-4">{row.a}</td>
                      <td className="py-3 px-4">{row.b}</td>
                      <td className="py-3 px-4">{row.c}</td>
                      <td className="py-3 px-4">{row.material}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">
                Need custom sizes or specifications? We manufacture to your exact requirements.
              </p>
              <Link to="/contact" className="btn-primary">
                Request Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section> */}

      {/* Quality Assurance */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-header fade-in mb-8">Quality Assurance</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card-feature fade-in fade-in-delay-1">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold">100%</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Testing</h3>
                <p className="text-muted-foreground">Every product undergoes comprehensive quality testing</p>
              </div>
              <div className="card-feature fade-in fade-in-delay-2">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent-foreground font-bold">ISO</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Certified</h3>
                <p className="text-muted-foreground">ISO 9001:2015 quality management system</p>
              </div>
              <div className="card-feature fade-in fade-in-delay-3">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold">24/7</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Support</h3>
                <p className="text-muted-foreground">Technical support and after-sales service</p>
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
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 fade-in fade-in-delay-1">
              Our engineering team can develop custom products tailored to your specific 
              requirements. Contact us to discuss your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in fade-in-delay-2">
              <Link to="/contact" className="btn-primary bg-accent hover:bg-accent-hover text-accent-foreground">
                Request Custom Quote
              </Link>
              <Link to="/services" className="btn-outline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
                Our Capabilities
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;