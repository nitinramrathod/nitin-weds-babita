"use client";

import { motion } from "framer-motion";

const contacts = [
  {
    name: "Pavan Rathod",
    phone: "+919823885688", // add real number with country code
  },
  {
    name: "Sandesh Jadhav",
    phone: "+917066010531",
  },
  {
    name: "Ram Chavan",
    phone: "+917499277674",
  },
];

export default function ContactSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-rose-900 to-red-800 text-white text-center">
      <motion.h2 
         initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
      className="text-3xl md:text-4xl font-bold mb-12 text-yellow-300">
        Contact For Assistance
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {contacts.map((person, index) => (
          <motion.a
            key={index}
            href={`tel:${person.phone}`}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}

            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-yellow-400 hover:bg-yellow-500 hover:text-red-900 transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold mb-3">
              {person.name}
            </h3>
                
            <p className="text-sm">Mobile: {person.phone}</p>
            <div className="flex justify-center">
            <p className="text-lg font-medium mt-3 bg-green-500 w-fit rounded-md px-3 py-1">
              📞 Call Now 
            </p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
