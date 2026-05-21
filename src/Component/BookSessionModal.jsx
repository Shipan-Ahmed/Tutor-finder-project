"use client";

import { useState } from "react";
import { format, isBefore, startOfDay } from "date-fns";
import { toast } from "react-hot-toast";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

export default function BookSessionModal({
    tutor,
    user,
}) {
    const [loading, setLoading] = useState(false);

    const [open, setOpen] = useState(false);

    const [slots, setSlots] = useState(
        tutor.totalSlot
    );

    const {
        _id,
        tutorName,
        totalSlot,
        sessionDate,
    } = tutor;
    console.log( "User in modal:", user);
    console.log( "Tutor in modal:", tutor);
    const handleBooking = async (e) => {
        e.preventDefault();

        const form = new FormData(e.target);

        const phone = form.get("phone");

        // Slot check

        if (slots <= 0) {
            toast.error(
                "This session is fully booked."
            );
            return;
        }

        // Session date restriction

        const today = startOfDay(new Date());

        const sessionDay =
            startOfDay(new Date(sessionDate));

        if (isBefore(today, sessionDay)) {
            toast.error(
                "Booking is not available yet for this tutor"
            );

            return;
        }

        const bookingData = {
            tutorId: _id,

            tutorName,

            studentName:
                user?.name,

            studentEmail:
                user?.email,

            phone,

            status: "booked",

            bookedAt: new Date(),
        };

        try {
            setLoading(true);

            // booking insert

            const bookingRes = await fetch(
                "http://localhost:3500/bookings",
                {
                    method: "POST",

                    headers: {
                        "content-type":
                            "application/json",
                    },

                    body: JSON.stringify(
                        bookingData
                    ),
                }
            );

            const bookingResult =
                await bookingRes.json();

            if (bookingResult.insertedId) {

                await fetch(
                    `http://localhost:3500/tutors/decrease-slot/${_id}`,
                    {
                        method: "PATCH"
                    }
                );

                // update local UI instantly
                setSlots(prev => prev - 1);

                // close modal
                setOpen(false);

                toast.success(
                    "Session booked successfully"
                );

            }
        } catch (err) {
            toast.error(
                "Booking failed"
            );

            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog
            open={open}
            onOpenChange={setOpen}
        >
            <DialogTrigger asChild>

                <button className="bg-white text-blue-600 px-8 py-3 rounded-2xl font-semibold">
                    Book Session
                </button>

            </DialogTrigger>

            <DialogContent>

                <DialogHeader>
                    <DialogTitle>
                        Book Session
                    </DialogTitle>
                </DialogHeader>

                <form
                    onSubmit={handleBooking}
                    className="space-y-4 mt-5"
                >
                    <label>Student Name</label>
                    <input
                        value={user?.name}
                        readOnly
                        className="w-full border rounded-xl p-3"
                    />
                    <label>Student Phone</label>
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone number"
                        required
                        className="w-full border rounded-xl p-3"
                    />

                    <label>Student Email</label>
                    <input
                        value={user?.email}
                        readOnly
                        className="w-full border rounded-xl p-3"
                    />

                    <label>Tutor Name</label>
                    <input
                        value={tutorName}
                        readOnly
                        className="w-full border rounded-xl p-3"
                    />
                  
                    <label>Tutor id</label>
                    <input
                        value={_id}
                        readOnly
                        className="w-full border rounded-xl p-3"
                    />
                  

                    <button
                        disabled={loading}
                        className="w-full bg-blue-600 text-white py-3 rounded-xl"
                    >
                        {loading
                            ? "Booking..."
                            : "Confirm Booking"}
                    </button>
                </form>

            </DialogContent>
        </Dialog>
    );
}