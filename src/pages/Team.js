import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Award,
  Heart,
  Star,
  Lightbulb,
  Shield,
  Globe,
  TrendingUp,
  Clipboard,
} from "lucide-react";
import { team } from "../data/team";
import StaffCard from "../components/StaffCard";

import { scrollToTop } from "../utils/scrollToTop";

const Team = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

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
              Meet Our Team
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Our talented team of beauty professionals is dedicated to helping
              you look and feel your best. Each member brings unique expertise
              and passion to MYOS.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-white border-b">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gradient mb-2">
                {team.length}
              </h3>
              <p className="text-gray-600 font-medium">Expert Staff</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gradient mb-2">100%</h3>
              <p className="text-gray-600 font-medium">Certified</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gradient mb-2">100%</h3>
              <p className="text-gray-600 font-medium">Satisfaction</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gradient mb-2">24/7</h3>
              <p className="text-gray-600 font-medium">Support</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-gradient-to-br from-dark-50 to-dark-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-dark-800 mb-6">
              Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the passionate professionals who make MYOS the premier salon
              in Payyoli. Each team member is dedicated to delivering
              exceptional service and creating beautiful transformations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <StaffCard staff={member} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-dark-800 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do at MYOS and ensure we
              provide the best possible experience for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description:
                  "We strive for excellence in every service we provide, ensuring the highest quality results for our clients.",
                icon: Star,
              },
              {
                title: "Innovation",
                description:
                  "We stay updated with the latest trends and techniques to offer cutting-edge beauty solutions.",
                icon: Lightbulb,
              },
              {
                title: "Integrity",
                description:
                  "We maintain the highest standards of professionalism and honesty in all our interactions.",
                icon: Shield,
              },
              {
                title: "Passion",
                description:
                  "Our team is passionate about beauty and committed to helping clients feel confident and beautiful.",
                icon: Heart,
              },
              {
                title: "Community",
                description:
                  "We build lasting relationships with our clients and contribute positively to our local community.",
                icon: Globe,
              },
              {
                title: "Growth",
                description:
                  "We continuously learn and grow as professionals to better serve our clients' evolving needs.",
                icon: TrendingUp,
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-dark-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-gradient-to-br from-dark-50 to-dark-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-dark-800 mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're always looking for passionate beauty professionals who share
              our vision and values. However, we're currently not accepting new
              applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="glass-card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                <Clipboard className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-dark-800 mb-4">
                Currently Not Hiring
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Thank you for your interest in joining the MYOS team! We
                currently have a full team of talented professionals and are not
                accepting new applications at this time.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800 text-sm">
                  <strong>Note:</strong> We'll update this section when new
                  opportunities become available. Feel free to check back later!
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-4">
              In the meantime, why not book an appointment with our current
              team?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                window.open(
                  "https://wa.me/916238426642?text=Hi! I would like to book an appointment at MYOS salon.",
                  "_blank"
                )
              }
              className="btn-primary text-lg px-8 py-4"
            >
              Book Appointment
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;
