import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { services, serviceCategories } from "../data/services";
import ServiceCard from "../components/ServiceCard";
import { scrollToTop } from "../utils/scrollToTop";

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Services");

  useEffect(() => {
    scrollToTop();
  }, []);

  const filteredServices =
    selectedCategory === "All Services"
      ? services
      : services.filter((service) => {
          if (selectedCategory === "Hair Services") {
            return [
              "Haircut & Styling",
              "Hair Coloring",
              "Hair Treatment",
            ].includes(service.name);
          } else if (selectedCategory === "Beauty Services") {
            return ["Spa & Facial", "Makeup Services"].includes(service.name);
          } else if (selectedCategory === "Bridal Services") {
            return service.name === "Bridal Services";
          } else if (selectedCategory === "Grooming") {
            return service.name === "Grooming Services";
          }
          return true;
        });

  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-primary-500">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of premium beauty and grooming
              services. From haircuts to bridal packages, we have everything you
              need to look and feel your best.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {serviceCategories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-dark-50 to-dark-100">
        <div className="container-custom">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredServices.map((service, index) => (
              <ServiceCard
                key={service.name}
                service={service}
                isFeatured={service.isFeatured}
              />
            ))}
          </motion.div>

          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-xl text-gray-600">
                No services found in this category. Please try another category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-dark-800 mb-6">
              Service Highlights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We take pride in offering premium services with attention to
              detail and customer satisfaction as our top priorities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-dark-800 mb-4">
                Professional Consultation
              </h3>
              <p className="text-gray-600">
                Every service includes a detailed consultation to understand
                your needs and preferences before we begin.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-8 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white">★</span>
              </div>
              <h3 className="text-xl font-semibold text-dark-800 mb-4">
                Premium Products
              </h3>
              <p className="text-gray-600">
                We use only the highest quality products and tools to ensure the
                best results for your hair and skin.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-8 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white">♥</span>
              </div>
              <h3 className="text-xl font-semibold text-dark-800 mb-4">
                Aftercare Support
              </h3>
              <p className="text-gray-600">
                Get personalized aftercare tips and recommendations to maintain
                your new look and keep your hair healthy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-20 bg-gradient-to-br from-dark-50 to-dark-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-dark-800 mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our pricing is transparent and competitive. All prices include
              consultation, service, and basic styling. Additional treatments
              may incur extra charges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Basic Services",
                range: "₹260 - ₹1500",
                description: "Haircuts, basic styling, and grooming",
              },
              {
                title: "Premium Services",
                range: "₹1500 - ₹3000",
                description: "Coloring, treatments, and special styling",
              },
              {
                title: "Bridal Packages",
                range: "₹10000 - ₹23000",
                description: "Complete bridal hair and makeup packages",
              },
              {
                title: "Spa & Facial",
                range: "₹1000 - ₹4500",
                description: "Facial treatments and spa services",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <h3 className="text-xl font-semibold text-dark-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-2xl font-bold text-gradient mb-3">
                  {item.range}
                </p>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
