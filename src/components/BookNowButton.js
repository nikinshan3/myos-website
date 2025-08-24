import React from "react";
import { motion } from "framer-motion";
import { Calendar, Phone } from "lucide-react";

const BookNowButton = () => {
  const handleBookNow = () => {
    // You can integrate with your booking system here
    window.open(
      "https://wa.me/916238426642?text=Hi! I would like to book an appointment at MYOS salon.",
      "_blank"
    );
  };

  const handleCall = () => {
    window.open("tel:+916238426642", "_self");
  };

  return (
    <>
      {/* Desktop Book Now Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed bottom-6 right-6 z-40 hidden lg:block"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleBookNow}
          className="btn-primary flex items-center space-x-2 shadow-2xl"
        >
          <Calendar className="w-5 h-5" />
          <span>Book Now</span>
        </motion.button>
      </motion.div>

      {/* Mobile Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 lg:hidden">
        <div className="flex flex-col space-y-3">
          {/* Call Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleCall}
            className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
          >
            <Phone className="w-6 h-6 text-white" />
          </motion.button>

          {/* Book Now Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleBookNow}
            className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
          >
            <Calendar className="w-6 h-6 text-white" />
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default BookNowButton;
