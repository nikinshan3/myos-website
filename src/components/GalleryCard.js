import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, Heart } from "lucide-react";

const GalleryCard = ({ image, category, title }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleImageClick = () => {
    // You can implement a lightbox here
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-xl bg-gray-200">
        <img
          src={image}
          alt={title}
          className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Permanent Overlay with Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 rounded-xl">
          {/* Vignette Effect */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/70 rounded-xl"></div>
        </div>

        {/* Center Title */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="text-center">
            <h3 className="text-white text-lg md:text-xl font-semibold drop-shadow-lg">
              {title}
            </h3>
          </div>
        </div>

        {/* Hover Overlay for Actions */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/30 flex items-center justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLiked(!isLiked);
                }}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors mr-4 ${
                  isLiked
                    ? "bg-red-500 text-white"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleImageClick}
                className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-white/30 transition-colors"
              >
                <ZoomIn className="w-4 h-4" />
                <span>View</span>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Quick View Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          onClick={handleImageClick}
          className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
        >
          <ZoomIn className="w-5 h-5 text-dark-700" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default GalleryCard;
