"use client";

import { useState } from "react";

import UpdateTutorModal
    from "./UpdateTutorModal";

import DeleteTutorModal
    from "./DeleteTutorModal";

export default function MyTutorsTable({
    initialTutors
}) {

    const [tutors, setTutors] =
        useState(initialTutors);

    if (tutors.length === 0) {

        return (

            <div className="bg-white p-16 rounded-3xl text-center shadow">

                <h2 className="text-3xl font-bold">
                    No Tutors Found
                </h2>

                <p className="text-slate-500 mt-4">
                    You haven't created any tutors yet.
                </p>

            </div>

        )

    }

    return (

        < div className="bg-white rounded-3xl shadow overflow-hidden" >

        

            <div className="overflow-x-auto">

                <table className="w-full">

                    <thead className="bg-slate-50 border-b">

                        <tr className="text-left">

                            <th className="px-8 py-5 min-w-[280px]">
                                Tutor
                            </th>

                            <th className="px-8 py-5 min-w-[150px]">
                                Subject
                            </th>

                            <th className="px-8 py-5 min-w-[120px]">
                                Fee
                            </th>

                            <th className="px-8 py-5 min-w-[120px]">
                                Slots
                            </th>

                            <th className="px-8 py-5 min-w-[220px] text-center">
                                Actions
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {
                            tutors.map((tutor) => (

                                <tr
                                    key={tutor._id}
                                    className="border-b hover:bg-slate-50 transition"
                                >

                                    <td className="px-8 py-6">

                                        <div className="flex items-center gap-4">

                                            <img
                                                src={tutor.photo}
                                                alt=""
                                                className="w-14 h-14 rounded-full object-cover border"
                                            />

                                            <div>

                                                <h3 className="font-semibold text-base">
                                                    {tutor.tutorName}
                                                </h3>

                                                <p className="text-sm text-slate-500">
                                                    {tutor.location}
                                                </p>

                                            </div>

                                        </div>

                                    </td>

                                    <td className="px-8 py-6">

                                        <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm">

                                            {tutor.subject}

                                        </span>

                                    </td>

                                    <td className="px-8 py-6 font-medium">

                                        ${tutor.hourlyFee}

                                    </td>

                                    <td className="px-8 py-6">

                                        <span className="px-4 py-2 rounded-full bg-green-100 text-green-700">

                                            {tutor.totalSlot}

                                        </span>

                                    </td>

                                    <td className="px-8 py-6">

                                        <div className="flex justify-center gap-3">

                                            <UpdateTutorModal
                                                tutor={tutor}
                                                tutors={tutors}
                                                setTutors={setTutors}
                                            />

                                            <DeleteTutorModal
                                                id={tutor._id}
                                                tutors={tutors}
                                                setTutors={setTutors}
                                            />

                                        </div>

                                    </td>

                                </tr>

                            ))
                        }

                    </tbody>

                </table>

            </div>
        </div >


    )

}