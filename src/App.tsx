import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { useInView } from 'react-intersection-observer';
import { useForm, ValidationError } from '@formspree/react';
import { Phone, Mail, MapPin, Facebook, Instagram, Apple as WhatsApp, MessageSquare, Shield, Users, Calendar, ChevronRight, Menu, X, Star, Award, Clock, CheckCircle, ArrowUp, Sparkles, UserCheck, FileCheck, BadgeCheck, Image } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [state, handleSubmit] = useForm("your-form-id");
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  const [heroRef, heroInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const galleryImages = [
    {
      title: "Evento Corporativo",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      description: "Conferência anual de tecnologia"
    },
    {
      title: "Festa de Gala",
      image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      description: "Premiação empresarial"
    },
    {
      title: "Congresso Médico",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      description: "Simpósio internacional"
    },
    {
      title: "Feira de Negócios",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      description: "Exposição de produtos"
    },
    {
      title: "Workshop",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      description: "Treinamento corporativo"
    },
    {
      title: "Formatura",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      description: "Cerimônia de graduação"
    }
  ];

  const services = [
    {
      title: "Recepcionistas",
      description: "Profissionais treinados para garantir o melhor atendimento aos seus convidados",
      icon: Users,
      image: "https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      title: "Segurança",
      description: "Equipe especializada para garantir a tranquilidade do seu evento",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1517127669625-203af58590c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      title: "Brigadistas",
      description: "Profissionais certificados para prevenção e combate a incêndio",
      icon: UserCheck,
      image: "https://images.unsplash.com/photo-1582201943021-e8e5cb6163bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      title: "Coordenação",
      description: "Gestão completa do seu evento do início ao fim",
      icon: Calendar,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      title: "Limpeza",
      description: "Equipe dedicada para manter seu evento impecável",
      icon: CheckCircle,
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    }
  ];

  const features = [
    {
      title: "15 Anos de Experiência",
      description: "Tradição e excelência em eventos",
      icon: Award
    },
    {
      title: "24/7 Disponível",
      description: "Suporte completo quando você precisar",
      icon: Clock
    },
    {
      title: "Equipe Qualificada",
      description: "Profissionais treinados e certificados",
      icon: Users
    },
    {
      title: "Brigadistas Certificados",
      description: "Equipe especializada em prevenção e emergências",
      icon: BadgeCheck
    }
  ];

  const testimonials = [
    {
      name: "João Silva",
      role: "Organizador de Eventos",
      content: "A ALMG Logística superou todas as expectativas. Profissionalismo e pontualidade impecáveis.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Maria Santos",
      role: "Coordenadora de Eventos",
      content: "Excelente equipe de segurança e brigadistas. Recomendo fortemente!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Pedro Oliveira",
      role: "Gerente de Marketing",
      content: "Serviço de limpeza excepcional e equipe muito bem treinada.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className="font-montserrat">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Header */}
      <header className="fixed w-full bg-white shadow-md z-40">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-primary text-3xl font-bold">ALMG</h1>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-secondary hover:text-primary transition"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          <div className="hidden md:flex space-x-8 text-secondary">
            <a href="#home" className="hover:text-primary transition font-medium">Home</a>
            <a href="#about" className="hover:text-primary transition font-medium">Sobre</a>
            <a href="#services" className="hover:text-primary transition font-medium">Serviços</a>
            <a href="#contact" className="hover:text-primary transition font-medium">Contato</a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+5531981034876" className="flex items-center text-primary">
              <Phone className="w-5 h-5 mr-2" />
              <span className="font-medium">(31) 98103-4876</span>
            </a>
          </div>
        </nav>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t"
          >
            <div className="flex flex-col space-y-4 p-4">
              <a href="#home" className="text-secondary hover:text-primary transition" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#about" className="text-secondary hover:text-primary transition" onClick={() => setIsMenuOpen(false)}>Sobre</a>
              <a href="#services" className="text-secondary hover:text-primary transition" onClick={() => setIsMenuOpen(false)}>Serviços</a>
              <a href="#contact" className="text-secondary hover:text-primary transition" onClick={() => setIsMenuOpen(false)}>Contato</a>
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen" ref={heroRef}>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          className="h-full"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full">
                <div 
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url('${service.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <div className="absolute inset-0 bg-black/60" />
                <motion.div 
                  className="relative h-full flex items-center"
                  style={{ opacity }}
                >
                  <div className="container mx-auto px-4">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={heroInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.8 }}
                      className="max-w-3xl"
                    >
                      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                        {service.title}
                      </h1>
                      <p className="text-xl text-white/90 mb-8 max-w-2xl">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <a 
                          href="#contact" 
                          className="bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition"
                        >
                          Solicitar Orçamento
                        </a>
                        <a 
                          href="#services" 
                          className="bg-white text-secondary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition"
                        >
                          Saiba Mais
                        </a>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-bee-light">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg text-center group hover:scale-105 transition-transform duration-300"
              >
                <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-bee-gray">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary mb-4">Nossos Serviços</h2>
            <p className="text-bee-gray max-w-2xl mx-auto">
              Oferecemos soluções completas para seu evento, com profissionais qualificados e experientes
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-lg"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <service.icon className="w-8 h-8 text-primary mb-2" />
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-white/90 text-sm">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary mb-4">Galeria de Eventos</h2>
            <p className="text-bee-gray max-w-2xl mx-auto">
              Conheça alguns dos eventos que já realizamos
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg cursor-pointer"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-white/90 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-bee-light">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary mb-4">O que dizem nossos clientes</h2>
            <p className="text-bee-gray max-w-2xl mx-auto">
              A satisfação de nossos clientes é nossa maior recompensa
            </p>
          </motion.div>
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop={true}
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-lg h-full"
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-secondary">{testimonial.name}</h4>
                      <p className="text-sm text-bee-gray">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-bee-gray italic">"{testimonial.content}"</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-secondary mb-6">Entre em Contato</h2>
              <p className="text-bee-gray mb-8">
                Estamos prontos para atender sua empresa e criar uma experiência única para seu evento
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-primary mr-4" />
                  <span className="text-bee-gray">(31) 98103-4876</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-primary mr-4" />
                  <span className="text-bee-gray">contato@almglogistica.com.br</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-primary mr-4" />
                  <span className="text-bee-gray">Belo Horizonte - MG</span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-primary hover:text-primary/80 transition">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-primary hover:text-primary/80 transition">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-primary hover:text-primary/80 transition">
                    <WhatsApp className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Nome"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
                <div>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="Telefone"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition"
                  />
                  <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                </div>
                <div>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Mensagem"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition"
                  ></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition disabled:opacity-50"
                >
                  {state.submitting ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </form>
              {state.succeeded && (
                <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
                  Mensagem enviada com sucesso! Entraremos em contato em breve.
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: showScrollTop ? 1 : 0 }}
        onClick={scrollToTop}
        className="fixed bottom-24 right-6 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 transition z-50"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/5531981034876"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
      >
        <MessageSquare className="w-6 h-6" />
      </motion.a>

      {/* Footer */}
      <footer className="bg-secondary py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">ALMG</h3>
              <p className="text-gray-400">
                Excelência em serviços para eventos corporativos desde 2010.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-primary transition">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-primary transition">Sobre</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-primary transition">Serviços</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-primary transition">Contato</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Horário de Atendimento</h3>
              <p className="text-gray-400">Segunda a Sexta: 9h às 18h</p>
              <p className="text-gray-400">Sábado: 9h às 13h</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ALMG Logística em Eventos. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;