import { Button } from '@/components/ui/button';
import { CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Card } from '@heroui/react';
import { Badge } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TutorCard = ({ tutor }) => {
    const { tutorName, subject, photo, hourlyFee, totalSlots, _id } = tutor;
    console.log("id : ", _id);
    return (
        <Card className="relative p-4 bg-white shadow-lg rounded">
            <Image
                src={photo}
                alt={tutorName}
                width={200}
                height={200}
                fill={false}
                className=" z-20  w-full object-cover mx-auto rounded-t"
            />
            <CardHeader>
                <CardAction>
                    <Badge variant="secondary" className='px-2 py-2'>Featured</Badge>
                </CardAction>
                <CardTitle>{tutor.tutorName}</CardTitle>
                <CardDescription>
                    {tutor.subject}
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <Link href={`/tutors/${_id}`}>
                    <Button className="w-full bg-blue-600 hover:bg-indigo-500">Book Session</Button>
                </Link>
            </CardFooter>
        </Card>
    );
};

export default TutorCard;