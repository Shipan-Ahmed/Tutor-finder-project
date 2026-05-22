"use client";

import TutorCard from "@/Component/TutorCard";
import { useEffect, useState } from "react";

const TutorPage = () => {

    const [tutors, setTutors] =
        useState([]);

    const [loading, setLoading] =
        useState(true);

    const [search, setSearch] =
        useState("");

    const [startDate, setStartDate] =
        useState("");

    const [endDate, setEndDate] =
        useState("");


    useEffect(() => {

        async function loadTutors() {

            try {

                setLoading(true);

                const res =
                    await fetch(
                        `http://localhost:3500/tutors?search=${search}&startDate=${startDate}&endDate=${endDate}`
                    );

                const data =
                    await res.json();

                setTutors(data);

            }

            catch (error) {

                console.log(error);

            }

            finally {

                setLoading(false);

            }

        }

        loadTutors();

    },
        [search,
            startDate,
            endDate]
    );


    return (

        <div className="max-w-7xl mx-auto px-4 py-10">

            <h2 className="text-4xl font-bold mb-8">

                All Tutors

            </h2>


            {/* search + filter */}

            <div className="flex flex-col md:flex-row gap-4 mb-10">

                <input
                    type="text"
                    placeholder="Search tutor name..."
                    value={search}
                    onChange={(e) =>
                        setSearch(
                            e.target.value
                        )
                    }
                    className="
                    border
                    rounded-xl
                    px-4
                    py-3
                    flex-1"
                />


                <input
                    type="date"
                    value={startDate}
                    onChange={(e) =>
                        setStartDate(
                            e.target.value
                        )
                    }
                    className="
                    border
                    rounded-xl
                    px-4
                    py-3"
                />


                <input
                    type="date"
                    value={endDate}
                    onChange={(e) =>
                        setEndDate(
                            e.target.value
                        )
                    }
                    className="
                    border
                    rounded-xl
                    px-4
                    py-3"
                />

            </div>


            {loading ? (

                <div className="text-center py-20">

                    <span className="
                    loading
                    loading-spinner
                    loading-lg
                    "></span>

                </div>

            ) : (

                <div className="
                grid
                grid-cols-1
                md:grid-cols-2
                lg:grid-cols-3
                gap-8">

                    {
                        tutors.map(
                            tutor =>

                                <TutorCard
                                    key={tutor._id}
                                    tutor={tutor}
                                />
                        )
                    }

                </div>

            )}

        </div>

    );

};

export default TutorPage;