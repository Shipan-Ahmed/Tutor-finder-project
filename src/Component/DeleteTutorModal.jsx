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
import getJwt from "@/lib/getToken";

export default function DeleteTutorModal({
    id,
    tutors,
    setTutors
}) {

    const [open, setOpen] =
        useState(false);

    async function handleDelete() {
        const token = await getJwt();
        const res =
            await fetch(
                `http://localhost:3500/tutors/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                }
            );

        const data =
            await res.json();

        if (data.deletedCount) {

            setTutors(

                tutors.filter(
                    item => item._id !== id
                )

            );

            toast.success(
                "Tutor deleted"
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

                <Button className="btn bg-red-500 text-white">

                    Delete

                </Button>

            </DialogTrigger>

            <DialogContent>

                <h2 className="text-xl font-bold">

                    Delete Tutor?

                </h2>

                <p>
                    This action cannot be undone.
                </p>

                <button
                    onClick={handleDelete}
                    className="btn bg-red-600 text-white mt-4"
                >

                    Confirm Delete

                </button>

            </DialogContent>

        </Dialog>

    )

}