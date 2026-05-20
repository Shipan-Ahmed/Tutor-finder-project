"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { SearchX, Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center px-6 overflow-hidden relative">

            <motion.div
                animate={{
                    y: [0, -20, 0],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                }}
                className="absolute top-20 left-16 w-28 h-28 rounded-full bg-blue-200/30 blur-2xl"
            />

            <motion.div
                animate={{
                    y: [0, 20, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                }}
                className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-indigo-300/30 blur-3xl"
            />

            <div className="max-w-2xl text-center z-10">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: .6 }}
                    className="flex justify-center mb-8"
                >
                    <div className="relative">
                        <div className="w-36 h-36 rounded-full bg-white shadow-2xl flex items-center justify-center">
                            <SearchX size={70} className="text-blue-600" />
                        </div>

                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="absolute -inset-4 border-4 border-dashed border-blue-300 rounded-full"
                        />
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-8xl md:text-9xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                >
                    404
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: .2 }}
                    className="text-3xl font-bold text-slate-800 mt-5"
                >
                    Lost in Tutor Space?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: .4 }}
                    className="text-slate-500 mt-4 text-lg leading-8"
                >
                    The page you are trying to visit does not exist or may have moved somewhere else.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: .6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
                >
                    <Link href="/">
                        <Button className="rounded-2xl h-12 px-7 bg-blue-600 hover:bg-indigo-600">
                            <Home className="mr-2 h-4 w-4" />
                            Back Home
                        </Button>
                    </Link>

                    <Button
                        variant="outline"
                        onClick={() => window.history.back()}
                        className="rounded-2xl h-12 px-7"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Go Back
                    </Button>
                </motion.div>
            </div>
        </div>
    )
}
