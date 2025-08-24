import React from "react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const InstagramFeed = () => {
  // Instagram posts data - placeholder for future implementation
  // const posts = [
  //   {
  //     id: "1",
  //     media_type: "IMAGE",
  //     media_url:
  //       "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&h=400&fit=crop",
  //     caption:
  //       "Beautiful bridal makeup transformation ✨ #bridal #makeup #myos",
  //     permalink: "https://instagram.com/p/example1",
  //     likes: 45,
  //     comments: 12,
  //   },
  //   {
  //     id: "2",
  //     media_type: "VIDEO",
  //     media_url:
  //       "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=400&h=400&fit=crop",
  //     caption: "Hair styling session in progress 💇‍♀️ #hairstyling #salon #myos",
  //     permalink: "https://instagram.com/p/example2",
  //     likes: 32,
  //     comments: 8,
  //   },
  //   {
  //     id: "3",
  //     media_type: "IMAGE",
  //     media_url:
  //       "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=400&fit=crop",
  //     caption: "Fresh haircut and styling ✂️ #haircut #styling #myos",
  //     permalink: "https://instagram.com/p/example3",
  //     likes: 67,
  //     comments: 15,
  //   },
  //   {
  //     id: "4",
  //     media_type: "IMAGE",
  //     media_url:
  //       "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop",
  //     caption:
  //       "Spa and facial treatment for glowing skin ✨ #spa #facial #myos",
  //     permalink: "https://instagram.com/p/example4",
  //     likes: 89,
  //     comments: 23,
  //   },
  //   {
  //     id: "5",
  //     media_type: "VIDEO",
  //     media_url:
  //       "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop",
  //     caption: "Color transformation magic 🎨 #haircolor #transformation #myos",
  //     permalink: "https://instagram.com/p/example5",
  //     likes: 156,
  //     comments: 34,
  //   },
  //   {
  //     id: "6",
  //     media_type: "IMAGE",
  //     media_url:
  //       "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&h=400&fit=crop",
  //     caption: "Grooming session for the perfect look 💪 #grooming #myos",
  //     permalink: "https://instagram.com/p/example6",
  //     likes: 78,
  //     comments: 19,
  //   },
  // ];

  return (
    <section className="py-20 bg-gradient-to-br from-dark-50 to-dark-100">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <Instagram className="w-8 h-8 text-pink-500 mr-3" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-800">
              Follow Us on Instagram
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See our latest work, behind-the-scenes moments, and beautiful
            transformations from our Instagram feed.
          </p>
        </motion.div>

        {/* Follow Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://www.instagram.com/myos.makeoverstudio/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            <Instagram className="w-5 h-5 mr-2" />
            @myos.makeoverstudio
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramFeed;
