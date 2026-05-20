"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { FaBookOpen, FaClock, FaDollarSign } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import TutorCard from "./TutorCard"

export default function AvailableTutors() {
    const [tutors, setTutors] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("http://localhost:3500/tutors?limit=6")
            .then((res) => res.json())
            .then((data) => {
                setTutors(data)
                setLoading(false)
            })
            .catch(() => setLoading(false))
    }, [])

    if (loading) {
        return (
            <div className="py-20 text-center">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        )
    }

    return (
        <section className="max-w-7xl mx-auto px-4 py-20">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-slate-900">
                    Available Tutors
                </h2>

                <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
                    Explore top tutors and book learning sessions based on your preferred subject and schedule.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {tutors.map((tutor) => <TutorCard key={tutor._id} tutor={tutor} />)}
            </div>

            <div className="flex justify-center mt-12">
                <Link href="/tutors">
                    <Button
                        variant="outline"
                        className="rounded-2xl px-8 h-12"
                    >
                        View All Tutors
                    </Button>
                </Link>
            </div>
        </section>
    )
}
