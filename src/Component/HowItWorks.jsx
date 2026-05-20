"use client";

import {
    FaSearch,
    FaCalendarCheck,
    FaVideo
} from "react-icons/fa";

const HowItWorks = () => {
    const steps = [
        {
            id: 1,
            icon: <FaSearch size={28} />,
            title: "Find Your Tutor",
            desc: "Browse tutors based on subject, availability and learning style."
        },

        {
            id: 2,
            icon: <FaCalendarCheck size={28} />,
            title: "Book Session",
            desc: "Choose available time slots and reserve your learning session."
        },

        {
            id: 3,
            icon: <FaVideo size={28} />,
            title: "Start Learning",
            desc: "Join your session online and learn from experienced tutors."
        }

    ]

    return (

        <section className="py-20 bg-slate-50">

            <div className="max-w-7xl mx-auto px-4">

                <div className="text-center mb-14">

                    <h2 className="text-4xl font-bold">
                        How It Works
                    </h2>

                    <p className="text-slate-500 mt-4">
                        Book your tutor in three simple steps
                    </p>

                </div>


                <div className="grid md:grid-cols-3 gap-8">

                    {
                        steps.map(step => (

                            <div
                                key={step.id}
                                className="bg-white rounded-3xl p-8 shadow-lg text-center hover:-translate-y-2 transition"
                            >

                                <div className="w-20 h-20 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-6">

                                    {step.icon}

                                </div>

                                <h3 className="font-bold text-2xl mb-4">
                                    {step.title}
                                </h3>

                                <p className="text-slate-500">
                                    {step.desc}
                                </p>

                            </div>

                        ))
                    }

                </div>

            </div>

        </section>

    )
};

export default HowItWorks;