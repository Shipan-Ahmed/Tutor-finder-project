"use client";

import {
    Dialog,
    DialogContent,
    DialogTrigger
}
    from "@/components/ui/dialog";

import { useState } from "react";

import { toast }
    from "react-hot-toast";
import { Button } from "@/components/ui/button";

export default function UpdateTutorModal({
    tutor,
    tutors,
    setTutors
}) {

    const [open, setOpen] =
        useState(false);

    async function handleUpdate(e) {

        e.preventDefault();

        const form =
            new FormData(e.target);

        const updated = {

            tutorName:
                form.get("tutorName"),

            hourlyFee:
                form.get("hourlyFee"),

            totalSlot:
                parseInt(
                    form.get("totalSlot")
                )

        };
        const token = await getJwt();
        const res =
            await fetch(
                `http://localhost:3500/tutors/${tutor._id}`,
                {
                    method: "PATCH",

                    headers: {
                        "content-type": "application/json",
                        authorization: `Bearer ${token}`
                    },

                    body:
                        JSON.stringify(updated)
                }
            );

        const data =
            await res.json();

        if (data.modifiedCount) {

            const updatedTutors =
                tutors.map(item =>

                    item._id === tutor._id
                        ? { ...item, ...updated }
                        : item
                );

            setTutors(
                updatedTutors
            );

            toast.success(
                "Updated"
            );

            setOpen(false);

        }

    }

    return (

        <Dialog
            open={open}
            onOpenChange={setOpen}
        >

            <DialogTrigger asChild>

                <Button className="btn bg-blue-500 text-white">

                    Update

                </Button>

            </DialogTrigger>

            <DialogContent>

                <form
                    onSubmit={handleUpdate}
                    className="space-y-4"
                >

                    <input
                        name="tutorName"
                        defaultValue={tutor.tutorName}
                        className="input input-bordered w-full"
                    />

                    <input
                        name="hourlyFee"
                        defaultValue={tutor.hourlyFee}
                        className="input input-bordered w-full"
                    />

                    <input
                        name="totalSlot"
                        defaultValue={tutor.totalSlot}
                        className="input input-bordered w-full"
                    />

                    <button className="btn w-full bg-blue-600 text-white">

                        Save

                    </button>

                </form>

            </DialogContent>

        </Dialog>

    )

}