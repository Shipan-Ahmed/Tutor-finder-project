import BookSessionModal from "@/Component/BookSessionModal";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";


import {
    FaMapMarkerAlt,
    FaGraduationCap,
    FaLaptop,
    FaClock,
    FaCalendarAlt,
    FaDollarSign,
    FaUsers
} from "react-icons/fa";

const TutorDetails = async ({ params }) => {
    const { id } = await params;
    

    const res = await fetch(
        `http://localhost:3500/tutors/${id}`
    );

    const tutor = await res.json();

   

    const {
        tutorName,
        photo,
        subject,
        availableDays,
        availableTime,
        hourlyFee,
        totalSlot,
        sessionDate,
        institution,
        experience,
        location,
        teachingMode,
    } = tutor;


    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    const user = session?.user;
    console.log("User in page:", user);
    console.log("Tutor in page:", tutor);

    return (
        <div className="bg-slate-50 min-h-screen py-10 px-4">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">

                {/* left card */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg">

                    <div className="relative h-[350px]">

                        <Image
                            src={photo}
                            fill
                            alt={tutorName}
                            className="object-cover"
                        />

                    </div>

                    <div className="p-6">

                        <div className="flex justify-center">
                            <span className="px-4 py-1 rounded-full bg-blue-100 text-blue-700">
                                {subject}
                            </span>
                        </div>

                        <h1 className="text-center text-3xl font-bold mt-5">
                            {tutorName}
                        </h1>

                        <div className="space-y-4 mt-8">

                            <div className="flex gap-3 items-center">
                                <FaMapMarkerAlt className="text-blue-600" />
                                <span>{location}</span>
                            </div>

                            <div className="flex gap-3 items-center">
                                <FaGraduationCap className="text-blue-600" />
                                <span>{institution}</span>
                            </div>

                            <div className="flex gap-3 items-center">
                                <FaLaptop className="text-blue-600" />
                                <span>{teachingMode}</span>
                            </div>

                        </div>
                    </div>
                </div>


                {/* right side */}

                <div className="lg:col-span-2 space-y-6">

                    <div className="bg-white p-8 rounded-3xl shadow-lg">

                        <h2 className="text-2xl font-bold mb-8">
                            Tutor Information
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">

                            <div className="flex gap-4">
                                <FaClock className="text-blue-600 mt-1" />
                                <div>
                                    <h4 className="font-semibold">
                                        Available Days
                                    </h4>

                                    <p className="text-slate-500">
                                        {availableDays}
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <FaCalendarAlt className="text-blue-600 mt-1" />
                                <div>
                                    <h4 className="font-semibold">
                                        Time Slot
                                    </h4>

                                    <p className="text-slate-500">
                                        {availableTime}
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <FaDollarSign className="text-blue-600 mt-1" />
                                <div>
                                    <h4 className="font-semibold">
                                        Hourly Fee
                                    </h4>

                                    <p className="text-slate-500">
                                        ${hourlyFee}
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <FaUsers className="text-blue-600 mt-1" />
                                <div>
                                    <h4 className="font-semibold">
                                        Available Slots
                                    </h4>

                                    <p className="text-slate-500">
                                        {totalSlot}
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="bg-white rounded-3xl shadow-lg p-8">

                        <h2 className="text-2xl font-bold mb-4">
                            Experience
                        </h2>

                        <p className="text-slate-500 leading-8">
                            {experience}
                        </p>

                    </div>


                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 flex flex-col md:flex-row justify-between items-center text-white">

                        <div>

                            <p>Session Starts</p>

                            <h2 className="text-3xl font-bold mt-2">
                                {sessionDate}
                            </h2>

                        </div>

                        <BookSessionModal
                            tutor={tutor}
                            user={user}
                        />

                    </div>

                </div>

            </div>
        </div>
    );
};

export default TutorDetails;