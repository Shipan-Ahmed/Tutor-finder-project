"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import toast from "react-hot-toast";

export default function AddTutor() {
    const [subject, setSubject] = useState("");
    const [mode, setMode] = useState("");
    const [day, setDay] = useState("");
    const [time, setTime] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = new FormData(e.target);

        const tutorData = {
            tutorName: form.get("tutorName"),
            photo: form.get("photo"),

            subject,

            availableDays: day,
            availableTime: time,

            hourlyFee: Number(form.get("hourlyFee")),

            totalSlot: Number(form.get("totalSlot")),

            sessionDate: form.get("sessionDate"),

            institution: form.get("institution"),
            experience: form.get("experience"),

            location: form.get("location"),

            teachingMode: mode,

            // from logged user
            creatorName: "user.displayName",
            creatorEmail: "user.email",

            createdAt: new Date(),
        };

        console.log(tutorData);

        const response = await fetch("http://localhost:3500/tutors", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(tutorData),
            
        })
        const Data = await response.json();
        console.log(Data);

        // axiosSecure.post("/tutors", tutorData)


        toast.success("Tutor Added Successfully")
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <Card className="rounded-3xl shadow-md border-0 ">
                <CardHeader>
                    <CardTitle className="text-center text-3xl font-bold">
                        Add Tutor
                    </CardTitle>

                    <p className="text-center text-muted-foreground">
                        Create a tutor profile and publish sessions
                    </p>
                </CardHeader>

                <CardContent>
                    <form
                        onSubmit={handleSubmit}
                        className="grid md:grid-cols-2 gap-6"
                    >
                        <div>
                            <Label>Tutor Name</Label>
                            <Input
                                name="tutorName"
                                placeholder="John Doe"
                                required
                            />
                        </div>

                        <div>
                            <Label>Photo URL</Label>
                            <Input
                                name="photo"
                                placeholder="imgbb/postimage link"
                                required
                            />
                        </div>

                        <div>
                            <Label>Subject / Category</Label>

                            <Select onValueChange={setSubject}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Subject" />
                                </SelectTrigger>

                                <SelectContent>
                                    <SelectItem value="Mathematics">
                                        Mathematics
                                    </SelectItem>

                                    <SelectItem value="Physics">
                                        Physics
                                    </SelectItem>

                                    <SelectItem value="Chemistry">
                                        Chemistry
                                    </SelectItem>

                                    <SelectItem value="Programming">
                                        Programming
                                    </SelectItem>

                                    <SelectItem value="English">
                                        English
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div>
                            <Label>Hourly Fee</Label>

                            <Input
                                type="number"
                                name="hourlyFee"
                                placeholder="500 tk/hr"
                                required
                            />
                        </div>

                        <div>
                            <Label>Available Days</Label>

                            <Select onValueChange={setDay}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Choose Day" />
                                </SelectTrigger>

                                <SelectContent>
                                    <SelectItem value="sat-mon-wed">
                                        sat-mon-wed
                                    </SelectItem>

                                    <SelectItem value="sun-tue-thu">
                                        sun-tue-thu
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div>
                            <Label>Available Time Slot</Label>

                            <Select onValueChange={setTime}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Choose Time Slot" />
                                </SelectTrigger>

                                <SelectContent>
                                    <SelectItem value="5pm-6pm">
                                        5 PM - 6 PM
                                    </SelectItem>

                                    <SelectItem value="7pm-8pm">
                                        7 PM - 8 PM
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div>
                            <Label>Total Slot</Label>

                            <Input
                                type="number"
                                name="totalSlot"
                                placeholder="10"
                                required
                            />
                        </div>

                        <div>
                            <Label>Session Start Date</Label>

                            <Input
                                type="date"
                                name="sessionDate"
                                required
                            />
                        </div>

                        <div>
                            <Label>Institution</Label>

                            <Input
                                name="institution"
                                placeholder="University / School"
                                required
                            />
                        </div>

                        <div>
                            <Label>Location</Label>

                            <Input
                                name="location"
                                placeholder="Area / City"
                                required
                            />
                        </div>

                        <div className="md:col-span-2">
                            <Label>Teaching Mode</Label>

                            <Select onValueChange={setMode}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Choose Mode" />
                                </SelectTrigger>

                                <SelectContent>
                                    <SelectItem value="Online">
                                        Online
                                    </SelectItem>

                                    <SelectItem value="Offline">
                                        Offline
                                    </SelectItem>

                                    <SelectItem value="Both">
                                        Both
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="md:col-span-2">
                            <Label>Experience</Label>

                            <Textarea
                                name="experience"
                                placeholder="5 years teaching experience..."
                                className="min-h-32"
                                required
                            />
                        </div>

                        <div className="md:col-span-2">
                            <Button
                                className="w-full h-12 rounded-2xl bg-blue-600 hover:bg-indigo-600"
                            >
                                Add Tutor
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}