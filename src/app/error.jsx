"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { RefreshCcw, Home, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-red-50 to-orange-100 px-6 relative overflow-hidden">
            <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-red-300/20 blur-3xl" />
            <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-orange-300/20 blur-3xl" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-2xl w-full bg-white/80 backdrop-blur-xl rounded-[32px] shadow-2xl p-10 text-center border"
            >
                <motion.div
                    animate={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="flex justify-center mb-6"
                >
                    <div className="h-28 w-28 rounded-full bg-red-100 flex items-center justify-center shadow-lg">
                        <AlertTriangle className="h-14 w-14 text-red-500" />
                    </div>
                </motion.div>

                <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                    Oops!
                </h1>

                <h2 className="text-2xl font-bold mt-4 text-slate-800">
                    Something went wrong
                </h2>

                <p className="mt-4 text-slate-500 leading-8">
                    TutorFinder encountered an unexpected issue. Try refreshing this page or return to the homepage.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <Button
                        onClick={() => reset()}
                        className="h-12 rounded-2xl bg-red-500 hover:bg-red-600"
                    >
                        <RefreshCcw className="mr-2 h-4 w-4" />
                        Try Again
                    </Button>

                    <Link href="/">
                        <Button variant="outline" className="h-12 rounded-2xl">
                            <Home className="mr-2 h-4 w-4" />
                            Go Home
                        </Button>
                    </Link>
                </div>
            </motion.div>
        </div>
    )
}
