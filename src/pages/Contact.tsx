import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("AKZ6QSQ7FCGAcEQgR"); // Replace with your actual EmailJS public key
  }, []);

  const teamMembers = [
    {
      name: "Mr. Harish V. Guntuk",
      position: "Managing Director",
      phone: "09923990111",
      email: "devpresstools@gmail.com",
      description: "Overall business strategy and operations"
    },
    {
      name: "Mr. Rakesh R Yannam",
      position: "General Manager",
      phone: "09421026482",
      email: "devpresstools@gmail.com",
      description: "General management and administration"
    },
    {
      name: "Mr. Satish C Changle",
      position: "Quality & Rubber Technician",
      phone: "09665389222",
      email: "devpresstools@gmail.com",
      description: "Quality control and rubber technology"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }

    try {
      // EmailJS template parameters
      const templateParams = {
        full_name: formData.name || 'Not provided',
        email: formData.email || 'Not provided',
        phone: formData.phone || 'Not provided',
        company: formData.company || 'Not provided',
        subject: formData.subject || 'New Contact Form Submission',
        message: formData.message || 'No message provided'
      };

      console.log('Form Data:', formData);
      console.log('Sending email with parameters:', templateParams);

      // Send email using EmailJS
      const response = await emailjs.send(
        'service_4b8swdd',
        'template_5tgbjz8',
        templateParams
      );

      console.log('EmailJS Response:', response);

      if (response.status === 200) {
        toast.success('Thank you! Your message has been sent successfully. We will get back to you within 24 hours.');
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Sorry, there was an error sending your message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="hero-text text-primary-foreground fade-in">
            Contact Us
          </h1>
          <p className="hero-subtitle fade-in fade-in-delay-1">
            Get in touch with our team for quotes, technical support, or any inquiries. 
            We're here to help you find the perfect sealing solution for your needs.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="slide-in-left">
              <div className="card-feature">
                <h2 className="text-3xl font-bold text-foreground mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="quote">Request Quote</option>
                      <option value="technical">Technical Support</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="quality">Quality Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical"
                      placeholder="Please describe your requirements, including specifications, quantities, and any specific needs..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <Send className="h-5 w-5" />
                        <span>Send Message</span>
                      </div>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="slide-in-right">
              <div className="space-y-8">
                {/* Company Info */}
                <div className="card-industrial">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Address</h4>
                        <p className="text-muted-foreground">
                          Dev Press Tools<br />
                          Pot No. 50,
                            Avinash Nagar, Akkalkot Road, <br />
                            M.I.D.C, SOLAPUR <br />
                           Maharashtra - 413 006<br />
                          India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                        <p className="text-muted-foreground">
                          Primary: +91 9923990111<br />
                          Secondary: +91 9421026482<br />
                          Office: +91 9665389222
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Email</h4>
                        <p className="text-muted-foreground">
                          General: devpresstools@gmail.com<br />
                          Sales: devpresstools@gmail.com<br />
                          Support: devpresstools@gmail.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Business Hours</h4>
                        <p className="text-muted-foreground">
                          Monday - Saturday: 9:00 AM - 6:00 PM<br />
                          Sunday: Closed<br />
                          Emergency Support: 24/7
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="card-industrial">
                  <h4 className="font-semibold text-foreground mb-4">Location</h4>
                  <a 
                    href="https://maps.google.com/?q=Dev+Press+Tools+Pot+No.+50+Avinash+Nagar+Akkalkot+Road+M.I.D.C+SOLAPUR+Maharashtra+413006+India" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block h-64 bg-gradient-secondary rounded-lg flex items-center justify-center hover:bg-gradient-primary transition-all duration-300 cursor-pointer group"
                  >
                    <div className="text-center">
                      <MapPin className="h-16 w-16 text-primary/60 mx-auto mb-4 group-hover:text-primary-foreground transition-colors duration-300" />
                      <p className="text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300">Click to Open in Google Maps</p>
                      <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80 transition-colors duration-300">Solapur, Maharashtra</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header fade-in">Our Team</h2>
            <p className="section-subtitle fade-in fade-in-delay-1">
              Meet the dedicated professionals behind Dev Press Tools' success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="card-feature text-center fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <User className="h-12 w-12 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                <p className="text-accent font-medium mb-4">{member.position}</p>
                <p className="text-muted-foreground text-sm mb-6">{member.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">{member.phone}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">{member.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="section-header fade-in">Frequently Asked Questions</h2>
              <p className="section-subtitle fade-in fade-in-delay-1">
                Quick answers to common questions about our products and services
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "What is your typical lead time for custom orders?",
                  answer: "For standard products, our lead time is 7-14 days. Custom products typically require 3-4 weeks depending on complexity and quantity."
                },
                {
                  question: "Do you provide material certificates for your products?",
                  answer: "Yes, we provide material certificates and test reports for all our products upon request."
                },
                {
                  question: "What is your minimum order quantity?",
                  answer: "Our MOQ varies by product type. For standard items, it's typically 100 pieces. For custom products, it may vary based on tooling requirements."
                },
                {
                  question: "Do you offer technical support for product selection?",
                  answer: "Absolutely! Our technical team provides comprehensive support for product selection, application guidance, and custom solutions."
                }
              ].map((faq, index) => (
                <div key={index} className="card-industrial fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-start space-x-4">
                    <MessageSquare className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-primary-foreground mb-6 fade-in">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 fade-in fade-in-delay-1">
              Contact us today to discuss your sealing requirements and discover 
              how we can help improve your operations with our quality products.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in fade-in-delay-2">
              <a href="tel:+919421026482" className="btn-primary bg-accent hover:bg-accent-hover text-accent-foreground">
                Call Now: +91 9421026482
              </a>
              <a href="mailto:devpresstools@gmail.com" className="btn-outline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;