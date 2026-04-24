import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Clock, Star, ArrowRight, ShieldCheck, Zap, Heart, CheckCircle2, PhoneCall, Instagram, Facebook, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- COMPONENTS ---

const Navbar = ({ onContactClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'About Us', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-darker/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <img src="/assets/the_hot_tooth.png" alt="Logo" className="w-[70px] h-[70px] object-contain group-hover:scale-105 transition-transform translate-y-1 -mr-4" />

          <span className="font-heading text-2xl font-bold tracking-tight text-white group-hover:text-brand-green transition-colors">
            The Hot Tooth
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target={item.target}
              rel={item.rel}
              onClick={(e) => {
                if (item.name === 'Contact') {
                  e.preventDefault();
                  onContactClick();
                }
              }}
              className="text-sm font-medium text-gray-300 hover:text-brand-green transition-colors"
            >
              {item.name}
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
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.target}
                  rel={item.rel}
                  onClick={(e) => {
                    if (item.name === 'Contact') {
                      e.preventDefault();
                      onContactClick();
                      setIsOpen(false);
                    } else if (!item.target) {
                      setIsOpen(false);
                    }
                  }}
                  className="text-lg font-medium text-gray-300 hover:text-brand-green"
                >
                  {item.name}
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
    <div
      className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/assets/patient7.webp')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-brand-darker via-brand-darker/90 to-brand-green/10 z-10"></div>
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

const AboutUsSection = () => (
  <section id="about" className="py-24 bg-brand-dark relative overflow-hidden border-t border-white/5">
    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-green/5 via-transparent to-transparent"></div>
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative order-2 md:order-1"
        >
          <div className="absolute inset-0 bg-brand-green/20 rounded-[3rem] -rotate-3 scale-105 blur-xl"></div>
          <img src="/assets/real_owner.jpg" alt="Principal Endodontist" className="relative w-full md:w-[90%] mx-auto h-[600px] rounded-[3rem] object-cover object-top shadow-[0_0_30px_rgba(0,0,0,0.5)] z-10 border border-white/10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-2"
        >
          <h2 className="font-accent text-3xl md:text-4xl text-brand-red mb-2">About Us</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold mb-6">Expert Endodontic Care</h3>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Welcome to The Hot Tooth! As the Principal Endodontist, I am deeply committed to saving your natural teeth and providing completely pain-free, world-class dental care. We combine advanced rotary technology and precise diagnostics to make every procedure as comfortable and efficient as possible.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 glass-effect group hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-full bg-brand-green/20 flex items-center justify-center shrink-0 group-hover:bg-brand-green transition-colors">
                <MapPin className="text-brand-green group-hover:text-brand-dark" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Address</p>
                <p className="font-medium text-sm md:text-base">IBB-2, Millennium Place, Shop no-14, Second Floor, Golf City, Lucknow, UP 226030</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 glass-effect group hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-full bg-brand-green/20 flex items-center justify-center shrink-0 group-hover:bg-brand-green transition-colors">
                <Phone className="text-brand-green group-hover:text-brand-dark" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Mobile</p>
                <p className="font-medium">089480 00125</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 glass-effect group hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-full bg-brand-green/20 flex items-center justify-center shrink-0 group-hover:bg-brand-green transition-colors">
                <Mail className="text-brand-green group-hover:text-brand-dark" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email Address</p>
                <p className="font-medium">varunashu4@gmail.com</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const ServicesSection = () => {
  const [showAll, setShowAll] = useState(false);
  const services = [
    { img: "/assets/patient1.webp", title: "Pediatric Dentistry", desc: "Gentle and fun dental care for children." },
    { img: "/assets/doctor2.webp", title: "Dental Implants", desc: "Permanent and natural-looking tooth replacement." },
    { img: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80", title: "Teeth Whitening", desc: "Brighten your smile in just one session." },
    { img: "/assets/onwer.webp", title: "Tooth Extraction", desc: "Safe and painless wisdom tooth removal." },
    { img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80", title: "Periodontics", desc: "Advanced gum disease treatment." },
    { img: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=800&q=80", title: "Cosmetic Dentistry", desc: "Veneers and smile makeovers." },
    { img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80", title: "Orthodontics", desc: "Clear aligners and traditional braces." },
    { img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80", title: "Root Canal", desc: "Painless RCT with advanced rotary endodontics." }

  ];

  const visibleServices = showAll ? services : services.slice(0, 4);

  return (
    <section id="services" className="py-24 bg-brand-darker">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="font-accent text-3xl md:text-4xl text-brand-red mb-2">Treatments</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold">Our Premium Services</h3>
          </div>
          <button onClick={() => setShowAll(!showAll)} className="text-brand-green hover:text-white font-semibold flex items-center gap-2 transition-colors">
            {showAll ? "Show Less" : "View All Services"} <ArrowRight className={`w-5 h-5 transition-transform ${showAll ? '-rotate-90' : ''}`} />
          </button>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {visibleServices.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group rounded-3xl overflow-hidden relative cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-brand-darker/50 to-transparent z-10 opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <img src={s.img} alt={s.title} className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform">
                  <h4 className="text-2xl font-heading font-bold mb-2">{s.title}</h4>
                  <p className="text-gray-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{s.desc}</p>
                  <a href="#book" className="inline-block bg-white text-brand-dark px-6 py-2 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    Book Now
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const DoctorsSection = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const images = [
    { src: "/assets/main_doctor_team_2.webp", title: "Expert Care", role: "Dedicated professionals committed to your smile." },
    { src: "/assets/main_doctor_team.webp", title: "The Hot Tooth Specialists", role: "Over 20+ years of combined experience in advanced dentistry." },
    { src: "/assets/doctor_main.jpg", title: "Chief Dental Surgeon", role: "State-of-the-art dental procedures and treatments." }
  ];

  const getPosition = (i, active) => {
    if (i === active) return "center";
    if (i === (active - 1 + 3) % 3) return "left";
    return "right";
  };

  const positionVariants = {
    center: { x: "0%", scale: 1, zIndex: 30, opacity: 1 },
    left: { x: "-65%", scale: 0.8, zIndex: 10, opacity: 0.5 },
    right: { x: "65%", scale: 0.8, zIndex: 10, opacity: 0.5 }
  };

  return (
    <section id="doctors" className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-green/10 rounded-full blur-[100px]"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-accent text-3xl md:text-4xl text-brand-red mb-2">The Experts</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold">Meet Our Team</h3>
        </div>

        <div className="relative h-[400px] md:h-[500px] flex items-center justify-center max-w-6xl mx-auto">
          {images.map((img, i) => {
            const pos = getPosition(i, activeIndex);
            return (
              <motion.div
                key={i}
                initial={false}
                animate={pos}
                variants={positionVariants}
                transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
                onClick={() => setActiveIndex(i)}
                className="absolute w-[80%] md:w-[50%] h-full glass-effect rounded-[2.5rem] overflow-hidden cursor-pointer shadow-[0_0_30px_rgba(0,0,0,0.5)]"
              >
                <img src={img.src} alt={img.title} className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-brand-darker/50 to-transparent"></div>

                <motion.div
                  animate={{ opacity: pos === 'center' ? 1 : 0, y: pos === 'center' ? 0 : 20 }}
                  className="absolute bottom-0 left-0 w-full p-6 md:p-10 pointer-events-none"
                >
                  <h4 className="text-2xl md:text-3xl font-heading font-bold mb-2 text-brand-green">{img.title}</h4>
                  <p className="text-gray-300 text-sm md:text-lg">{img.role}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ReviewsSection = () => {
  const reviews = [
    { name: "Rahul S.", text: "Best dental experience I've ever had. Dr. Azad and the team are incredibly professional. The clinic is spotless and the equipment is state-of-the-art.", rating: 5, time: "2 weeks ago" },
    { name: "Priya M.", text: "Painless root canal! I was terrified of the procedure but the doctors here made it so comfortable. Highly recommend The Hot Tooth.", rating: 5, time: "1 month ago" },
    { name: "Amit K.", text: "Got my teeth whitened here before my wedding. The results were amazing and the staff was so friendly.", rating: 5, time: "3 months ago" },
    { name: "Neha G.", text: "Took my kid here for his first checkup. The staff was incredibly patient and made him feel right at home.", rating: 5, time: "4 months ago" }
  ];

  return (
    <section id="reviews" className="py-24 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-accent text-3xl md:text-4xl text-brand-red mb-2">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold mb-6">What Our Patients Say</h3>
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="text-2xl font-bold">4.9</span>
            <div className="flex text-yellow-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="text-gray-400 ml-2">Based on 1,091 Google Reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-effect p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold">{review.name}</h4>
                  <div className="flex text-yellow-400 text-sm">
                    {[...Array(review.rating)].map((_, idx) => <Star key={idx} className="w-3 h-3 fill-current" />)}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">"{review.text}"</p>
              <p className="text-xs text-gray-500">{review.time}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

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

const ContactModal = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsSuccess(false);
    }
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };

    try {
      await fetch("https://azada.app.n8n.cloud/webhook/413c21c7-9a84-4525-8bfb-50b6da7ffc3b", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (error) {
      console.error("Error sending message:", error);
      setIsSubmitting(false);
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-brand-darker border border-white/10 rounded-[2.5rem] p-8 md:p-12 w-full max-w-2xl relative shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors bg-white/5 rounded-full p-2 hover:bg-brand-red/20 z-10">
              <X size={24} />
            </button>

            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                className="text-center py-12"
              >
                <div className="w-24 h-24 bg-brand-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-12 h-12 text-brand-green" />
                </div>
                <h2 className="font-heading text-3xl font-bold mb-4 text-brand-green">Message Sent!</h2>
                <p className="text-gray-400 text-lg">Thank you for reaching out. We will get back to you shortly.</p>
              </motion.div>
            ) : (
              <>
                <div className="text-center mb-8">
                  <h2 className="font-accent text-2xl md:text-3xl text-brand-red mb-2">Get in Touch</h2>
                  <h3 className="text-3xl md:text-4xl font-heading font-bold">Send Us A Message</h3>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                      <input type="text" name="name" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-green transition-colors" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                      <input type="email" name="email" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-green transition-colors" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                    <input type="text" name="subject" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-green transition-colors" placeholder="How can we help?" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                    <textarea name="message" rows="4" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-green transition-colors resize-none" placeholder="Type your message here..."></textarea>
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full bg-brand-green text-brand-dark font-bold py-4 rounded-xl hover:bg-white transition-colors shadow-[0_0_20px_rgba(212,246,172,0.3)] disabled:opacity-50 disabled:cursor-not-allowed">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Footer = ({ onContactClick }) => {
  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'About Us', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-[#020408] pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6 group">
              <img src="/assets/the_hot_tooth.png" alt="Logo" className="w-[70px] h-[70px] object-contain group-hover:scale-105 transition-transform translate-y-1 -mr-4" />
              <span className="font-heading text-2xl font-bold tracking-tight text-white group-hover:text-brand-green transition-colors">
                The Hot Tooth
              </span>
            </a>
            <p className="text-gray-400 max-w-sm mb-6">
              Premium dental care focusing on aesthetic and painless treatments. Modern technology meets expert care.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/thehottooth_/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-green hover:text-brand-dark transition-colors flex items-center justify-center cursor-pointer">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/p/The-hot-tooth-100057436570012/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-green hover:text-brand-dark transition-colors flex items-center justify-center cursor-pointer">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {footerLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.name === 'Contact') {
                        e.preventDefault();
                        onContactClick();
                      }
                    }}
                    className="text-gray-400 hover:text-brand-green transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
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
};

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="font-sans selection:bg-brand-green selection:text-brand-dark">
      <Navbar onContactClick={() => setIsContactModalOpen(true)} />
      <HeroSection />
      <WhyChooseUs />
      <AboutUsSection />
      <ServicesSection />
      <DoctorsSection />
      <ReviewsSection />
      <AppointmentSection />
      <Footer onContactClick={() => setIsContactModalOpen(true)} />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  );
}

export default App;
