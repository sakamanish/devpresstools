import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Factory, CheckCircle, TrendingUp, Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const carouselImages = [
    "/for scrolling/Moulding_Machines.jpg",
    "/for scrolling/Dev_Press_Tools_Company.jpg", 
    "/for scrolling/In-house Testing Laboratory.jpg"
  ];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const features = [
    {
      icon: Award,
      title: "ISO 9001 Certified",
      description: "Quality management system certified for consistent excellence in manufacturing"
    },
    {
      icon: Factory,
      title: "Advanced Manufacturing",
      description: "State-of-the-art pressing, lathe,rubber mixing, surface treatment,rubber molding"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced professionals with deep expertise in rubber and seal manufacturing"
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "In-house testing lab ensuring every product meets the highest quality standards"
    }
  ];

  const stats = [
    { number: "8+", label: "Years Experience" },
    { number: "100+", label: "Happy Customers" },
    { number: "1000+", label: "Products Delivered" },
    { number: "99.8%", label: "Quality Rate" },
  ];

  const products = [
    {
      title: "Bonded Seals",
      description: "High-performance bonded seals for various industrial applications",
      image: "/Bonded Seals.jpeg"
    },
    {
      title: "Oil Seals",
      description: "Durable oil seals designed for optimal sealing performance",
      image: "/Oil Seals.jpeg"
    },
    {
      title: "O-Rings",
      description: "Precision O-rings for diesel tanks, hyva, and radiator applications",
      image: "/O Ring Snaps.jpg"
    },
    {
      title: "Metal Shell Components",
      description: "L, C, and Z type shell components manufactured to exact specifications",
      image: "/metal shell.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative hero-gradient min-h-screen flex items-center justify-center overflow-hidden">
        {/* Carousel Background */}
        <div className="absolute inset-0">
          {carouselImages.map((image, index) => (
            <img 
              key={index}
              src={image} 
              alt={`Slide ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-70' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-primary/40 to-primary/20"></div>
        </div>
        
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="hero-text fade-in">
              Dev Press Tools
            </h1>
            <p className="hero-subtitle fade-in fade-in-delay-1">
              Certified manufacturer of bonded seals, oil seals, O-rings, rubber parts, 
              and shell components. Precision engineering meets quality excellence in Solapur, India.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in fade-in-delay-2">
              <Link to="/products" className="btn-primary pulse-glow">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/contact" className="btn-outline">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
        
        {/* Carousel Navigation */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Floating elements for visual appeal */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-accent/30 rounded-full blur-lg animate-pulse delay-1000"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-hover">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-foreground/90 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="section-header fade-in">
              Precision Manufacturing Excellence
            </h2>
            <p className="section-subtitle fade-in fade-in-delay-1">
              At Dev Press Tools, we specialize in manufacturing high-quality seals, O-rings, 
              and rubber components that meet the most demanding industrial standards. Our commitment 
              to precision and quality has made us a trusted partner for businesses across India.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 slide-in-left">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Why Choose Dev Press Tools?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">ISO 9001 Certified Quality</h4>
                    <p className="text-muted-foreground">Internationally recognized quality management system</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Advanced Manufacturing Setup</h4>
                    <p className="text-muted-foreground">State-of-the-art pressing, lathe,rubber mixing, surface treatment, rubber molding </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">In-house Rubber Testing Lab</h4>
                    <p className="text-muted-foreground">Comprehensive quality testing for every product</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">MSME ZED Bronze Certified</h4>
                    <p className="text-muted-foreground">Recognized for sustainable manufacturing practices</p>
                  </div>
                </div>
              </div>
              <Link to="/about" className="btn-secondary inline-flex items-center">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-6 slide-in-right">
              {features.map((feature, index) => (
                <div key={index} className="card-feature scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header fade-in">
              Our Product Range
            </h2>
            <p className="section-subtitle fade-in fade-in-delay-1">
              Comprehensive range of high-quality seals and rubber components for diverse industrial applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={index} className="card-industrial group fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <img src={product.image} alt={product.title} className="w-full h-40 object-contain rounded mb-4 bg-white shadow" />
                <h3 className="text-xl font-semibold text-foreground mb-2">{product.title}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <Link 
                  to="/products" 
                  className="text-primary hover:text-primary-hover font-medium inline-flex items-center group-hover:gap-2 transition-all"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products" className="btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-primary-foreground mb-6 fade-in">
              Ready to Experience Quality Manufacturing?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 fade-in fade-in-delay-1">
              Get in touch with our team to discuss your requirements and receive a customized quote 
              for our precision-engineered products.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in fade-in-delay-2">
              <Link to="/contact" className="btn-primary bg-accent hover:bg-accent-hover text-accent-foreground">
                Get Quote Now
              </Link>
              <Link to="/services" className="btn-outline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;