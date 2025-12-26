import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, Phone, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function LandscapingWebsite() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Professional Landscaping Services
            </h1>
            <p className="text-lg mb-6">
              Transforming lawns into beautiful outdoor spaces with reliable,
              high-quality care.
            </p>
            <Button className="bg-white text-green-700 font-semibold px-6 py-3 rounded-2xl shadow-lg">
              Get a Free Estimate
            </Button>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Leaf size={180} className="mx-auto opacity-20" />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Lawn Maintenance",
              "Mulching & Cleanup",
              "Hedge & Tree Trimming",
            ].map((service) => (
              <Card key={service} className="rounded-2xl shadow-md">
                <CardContent className="p-6">
                  <CheckCircle className="text-green-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service}</h3>
                  <p className="text-gray-600">
                    Reliable and professional service to keep your property
                    looking its best.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Upgrade Your Yard?</h2>
        <p className="mb-6">Call today for a free quote and fast service.</p>
        <Button className="bg-white text-green-700 font-semibold px-6 py-3 rounded-2xl inline-flex items-center gap-2">
          <Phone size={18} /> Contact Us
        </Button>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-gray-300 text-center">
        © {new Date().getFullYear()} Your Landscaping Company. All rights reserved.
      </footer>
    </div>
  );
}
