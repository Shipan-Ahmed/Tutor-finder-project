"use client";

import TutorCard from "@/Component/TutorCard";
import { useEffect, useState } from "react";
import { FaSearch, FaUndo } from "react-icons/fa";
import { Button } from '@/components/ui/button';

const TutorPage = () => {

    const [tutors, setTutors] =
        useState([]);

    const [loading, setLoading] =
        useState(true);

    // input values
    const [query, setQuery] =
        useState("");

    const [filterStart, setFilterStart] =
        useState("");

    const [filterEnd, setFilterEnd] =
        useState("");

    // actual search values
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

    }, [
        search,
        startDate,
        endDate
    ]);


    function handleSearch() {

        setSearch(query);

        setStartDate(
            filterStart
        );

        setEndDate(
            filterEnd
        );

    }


    function handleReset() {

        setQuery("");

        setFilterStart("");

        setFilterEnd("");

        setSearch("");

        setStartDate("");

        setEndDate("");

    }



    return (

        <div className="
        max-w-7xl
        mx-auto
        px-4
        py-10">

            <h1 className="
            text-4xl
            font-bold
            mb-8">

                All Tutors

            </h1>


            <div className="
            bg-base-200
            p-5
            rounded-3xl
            shadow
            mb-10">

                <div className="
                flex
                flex-col
                lg:flex-row
                gap-4">

                    <input
                        type="text"
                        placeholder="Search tutor name..."
                        value={query}
                        onChange={(e) =>
                            setQuery(
                                e.target.value
                            )
                        }
                        className="
                        input
                        input-bordered
                        flex-1"
                    />

                    <input
                        type="date"
                        value={filterStart}
                        onChange={(e) =>
                            setFilterStart(
                                e.target.value
                            )
                        }
                        className="
                        input
                        input-bordered"
                    />


                    <input
                        type="date"
                        value={filterEnd}
                        onChange={(e) =>
                            setFilterEnd(
                                e.target.value
                            )
                        }
                        className="
                        input
                        input-bordered"
                    />


                    <Button
                        onClick={handleSearch}
                        className="
                        btn
                        bg-blue-600
                        hover:bg-blue-700
                        text-white"
                        flex gap-2 
                    >

                        <span> <FaSearch /></span>

                        <span>Search</span>

                    </Button>


                    <Button
                        onClick={handleReset}
                        className="
                        btn
                        btn-outline"
                    >

                        <FaUndo />

                        Reset

                    </Button>

                </div>

            </div>



            {loading ?

                (

                    <div className="
                    text-center
                    py-20">

                        <span className="
                        loading
                        loading-spinner
                        loading-lg">
                        </span>

                    </div>

                )

                :

                tutors.length === 0 ?

                    (

                        <div className="
                        text-center
                        py-20
                        bg-base-200
                        rounded-3xl">

                            <h2 className="
                            text-3xl
                            font-bold">

                                No Tutors Found

                            </h2>

                            <p className="
                            text-slate-500
                            mt-3">

                                Try another search
                                or filter

                            </p>

                        </div>

                    )

                    :

                    (

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

                    )

            }

        </div>

    );

};

export default TutorPage;