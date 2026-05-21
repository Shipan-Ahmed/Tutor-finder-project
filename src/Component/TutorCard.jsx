import { Button } from '@/components/ui/button';
import { CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Card } from '@heroui/react';
import { Badge } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaBookOpen, FaClock, FaDollarSign } from 'react-icons/fa';

const TutorCard = ({ tutor }) => {
    const { tutorName, subject, photo, hourlyFee, availableTime, institution, totalSlot, _id } = tutor;
    console.log("id : ", _id);
    return (
        <div
            className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 group"
        >
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={photo}
                    alt={tutorName}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                />
            </div>

            <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                        {subject}
                    </span>

                    <span className="text-emerald-600 font-semibold">
                        {totalSlot} Slots
                    </span>
                </div>

                <h3 className="text-2xl font-bold mb-4 line-clamp-1">
                    {tutorName}
                </h3>

                <div className="space-y-3 text-slate-500 mb-6">
                    <div className="flex items-center gap-2">
                        <FaBookOpen className="text-blue-600" />
                        <span>{institution}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <FaClock className="text-blue-600" />
                        <span>{availableTime}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <FaDollarSign className="text-blue-600" />
                        <span>${hourlyFee}/hour</span>
                    </div>
                </div>

                <Link href={`/tutors/${_id}`}>
                    <Button className="w-full rounded-2xl bg-blue-600 hover:bg-indigo-600 h-11">
                        Book Session
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default TutorCard;