import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";

const StaffCard = ({ staff }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { name, role, image, bio, experience, specialties, social } = staff;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      <div className="glass-card p-6 h-full card-hover overflow-hidden">
        <div className="relative mb-4">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
            {image ? (
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-white font-semibold text-3xl">
                {name.charAt(0).toUpperCase()}
              </span>
            )}
          </div>

          {/* Experience Badge */}
          <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {experience} Years
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold text-dark-800 mb-1">{name}</h3>
          <p className="text-primary-600 font-medium mb-3">{role}</p>

          <div className="space-y-2 mb-4">
            {specialties.map((specialty, index) => (
              <span
                key={index}
                className="inline-block bg-primary-100 text-primary-700 px-2 py-1 rounded-full text-xs font-medium mr-1 mb-1"
              >
                {specialty}
              </span>
            ))}
          </div>

          {/* Social Links */}
          {social && (
            <div className="flex justify-center space-x-3 mb-4">
              {social.instagram && (
                <motion.a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-shadow"
                >
                  <Instagram className="w-4 h-4" />
                </motion.a>
              )}
              {social.facebook && (
                <motion.a
                  href={social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-shadow"
                >
                  <Facebook className="w-4 h-4" />
                </motion.a>
              )}
            </div>
          )}
        </div>

        {/* Hover Bio Overlay */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gradient-to-br from-primary-500/95 to-accent-500/95 rounded-xl flex items-center justify-center p-6"
            >
              <div className="text-center text-white">
                <h4 className="text-lg font-semibold mb-3">{name}</h4>
                <p className="text-sm leading-relaxed">{bio}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default StaffCard;
