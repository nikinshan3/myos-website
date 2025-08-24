import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { scrollToTop } from "../utils/scrollToTop";

const Terms = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-8 space-y-8"
        >
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Acceptance of Terms
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                By accessing and using MYOS Salon's services, you accept and
                agree to be bound by the terms and provision of this agreement.
                Additionally, when using our services, you shall be subject to
                any posted guidelines or rules applicable to such services.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Service Appointments
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>Appointment booking and management:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Appointments can be booked online, by phone, or in person
                </li>
                <li>We recommend booking at least 24 hours in advance</li>
                <li>
                  Please arrive 10 minutes before your scheduled appointment
                </li>
                <li>Late arrivals may result in reduced service time</li>
                <li>
                  We reserve the right to reschedule appointments if necessary
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Cancellation Policy
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>Our cancellation policy:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Cancellations must be made at least 24 hours in advance</li>
                <li>Late cancellations may incur a 50% service charge</li>
                <li>No-shows will be charged the full service amount</li>
                <li>
                  We understand emergencies and will work with you when possible
                </li>
                <li>Multiple no-shows may result in booking restrictions</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Payment Terms
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>Payment and pricing information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Payment is due at the time of service</li>
                <li>We accept cash, credit cards, and digital payments</li>
                <li>Prices are subject to change without notice</li>
                <li>Gift certificates and packages are non-refundable</li>
                <li>We do not offer refunds for completed services</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Health and Safety
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>Health and safety requirements:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Please inform us of any allergies or medical conditions</li>
                <li>We maintain strict hygiene and sanitation standards</li>
                <li>All tools and equipment are properly sterilized</li>
                <li>We follow all local health and safety regulations</li>
                <li>Clients must follow salon safety guidelines</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Service Guarantees
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>Our service guarantees:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>We strive for 100% customer satisfaction</li>
                <li>
                  If you're not satisfied, please let us know within 48 hours
                </li>
                <li>
                  We will work to correct any issues at no additional cost
                </li>
                <li>
                  Results may vary based on individual hair/skin conditions
                </li>
                <li>
                  We cannot guarantee exact color matches due to various factors
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Client Responsibilities
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>As a client, you agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Provide accurate information about your hair/skin history
                </li>
                <li>Follow aftercare instructions provided by our stylists</li>
                <li>Treat our staff and other clients with respect</li>
                <li>Not bring outside food or beverages without permission</li>
                <li>Keep children supervised if they accompany you</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. Limitation of Liability
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                MYOS Salon shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages, including but not
                limited to loss of profits, data, use, goodwill, or other
                intangible losses resulting from your use of our services.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              9. Changes to Terms
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                We reserve the right to modify these terms at any time. Changes
                will be effective immediately upon posting. Your continued use
                of our services constitutes acceptance of the modified terms.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              10. Contact Information
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                If you have any questions about these Terms of Service, please
                contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium">MYOS Salon</p>
                <p>Payyoli, Calicut, Kerala, India</p>
                <p>Phone: +91 62384 26642</p>
                <p>Email: myosmakeoverstudio@gmail.com</p>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
