import TutorCard from '@/Component/TutorCard';
import React from 'react';

const getTutors = async () => {
    const res = await fetch("http://localhost:3500/tutors");
    if (!res.ok) {
        throw new Error("Failed to fetch tutors");
    }
    return res.json();
}

const TutorPage = async () => {
    const tutors = await getTutors();
    return (
        <div className='flex flex-col gap-4 mt-10'>
            <h2 className='text-2xl font-bold'>All Tutors</h2>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" >
                {
                    tutors.map(tutor => <TutorCard key={tutor._id} tutor={tutor} />)
                }
            </div>
        </div>
    );
};

export default TutorPage;