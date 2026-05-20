"use client"

import Link from "next/link"
import {  MapPin, Mail, Phone } from "lucide-react"
import { FaFacebook } from "react-icons/fa6"
import { LiaLinkedin } from "react-icons/lia"
import { BsGithub, BsInstagram } from "react-icons/bs"

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-300 mt-20 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-2 lg:grid-cols-4 gap-10">

                <div>
                    <h2 className="text-3xl font-bold text-white">
                        Tutor<span className="text-blue-500">Finder</span>
                    </h2>

                    <p className="mt-4 text-slate-400 leading-7">
                        Find expert tutors, schedule sessions easily, and learn with a smooth booking experience anytime.
                    </p>
                </div>

                <div>
                    <h3 className="text-white text-lg font-semibold mb-5">
                        Learning Services
                    </h3>

                    <ul className="space-y-3">
                        <li>
                            <Link href="/tutors" className="hover:text-blue-400 transition">
                                Find Tutors
                            </Link>
                        </li>

                        <li>
                            <Link href="/addTutor" className="hover:text-blue-400 transition">
                                Become Tutor
                            </Link>
                        </li>

                        <li>
                            <Link href="/myBookedSessions" className="hover:text-blue-400 transition">
                                Booked Sessions
                            </Link>
                        </li>

                        <li>
                            <Link href="/myTutors" className="hover:text-blue-400 transition">
                                My Tutors
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white text-lg font-semibold mb-5">
                        Contact
                    </h3>

                    <div className="space-y-4 text-slate-400">
                        <div className="flex gap-3">
                            <MapPin size={18} />
                            <span>Rangpur, Bangladesh</span>
                        </div>

                        <div className="flex gap-3">
                            <Phone size={18} />
                            <span>+880 1234-567890</span>
                        </div>

                        <div className="flex gap-3">
                            <Mail size={18} />
                            <span>support@tutorfinder.com</span>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-white text-lg font-semibold mb-5">
                        Follow Us
                    </h3>

                    <div className="flex gap-4">
                        <Link href="#" className="bg-slate-900 p-3 rounded-full hover:bg-blue-600 transition">
                            <FaFacebook size={18} />
                        </Link>

                        <Link href="#" className="bg-slate-900 p-3 rounded-full hover:bg-blue-600 transition">
                            <BsInstagram size={18} />
                        </Link>

                        <Link href="#" className="bg-slate-900 p-3 rounded-full hover:bg-blue-600 transition">
                            <LiaLinkedin size={18} />
                        </Link>

                        <Link href="#" className="bg-slate-900 p-3 rounded-full hover:bg-blue-600 transition">
                            <BsGithub size={18} />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="border-t border-slate-800 py-5 text-center text-sm text-slate-500">
                © {new Date().getFullYear()} TutorFinder. All rights reserved.
            </div>
        </footer>
    )
}
