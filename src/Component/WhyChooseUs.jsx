"use client";

import {
    FaUserGraduate,
    FaShieldAlt,
    FaClock,
    FaBookReader
}
    from "react-icons/fa";

const WhyChooseUs = () => {
    const items = [

        {
            id: 1,
            icon: <FaUserGraduate />,
            title: "Expert Tutors",
            desc: "Learn from experienced and verified tutors."
        },

        {
            id: 2,
            icon: <FaClock />,
            title: "Flexible Schedule",
            desc: "Book sessions based on your preferred time."
        },

        {
            id: 3,
            icon: <FaShieldAlt />,
            title: "Secure Booking",
            desc: "Smart scheduling prevents conflicts."
        },

        {
            id: 4,
            icon: <FaBookReader />,
            title: "Better Learning",
            desc: "Organized classes and improved learning."
        }

    ]

    return (

        <section className="py-20">

            <div className="max-w-7xl mx-auto px-4">

                <div className="text-center mb-14">

                    <h2 className="text-4xl font-bold">

                        Why Students Choose Us

                    </h2>

                    <p className="text-slate-500 mt-4">

                        A smarter way to book and manage tutoring sessions

                    </p>

                </div>


                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {
                        items.map(item => (

                            <div
                                key={item.id}
                                className="rounded-3xl p-8 bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg"
                            >

                                <div className="text-4xl mb-6">

                                    {item.icon}

                                </div>

                                <h3 className="text-xl font-bold mb-3">

                                    {item.title}

                                </h3>

                                <p className="text-blue-100">

                                    {item.desc}

                                </p>

                            </div>

                        ))
                    }

                </div>

            </div>

        </section>

    )

};

export default WhyChooseUs;