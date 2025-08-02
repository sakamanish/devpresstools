import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe, Clock, Award } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/products', label: 'Products' },
    { path: '/customers', label: 'Our Customers' },
    { path: '/certifications', label: 'Certifications' },
    { path: '/contact', label: 'Contact Us' },
  ];

  const products = [
    'Bonded Seals',
    'Oil Seals',
    'O-Rings',
    'Rubber Pads',
    'Sealing Washers',
    'Shell Components',
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-1">
                <img 
                  src="/Dev Press Tool Logo.jpg" 
                  alt="Dev Press Tools Logo" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Dev Press Tools</h3>
                <p className="text-background/80">Precision Manufacturing</p>
              </div>
            </div>
            <p className="text-background/90 leading-relaxed">
              A certified manufacturer of bonded seals, oil seals, O-rings, rubber parts, porcelain bushing gaskets,
              and Metal shell components, committed to precision engineering and quality excellence.
            </p>
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-accent" />
              <span className="text-sm">ISO 9001 Certified | MSME ZED Bronze</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-background">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-background/80 hover:text-accent transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Products */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-background">Our Products</h4>
            <div className="space-y-3">
              {products.map((product) => (
                <div key={product} className="text-background/80">
                  {product}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-background">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-background/90">
                  Dev Press Tools<br />
                          Pot No. 50,
                            Avinash Nagar, Akkalkot  <br />
                            Road, M.I.D.C, SOLAPUR <br />
                           Maharashtra India- 413 006<br />
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-background/90">+91 9923990111</p>
                  <p className="text-background/90">+91 9421026482</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <p className="text-background/90">devpresstools@gmail.com</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-accent" />
                <p className="text-background/90">www.devpresstools.com</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-background/90">Thursday-Tuesday: 9:00 AM-6:00 PM</p>
                  <p className="text-background/90">Wednesday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/80 text-sm text-center md:text-left">
              © 2025 Dev Press Tools. All rights reserved. | Designed with precision and care.
            </p>
            <div className="flex items-center space-x-6 text-sm text-background/80">
            <span>
              Developed and maintained by{' '}
                <a
                  href="https://reachmanish.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-accent transition-colors"
                >
                  Saka Manish
                </a>
            </span>


              <span>Made in India 🇮🇳</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;