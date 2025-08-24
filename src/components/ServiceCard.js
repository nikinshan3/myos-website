import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const ServiceCard = ({ service, isFeatured = false }) => {
  const { name, description, price, duration, icon: Icon, features } = service;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative group"
    >
      {isFeatured && (
        <div className="absolute -top-3 -right-3 z-10">
          <div className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
            <Star className="w-4 h-4" />
            <span>Featured</span>
          </div>
        </div>
      )}

      <div className="glass-card p-6 h-full card-hover">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="text-right">
            <div className="flex items-center justify-end space-x-1 mb-1">
              {price.includes("Starting from") && (
                <span className="text-xs text-gray-500">Starting from</span>
              )}
              <p className="text-2xl font-bold text-gradient">
                ₹{price.replace("Starting from ", "")}
              </p>
            </div>
            <p className="text-sm text-gray-600">{duration}</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-dark-800 mb-3 group-hover:text-primary-600 transition-colors">
          {name}
        </h3>

        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>

        {features && (
          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center space-x-2 text-sm text-gray-600"
              >
                <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() =>
            window.open(
              "https://wa.me/916238426642?text=Hi! I would like to book an appointment at MYOS salon.",
              "_blank"
            )
          }
          className="w-full btn-primary"
        >
          Book Now
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
