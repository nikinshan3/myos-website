import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Scissors,
  Users,
  Star,
  Award,
  Shield,
  Clock,
  Calendar,
  ArrowRight,
  Zap,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
} from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "../data/services";
import { testimonials } from "../data/testimonials";
import { scrollToTop } from "../utils/scrollToTop";

const Home = () => {
  const [counts, setCounts] = useState({
    customers: 0,
    services: 0,
    experience: 0,
    staff: 0,
  });
  const [expandedTestimonials, setExpandedTestimonials] = useState({});
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      const targetCounts = {
        customers: 5000,
        services: 15,
        experience: 8,
        staff: 6,
      };

      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setCounts({
          customers: Math.floor(targetCounts.customers * progress),
          services: Math.floor(targetCounts.services * progress),
          experience: Math.floor(targetCounts.experience * progress),
          staff: Math.floor(targetCounts.staff * progress),
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [inView]);

  const whyChooseUs = [
    {
      icon: Award,
      title: "Certified Professionals",
      description:
        "Our team consists of certified and experienced beauty professionals",
    },
    {
      icon: Shield,
      title: "Premium Hygiene",
      description:
        "We maintain the highest standards of cleanliness and hygiene",
    },
    {
      icon: Star,
      title: "Quality Products",
      description: "We use only premium quality products for all our services",
    },
    {
      icon: Clock,
      title: "Flexible Timings",
      description:
        "Open 7 days a week with extended hours for your convenience",
    },
  ];

  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-primary-500">
          {/* Decorative Icons Background */}
          <div className="absolute inset-0 overflow-hidden opacity-15">
            {[...Array(120)].map((_, i) => (
              <div
                key={i}
                className="absolute text-white/20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              >
                {i % 2 === 0 ? (
                  <Scissors className="w-4 h-4" />
                ) : (
                  <Zap className="w-4 h-4" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="text-center mb-8">
              <motion.h2
                className="text-lg md:text-xl lg:text-2xl font-bold text-accent-500 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {"#Make Your Own Style".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.1,
                      delay: 0.5 + index * 0.15,
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.h2>
            </div>
            <div className="w-80 h-80 lg:w-96 lg:h-96 mx-auto mb-12 flex items-center justify-center p-10">
              <img
                src="/icon.svg"
                alt="MYOS Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm md:text-base mb-12 text-white/90 max-w-2xl mx-auto leading-relaxed"
          >
            Where Style Meets Personality ✨ Transform your look at Payyoli's
            most trusted unisex salon. We don't just style hair – we craft
            confidence, unleash your unique beauty, and make every visit
            unforgettable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                window.open(
                  "https://wa.me/916238426642?text=Hi! I would like to book an appointment at MYOS salon.",
                  "_blank"
                )
              }
              className="bg-accent-500 text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-500 hover:text-accent-500 transition-colors flex items-center space-x-2"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Appointment</span>
            </motion.button>

            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent-500 text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-500 hover:text-accent-500 transition-colors flex items-center space-x-2"
              >
                <span>Our Services</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={ref} className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gradient mb-2">
                {counts.customers.toLocaleString()}+
              </h3>
              <p className="text-gray-600 font-medium">Happy Customers</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                <Scissors className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gradient mb-2">
                {counts.services}+
              </h3>
              <p className="text-gray-600 font-medium">Services Offered</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gradient mb-2">100%</h3>
              <p className="text-gray-600 font-medium">Certified Staff</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gradient mb-2">
                {counts.staff}+
              </h3>
              <p className="text-gray-600 font-medium">Expert Staff</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gradient-to-br from-dark-50 to-dark-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-dark-800 mb-6">
              Our Premium Services
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
              From haircuts to bridal services, we offer a comprehensive range
              of beauty and grooming services to make you look and feel your
              best.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 card-hover w-full h-full flex flex-col"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-dark-800 mb-3">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4 flex-grow">
                  {service.description}
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex items-center space-x-1">
                    {service.price.includes("Starting from") && (
                      <span className="text-xs text-gray-500">
                        Starting from
                      </span>
                    )}
                    <span className="text-2xl font-bold text-gradient">
                      ₹{service.price.replace("Starting from ", "")}
                    </span>
                  </div>
                  <Link to="/services">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary"
                    >
                      Learn More
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-dark-800 mb-6">
              Why Choose MYOS?
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
              We are committed to providing the highest quality services with
              attention to detail and customer satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-dark-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-dark-800 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our valued customers
              have to say about their experience at MYOS.
            </p>
          </motion.div>

          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={() =>
                setCurrentTestimonialIndex((prev) =>
                  prev === 0 ? testimonials.length - 3 : prev - 1
                )
              }
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors border border-gray-200"
            >
              <ChevronLeft className="w-5 h-5 text-dark-700" />
            </button>

            <button
              onClick={() =>
                setCurrentTestimonialIndex((prev) =>
                  prev >= testimonials.length - 3 ? 0 : prev + 1
                )
              }
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors border border-gray-200"
            >
              <ArrowRight className="w-5 h-5 text-dark-700" />
            </button>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-12">
              {testimonials
                .slice(currentTestimonialIndex, currentTestimonialIndex + 3)
                .map((testimonial, index) => {
                  const isExpanded = expandedTestimonials[testimonial.name];
                  const maxLength = 120;
                  const shouldTruncate = testimonial.comment.length > maxLength;
                  const displayText = isExpanded
                    ? testimonial.comment
                    : testimonial.comment.length > maxLength
                    ? testimonial.comment.substring(0, maxLength) + "..."
                    : testimonial.comment;

                  return (
                    <motion.div
                      key={testimonial.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl shadow-sm border border-gray-200"
                    >
                      <div className="flex items-center space-x-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < testimonial.rating
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <div className="mb-4">
                        <p className="text-sm text-gray-700 italic leading-relaxed">
                          "{displayText}"
                        </p>
                        {shouldTruncate && (
                          <button
                            onClick={() =>
                              setExpandedTestimonials((prev) => ({
                                ...prev,
                                [testimonial.name]: !isExpanded,
                              }))
                            }
                            className="mt-2 text-xs text-primary-600 hover:text-primary-700 font-medium flex items-center space-x-1 transition-colors"
                          >
                            {isExpanded ? (
                              <>
                                <span>Read Less</span>
                                <ChevronUp className="w-3 h-3" />
                              </>
                            ) : (
                              <>
                                <span>Read More</span>
                                <ChevronDown className="w-3 h-3" />
                              </>
                            )}
                          </button>
                        )}
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold text-sm">
                            {testimonial.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-dark-800 text-sm">
                            {testimonial.name}
                          </h4>
                          <p className="text-xs text-gray-600">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(testimonials.length / 3) }).map(
                (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonialIndex(index * 3)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      Math.floor(currentTestimonialIndex / 3) === index
                        ? "bg-primary-500"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Transparent Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-dark-800 mb-6">
              Transparent Pricing
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
              No hidden costs, no surprises. Our pricing is clear and upfront so
              you know exactly what to expect.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
            >
              <h3 className="text-base font-semibold text-dark-800 mb-3">
                Basic Services
              </h3>
              <p className="text-2xl font-bold text-primary-600 mb-2">
                ₹260 - ₹1,500
              </p>
              <p className="text-xs text-gray-600">
                Haircut, Styling & Basic Grooming
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
            >
              <h3 className="text-base font-semibold text-dark-800 mb-3">
                Premium Services
              </h3>
              <p className="text-2xl font-bold text-primary-600 mb-2">
                ₹1,500 - ₹3,000
              </p>
              <p className="text-xs text-gray-600">
                Hair Coloring, Extensions & Treatments
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
            >
              <h3 className="text-base font-semibold text-dark-800 mb-3">
                Bridal Packages
              </h3>
              <p className="text-2xl font-bold text-primary-600 mb-2">
                ₹10,000-23,000
              </p>
              <p className="text-xs text-gray-600">
                Complete Bridal Hair & Makeup
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
            >
              <h3 className="text-base font-semibold text-dark-800 mb-3">
                Spa & Wellness
              </h3>
              <p className="text-2xl font-bold text-primary-600 mb-2">
                ₹1,000-4,500
              </p>
              <p className="text-xs text-gray-600">
                Facial, Spa & Relaxation Treatments
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-sm text-gray-600 mb-6">
              All prices include consultation, professional service, and quality
              products.
            </p>
            <Link to="/services" onClick={scrollToTop}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
              >
                View All Services & Prices
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-primary-500 to-primary-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
              Ready to Transform Your Look?
            </h2>
            <p className="text-sm md:text-base text-white/90 mb-8 max-w-2xl mx-auto">
              Book your appointment today and experience the MYOS difference.
              Our expert team is ready to help you create your perfect style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  window.open(
                    "https://wa.me/916238426642?text=Hi! I would like to book an appointment at MYOS salon.",
                    "_blank"
                  )
                }
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Book Now
              </motion.button>
              <Link to="/gallery" onClick={scrollToTop}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
                >
                  View Gallery
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
