"use client";

import { useEffect, useState } from "react";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
}
    from "@/components/ui/alert-dialog";

import { Button }
    from "@/components/ui/button";

import toast from "react-hot-toast";

import { authClient }
    from "@/lib/auth-client";

import {
    FaBookOpen
}
    from "react-icons/fa";

export  default function MyBookedSessions() {

    const [sessions, setSessions] =
        useState([]);

    const [loading, setLoading] =
        useState(true);

    const {
        data: session
    }
        =
        authClient.useSession();

    const user =
        session?.user;

   

    useEffect(() => {

        async function loadBookings() {

            if (!user?.email) return;

            try {

                const token = await getJwt();

                const res = await fetch(
                    `http://localhost:3500/bookings/${user.email}`,
                    {
                        headers: {
                            authorization:`Bearer ${token}`
                        }
                    }
                );

                const data =
                    await res.json();

                setSessions(data);

            }

            catch (error) {

                console.log(error);

                toast.error(
                    "Failed to load sessions"
                )

            }

            finally {

                setLoading(false);

            }

        }

        loadBookings();

    }, [user]);



    async function handleCancel(id) {

        try {

            const token =
                await getJwt();

            const res =
                await fetch(
                    `http://localhost:3500/bookings/cancel/${id}`,
                    {
                        method: "PATCH",

                        headers: {
                            authorization:
                                `Bearer ${token}`
                        }
                    }
                );

            const data =
                await res.json();

            if (data.modifiedCount) {

                setSessions(prev =>
                    prev.map(item =>
                        item._id === id
                            ? {
                                ...item,
                                status: "cancelled"
                            }
                            : item
                    )
                );

                toast.success(
                    "Session cancelled"
                );

            }

        }

        catch {

            toast.error("Failed");

        }

    }


    if (loading) {

        return (

            <div className="flex justify-center py-20">

                <span className="
loading
loading-spinner
loading-lg
">
                </span>

            </div>

        )

    }



    if (
        sessions.length === 0
    ) {

        return (

            <div className="
py-20
">

                <div className="
max-w-md
mx-auto
bg-accent
shadow-lg
rounded-3xl
p-10
text-center
">

                    <FaBookOpen
                        className="
mx-auto
text-6xl
text-blue-500
mb-5
"
                    />

                    <h2 className="
text-3xl
font-bold
">

                        No Booked Sessions

                    </h2>

                    <p className="
text-slate-500
mt-3
">

                        You haven't booked
                        any tutor session yet.

                    </p>

                </div>

            </div>

        )

    }



    return (

        <div className="
max-w-7xl
mx-auto
px-4
py-10
">

            <h1 className="
text-4xl
font-bold
mb-8
">

                My Booked Sessions

            </h1>


            <div className="
bg-accent
rounded-3xl
shadow-lg
overflow-hidden
">

                <Table>

                    <TableHeader>

                        <TableRow>

                            <TableHead>
                                Tutor Name
                            </TableHead>

                            <TableHead>
                                Student Name
                            </TableHead>

                            <TableHead>
                                Email
                            </TableHead>

                            <TableHead>
                                Status
                            </TableHead>

                            <TableHead>
                                Action
                            </TableHead>

                        </TableRow>

                    </TableHeader>


                    <TableBody>

                        {
                            sessions.map(
                                item => (

                                    <TableRow
                                        key={item._id}
                                    >

                                        <TableCell>

                                            {item.tutorName}

                                        </TableCell>

                                        <TableCell>

                                            {item.studentName}

                                        </TableCell>

                                        <TableCell>

                                            {item.studentEmail}

                                        </TableCell>

                                        <TableCell>

                                            <span
                                                className={`
px-3
py-1
rounded-full

${item.status === "booked"

                                                        ?

                                                        "bg-green-100 text-green-700"

                                                        :

                                                        "bg-red-100 text-red-700"

                                                    }
`}
                                            >

                                                {item.status}

                                            </span>

                                        </TableCell>


                                        <TableCell>

                                            <AlertDialog>

                                                <AlertDialogTrigger
                                                    asChild
                                                >

                                                    <Button
                                                        variant="destructive"
                                                        disabled={
                                                            item.status === "cancelled"
                                                        }
                                                    >

                                                        Cancel

                                                    </Button>

                                                </AlertDialogTrigger>


                                                <AlertDialogContent>

                                                    <AlertDialogHeader>

                                                        <AlertDialogTitle>

                                                            Cancel Booking?

                                                        </AlertDialogTitle>

                                                        <AlertDialogDescription>

                                                            This action cannot be undone.

                                                        </AlertDialogDescription>

                                                    </AlertDialogHeader>


                                                    <AlertDialogFooter>

                                                        <AlertDialogCancel>

                                                            No

                                                        </AlertDialogCancel>


                                                        <AlertDialogAction

                                                            onClick={() =>
                                                                handleCancel(
                                                                    item._id
                                                                )
                                                            }

                                                        >

                                                            Yes

                                                        </AlertDialogAction>

                                                    </AlertDialogFooter>

                                                </AlertDialogContent>

                                            </AlertDialog>

                                        </TableCell>

                                    </TableRow>

                                ))
                        }

                    </TableBody>

                </Table>

            </div>

        </div>

    )

}