import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Clock, Star, ArrowRight, ShieldCheck, Zap, Heart, CheckCircle2, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- COMPONENTS ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-darker/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center shadow-[0_0_15px_rgba(212,246,172,0.4)] group-hover:scale-105 transition-transform">
            <span className="text-brand-dark font-heading font-bold text-xl">HT</span>
          </div>
          <span className="font-heading text-2xl font-bold tracking-tight text-white group-hover:text-brand-green transition-colors">
            The Hot Tooth
          </span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          {['Home', 'Services', 'Doctors', 'Gallery', 'Reviews'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-gray-300 hover:text-brand-green transition-colors">
              {item}
            </a>
          ))}
          <a href="#book" className="bg-brand-green text-brand-dark px-6 py-2.5 rounded-full font-semibold hover:bg-white transition-colors shadow-[0_0_15px_rgba(212,246,172,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]">
            Book Appointment
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-darker border-t border-white/10"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {['Home', 'Services', 'Doctors', 'Gallery', 'Reviews'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-300 hover:text-brand-green">
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-darker via-brand-darker/90 to-brand-green/10 z-10"></div>
      <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Premium Dental Clinic" className="w-full h-full object-cover object-center" />
    </div>
    
    <div className="container mx-auto px-6 z-10 grid md:grid-cols-2 gap-12 items-center">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
          <Star className="w-4 h-4 text-brand-green fill-brand-green" />
          <span className="text-sm font-medium">4.9/5 from 1,000+ Happy Patients</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-6 text-glow">
          Premium <span className="text-brand-green">Dental Care</span> You Can Trust
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg font-light leading-relaxed">
          Experience world-class dentistry in a luxurious, pain-free environment. Your perfect smile starts here.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#book" className="bg-brand-green text-brand-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all shadow-[0_0_20px_rgba(212,246,172,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] flex items-center gap-2">
            Book Appointment <ArrowRight className="w-5 h-5" />
          </a>
          <a href="tel:+918948000125" className="px-8 py-4 rounded-full font-bold text-lg text-white border border-white/30 hover:bg-white/10 transition-colors flex items-center gap-2 backdrop-blur-sm">
            <PhoneCall className="w-5 h-5" /> Call Now
          </a>
        </div>
      </motion.div>
      
      {/* Abstract floating elements for visual interest */}
      <div className="hidden md:block relative h-full">
         <motion.div 
            animate={{ y: [0, -20, 0] }} 
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-20 right-20 bg-brand-dark/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-2xl"
          >
            <div className="flex items-center gap-4">
              <div className="bg-brand-green/20 p-3 rounded-full"><ShieldCheck className="w-8 h-8 text-brand-green" /></div>
              <div>
                <p className="text-sm text-gray-400">Certified</p>
                <p className="font-bold">Expert Doctors</p>
              </div>
            </div>
         </motion.div>
      </div>
    </div>
  </section>
);

