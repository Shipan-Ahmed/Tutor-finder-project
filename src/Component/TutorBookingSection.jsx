"use client";

import { useState } from "react";
import BookSessionModal from "./BookSessionModal";

export default function TutorBookingSection({
    tutor,
    user
}) {

    const [slots, setSlots] = useState(
        tutor.totalSlot
    );

    return (
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 flex flex-col md:flex-row justify-between items-center text-white">

            <div>
                <p>Session Starts</p>

                <h2 className="text-3xl font-bold mt-2">
                    {tutor.sessionDate}
                </h2>

                <p className="mt-4 text-blue-100">
                    Available Slots:
                    <span className="font-bold ml-2">
                        {slots}
                    </span>
                </p>
            </div>

            <BookSessionModal
                tutor={tutor}
                user={user}
                slots={slots}
                setSlots={setSlots}
            />

        </div>
    );
}


