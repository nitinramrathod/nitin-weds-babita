"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"
import BeatingHeart from "./BeatingHeart";


type CountdownTime = {
  days: number
  hours: number
  minutes: number
  seconds: number
}


export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string|null>(null)

  const units: (keyof CountdownTime)[] = [
  "days",
  "hours",
  "minutes",
  "seconds",
]

  const engagementImages = [
            "/images/nitin-babita-1.jpg",
            "/images/nitin-babita-2.jpg",
            "/images/nitin-babita-3.jpg",
            "/images/nitin-babita-4.JPG",
            "/images/nitin-babita-5.JPG",
            "/images/nitin-babita-6.jpg",
          ]

  const weddingDate = new Date("2026-03-08T13:30:00")

const [timeLeft, setTimeLeft] = useState<CountdownTime>({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
})

useEffect(() => {
  const timer = setInterval(() => {
    const now = new Date()
    // const difference = weddingDate - now
    const difference = weddingDate.getTime() - now.getTime()


    if (difference > 0) {
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      })
    }
  }, 1000)

  return () => clearInterval(timer)
}, [])

  return (
    <main className="bg-gradient-to-b from-rose-100 to-orange-50 text-gray-800">

      {/* ================= LANDING SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/nitin-babita-4.JPG"   // your romantic couple image
            alt="Wedding Backdrop"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 flex flex-col items-center">

          {/* Floating Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="rounded-2xl overflow-hidden shadow-2xl border-4 border-yellow-400"
          >
            <Image
              src="/images/nitin-babita-2.jpg"   // second photo
              alt="Bride Groom"
              width={280}
              height={350}
              className="object-cover"
            />
          </motion.div>

          {/* Wedding Text */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-8 text-4xl md:text-6xl font-bold text-yellow-400 drop-shadow-lg"
          >
            Nitin <span className="text-white">&</span> Babita
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-4 text-lg md:text-2xl text-white tracking-widest"
          >
            Together With Their Families
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 1 }}
            className="mt-2 text-xl text-rose-200 font-semibold"
          >
            Invite You To Celebrate Their Sacred Union
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 1 }}
            className="mt-6 text-lg text-yellow-300"
          >
            Sunday, 08 March 2026 • Jalna
          </motion.p>

        </div>
      </section>


      {/* ================= COUNTDOWN SECTION ================= */}
<section className="py-20 bg-gradient-to-r from-rose-700 via-red-600 to-orange-600 text-white text-center relative overflow-hidden">

  <motion.h2
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="text-3xl md:text-5xl font-bold mb-4"
  >
    Countdown To Our Wedding
  </motion.h2>

  <p className="mb-10 text-lg tracking-wide">
    08 March 2026 • 01:30 PM
  </p>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto px-6">

    {units.map((unit, index) => (
      <motion.div
        key={unit}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.2 }}
        className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20"
      >
        <motion.div
          // key={timeLeft[unit]}
          key={unit}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-3xl md:text-5xl font-bold text-yellow-300"
        >
          {timeLeft[unit] || 0}
        </motion.div>

        <p className="mt-2 uppercase tracking-widest text-sm">
          {unit}
        </p>
      </motion.div>
    ))}

  </div>

  <BeatingHeart/>

</section>


      {/* ================= LOCATION SECTION ================= */}
      <section className="py-16 px-6 bg-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-bold text-rose-700"
        >
          Wedding Location
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-4 max-w-xl mx-auto">
          Jogeshwari Mata Mandir, Pahegaon, Tq.Jalna, Dist.Jalna, MH, 431203
        </motion.p>

        <div className="mt-6">

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1762.2399621206891!2d76.17206860394391!3d19.81492083376394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bda618ba4898b57%3A0xfa5b6b0c101b9c43!2sJogeshwri%20Mata%20Mandir!5e1!3m2!1sen!2sin!4v1771350078041!5m2!1sen!2sin"
            width="600"
            height="450"
            className="min-w-80 w-full h-74 rounded-xl shadow-md"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>

      {/* ================= TIMELINE SECTION ================= */}
      <section className="py-16 px-6 bg-rose-50">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-bold text-center text-rose-700"
        >
          Wedding Timeline
        </motion.h2>

        <div className="mt-12 max-w-3xl mx-auto space-y-8">

          {[
            {
              title: "Haldi Ceremony",
              time: "07 March 2026 – 05:00 PM",
              location: "Groom's Home - Mathtanda, Jalna, MH"
            },
            {
              title: "DJ & Sangeet",
              time: "07 March 2026 – 07:00 PM",
              location: "Groom's Home - Mathtanda, Jalna, MH"
            },
            {
              title: "Wedding Ceremony",
              time: "08 December 2026 – 01:30 PM",
              location: "Bride's Home - Pahegaon, Jalna, MH"
            },
            {
              title: "Reception",
              time: "08 March 2026 – 04:00 PM",
              location: "Bride's Home - Pahegaon, Jalna, MH"
            }
          ].map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-bold text-orange-600">
                {event.title}
              </h3>
              <p className="mt-2">{event.time}</p>
              <p className="text-sm text-gray-600">
                📍 {event.location}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ================= IMAGE GALLERY SECTION ================= */}
      <section className="py-16 px-6 bg-white">
        <motion.h2         
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-bold text-center text-rose-700"
        >
          Engagement Memories
        </motion.h2>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {engagementImages.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}              
              className="cursor-pointer overflow-hidden rounded-xl shadow-md"
              onClick={() => setSelectedImage(img)}
            >
              <Image
                src={img}
                alt="Wedding"
                width={500}
                height={500}
                className="object-cover w-full h-40 md:h-60"
              />
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-3xl w-full bg-red-200/10 backdrop-blur-md"
            >
              <Image
                src={selectedImage}
                alt="Full View"
                width={450}
                height={250}
                className="rounded-xl w-full aspect-square shadow-md object-contain"
              />

              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 bg-white text-black px-3 py-1 rounded-full"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>



      {/* ================= FOOTER ================= */}
      <footer className="py-8 text-center bg-rose-700 text-white">
        <p>With love, Nitin & Babita ❤️</p>
      </footer>

    </main>
  )
}