const WhyChooseUs = () => {
  const features = [
    { icon: <Zap className="w-8 h-8 text-brand-dark" />, title: "Advanced Technology", desc: "State-of-the-art equipment for precise diagnosis." },
    { icon: <ShieldCheck className="w-8 h-8 text-brand-dark" />, title: "Experienced Doctors", desc: "Highly qualified specialists you can trust." },
    { icon: <Heart className="w-8 h-8 text-brand-dark" />, title: "Pain-Free Treatment", desc: "Comfortable procedures with modern anesthesia." },
    { icon: <CheckCircle2 className="w-8 h-8 text-brand-dark" />, title: "Premium Hygiene", desc: "Strict sterilization and safety protocols." },
  ];

  return (
    <section className="py-24 bg-brand-dark relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-accent text-3xl md:text-4xl text-brand-red mb-2">Why Us?</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold">The Hot Tooth Difference</h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-effect p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="w-16 h-16 bg-brand-green rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{f.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    { img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80", title: "Root Canal", desc: "Painless RCT with advanced rotary endodontics." },
    { img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80", title: "Dental Implants", desc: "Permanent, natural-looking replacement teeth." },
    { img: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80", title: "Teeth Whitening", desc: "Brighten your smile in just one session." },
    { img: "https://images.unsplash.com/photo-1598256989800-fea5f0615f28?auto=format&fit=crop&w=800&q=80", title: "Orthodontics", desc: "Clear aligners and traditional braces." }
  ];

  return (
    <section id="services" className="py-24 bg-brand-darker">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="font-accent text-3xl md:text-4xl text-brand-red mb-2">Treatments</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold">Our Premium Services</h3>
          </div>
          <a href="#book" className="text-brand-green hover:text-white font-semibold flex items-center gap-2 transition-colors">
            View All Services <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="group rounded-3xl overflow-hidden relative cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-brand-darker/50 to-transparent z-10 opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <img src={s.img} alt={s.title} className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform">
                <h4 className="text-2xl font-heading font-bold mb-2">{s.title}</h4>
                <p className="text-gray-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{s.desc}</p>
                <button className="bg-white text-brand-dark px-6 py-2 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DoctorsSection = () => (
  <section id="doctors" className="py-24 bg-brand-dark relative overflow-hidden">
    <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-green/10 rounded-full blur-[100px]"></div>
    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center mb-16">
        <h2 className="font-accent text-3xl md:text-4xl text-brand-red mb-2">The Experts</h2>
        <h3 className="text-4xl md:text-5xl font-heading font-bold">Meet Our Team</h3>
      </div>
      
      <div className="max-w-4xl mx-auto glass-effect rounded-[2.5rem] overflow-hidden group">
        <div className="relative h-[500px]">
          {/* Using the provided image as placeholder */}
          <img src="https://images.unsplash.com/photo-1537368910025-702800a413ca?auto=format&fit=crop&w=1200&q=80" alt="Our Team" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-transparent to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 w-full p-10">
            <h4 className="text-3xl font-heading font-bold mb-2 text-brand-green">The Hot Tooth Specialists</h4>
            <p className="text-gray-300 text-lg">Over 20+ years of combined experience in advanced dentistry.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const AppointmentSection = () => (
  <section id="book" className="py-24 bg-brand-darker border-t border-white/5">
    <div className="container mx-auto px-6 max-w-6xl">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-accent text-3xl md:text-4xl text-brand-red mb-2">Book Now</h2>
          <h3 className="text-4xl md:text-6xl font-heading font-bold mb-6">Schedule Your Visit</h3>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Choose a convenient time for your consultation. Our team will contact you to confirm the appointment.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 rounded-full bg-brand-green/20 flex items-center justify-center">
                <MapPin className="text-brand-green" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="font-medium">IBB-2, Millennium Place, Shop no-14, Golf City, Lucknow</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 rounded-full bg-brand-green/20 flex items-center justify-center">
                <Clock className="text-brand-green" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Timing</p>
                <p className="font-medium">Mon - Sun: 10:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-effect rounded-[2rem] p-4 h-[750px] overflow-hidden">
          {/* Calendly Widget */}
          <iframe 
            src="https://calendly.com/azadm6484/30min?background_color=030712&text_color=ffffff&primary_color=d4f6ac" 
            width="100%" 
            height="100%" 
            frameBorder="0"
            className="rounded-[1.5rem]"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#020408] pt-20 pb-10 border-t border-white/10">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <a href="#" className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center">
              <span className="text-brand-dark font-heading font-bold text-xl">HT</span>
            </div>
            <span className="font-heading text-2xl font-bold tracking-tight text-white">
              The Hot Tooth
            </span>
          </a>
          <p className="text-gray-400 max-w-sm mb-6">
            Premium dental care focusing on aesthetic and painless treatments. Modern technology meets expert care.
          </p>
          <div className="flex gap-4">
             {/* Social Icons Placeholder */}
             {[1,2,3,4].map(i => <div key={i} className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-green hover:text-brand-dark transition-colors flex items-center justify-center cursor-pointer"></div>)}
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-4">
            {['Home', 'About Us', 'Services', 'Gallery', 'Contact'].map(link => (
              <li key={link}><a href="#" className="text-gray-400 hover:text-brand-green transition-colors">{link}</a></li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-6">Contact</h4>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-start gap-3"><MapPin className="w-5 h-5 text-brand-green shrink-0 mt-1" /> IBB-2, Millennium Place, Shop no-14, Second Floor, Golf City, Lucknow, UP 226030</li>
            <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-brand-green shrink-0" /> +91 89480 00125</li>
          </ul>
        </div>
      </div>
      
      <div className="text-center text-gray-600 text-sm pt-8 border-t border-white/10">
        © {new Date().getFullYear()} The Hot Tooth. All rights reserved.
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="font-sans selection:bg-brand-green selection:text-brand-dark">
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <ServicesSection />
      <DoctorsSection />
      <AppointmentSection />
      <Footer />
    </div>
  );
}

export default App;
