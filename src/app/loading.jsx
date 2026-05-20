"use client"

import { motion } from "framer-motion"
import { BookOpen, GraduationCap } from "lucide-react"

export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden relative px-4">

            <div className="absolute top-20 left-20 w-44 h-44 rounded-full bg-blue-300/20 blur-3xl" />
            <div className="absolute bottom-20 right-20 w-56 h-56 rounded-full bg-indigo-300/20 blur-3xl" />

            <div className="text-center z-10">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="relative flex justify-center"
                >
                    <div className="h-32 w-32 rounded-full border-4 border-dashed border-blue-400 flex items-center justify-center bg-white shadow-2xl">
                        <GraduationCap className="h-14 w-14 text-blue-600" />
                    </div>

                    <motion.div
                        animate={{
                            rotate: -360,
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="absolute -right-5 top-10 bg-indigo-500 text-white p-3 rounded-full shadow-xl"
                    >
                        <BookOpen size={20} />
                    </motion.div>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-10 text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                >
                    Finding Your Perfect Tutor...
                </motion.h2>

                <p className="text-slate-500 mt-3">
                    Preparing learning sessions for you.
                </p>

                <div className="flex justify-center gap-2 mt-8">
                    {[1, 2, 3].map((dot) => (
                        <motion.div
                            key={dot}
                            animate={{
                                y: [0, -10, 0]
                            }}
                            transition={{
                                duration: .8,
                                repeat: Infinity,
                                delay: dot * .2
                            }}
                            className="w-3 h-3 rounded-full bg-blue-500"
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
