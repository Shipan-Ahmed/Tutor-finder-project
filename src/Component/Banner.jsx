"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const slides = [
    {
        id: 1,
        title: "Find Expert Tutors For Every Subject",
        description:
            "Connect with skilled tutors and book learning sessions based on your schedule.",
        image:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400",
    },
    {
        id: 2,
        title: "Smart Booking Without Schedule Conflicts",
        description:
            "Choose available time slots and enjoy a smooth learning experience.",
        image:
            "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1400",
    },
    {
        id: 3,
        title: "Start Learning With Confidence",
        description:
            "Book online sessions, track schedules, and improve your skills easily.",
        image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400",
    },
]

export default function Banner() {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) =>
                prev === slides.length - 1 ? 0 : prev + 1
            )
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1)
    }

    return (
        <section className="relative h-[88vh] overflow-hidden rounded">
            <AnimatePresence mode="wait">
                <motion.div
                    key={slides[current].id}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: .7 }}
                    className="absolute inset-0"
                >
                    <Image
                        src={slides[current].image}
                        alt={slides[current].title}
                        fill
                        priority
                        className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-black/30" />
                </motion.div>
            </AnimatePresence>

            <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex items-center">
                <div className="max-w-3xl text-white">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-blue-600 px-4 py-2 rounded-full text-sm"
                    >
                        Smart Tutor Booking Platform
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: .2 }}
                        className="text-5xl md:text-7xl font-black mt-6 leading-tight"
                    >
                        {slides[current].title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: .4 }}
                        className="text-slate-300 text-lg mt-6 leading-8"
                    >
                        {slides[current].description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: .6 }}
                        className="flex gap-4 mt-10"
                    >
                        <Link href="/tutors">
                            <Button className="h-12 rounded-2xl px-8 bg-blue-600 hover:bg-indigo-600">
                                Explore Tutors
                            </Button>
                        </Link>

                        <Link href="/add-tutor">
                            <Button
                                variant="secondary"
                                className="h-12 rounded-2xl px-8   "
                            >
                                Become Tutor
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>

            <button
                onClick={prevSlide}
                className="absolute left-5 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur p-4 rounded-full text-white"
            >
                <FaChevronLeft />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-5 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur p-4 rounded-full text-white"
            >
                <FaChevronRight />
            </button>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        onClick={() => setCurrent(index)}
                        className={`cursor-pointer h-3 rounded-full transition-all ${current === index ? 'w-10 bg-blue-500' : 'w-3 bg-white'}`}
                    />
                ))}
            </div>
        </section>
    )
}
