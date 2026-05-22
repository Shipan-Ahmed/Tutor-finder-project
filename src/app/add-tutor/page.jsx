"use client";

import { useState } from "react";
import toast from "react-hot-toast";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

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

import { authClient } from "@/lib/auth-client";
import getJwt from "@/lib/getToken";

export default function AddTutor() {

    const [subject, setSubject] = useState("");
    const [mode, setMode] = useState("");
    const [day, setDay] = useState("");
    const [time, setTime] = useState("");

    const [loading, setLoading] =
        useState(false);

    const {
        data: session,
        isPending
    } = authClient.useSession();

    const user = session?.user;

   

    async function handleSubmit(e) {

        e.preventDefault();

        if (
            !subject ||
            !mode ||
            !day ||
            !time
        ) {
            toast.error(
                "Please fill all dropdown fields"
            );

            return;
        }

        try {

            setLoading(true);

            const form = new FormData(e.target);

            const tutorData = {

                tutorName:
                    form.get("tutorName"),

                photo:
                    form.get("photo"),

                subject,

                availableDays: day,

                availableTime: time,

                hourlyFee: Number(
                    form.get("hourlyFee")
                ),

                totalSlot: Number(
                    form.get("totalSlot")
                ),

                sessionDate:
                    form.get("sessionDate"),

                institution:
                    form.get("institution"),

                experience:
                    form.get("experience"),

                location:
                    form.get("location"),

                teachingMode:
                    mode,

                creatorName:
                    user?.name,

                creatorEmail:
                    user?.email,

                createdAt:
                    new Date()
            };
            const token = await getJwt();
            const response =
                await fetch(
                    "http://localhost:3500/tutors",
                    {
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json",
                            "Authorization": `Bearer ${token}`
                        },

                        body: JSON.stringify(
                            tutorData
                        ),
                    }
                );

            const data =
                await response.json();

            if (data.insertedId) {

                toast.success(
                    "Tutor Added Successfully"
                );

                e.target.reset();

                setSubject("");
                setMode("");
                setDay("");
                setTime("");

            } else {

                toast.error(
                    "Failed to add tutor"
                );

            }

        } catch (error) {

            console.log(error);

            toast.error(
                "Something went wrong"
            );

        } finally {

            setLoading(false);

        }
    }

    if (isPending) {

        return (
            <div className="flex justify-center py-20">

                <span className="loading loading-spinner loading-lg text-blue-600"></span>

            </div>
        )
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">

            <Card className="rounded-3xl shadow-lg border-0">

                <CardHeader>

                    <CardTitle className="text-center text-4xl font-bold">

                        Add Tutor

                    </CardTitle>

                    <p className="text-center text-muted-foreground mt-2">

                        Create tutor profile and publish sessions

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
                                placeholder="https://image-url.com"
                                required
                            />
                        </div>

                        <div>

                            <Label>
                                Subject / Category
                            </Label>

                            <Select
                                onValueChange={setSubject}
                            >

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

                            <Label>
                                Hourly Fee
                            </Label>

                            <Input
                                type="number"
                                name="hourlyFee"
                                placeholder="500"
                                required
                            />

                        </div>

                        <div>

                            <Label>
                                Available Days
                            </Label>

                            <Select
                                onValueChange={setDay}
                            >

                                <SelectTrigger>

                                    <SelectValue placeholder="Choose Day" />

                                </SelectTrigger>

                                <SelectContent>

                                    <SelectItem value="Sat-Mon-Wed">
                                        Sat-Mon-Wed
                                    </SelectItem>

                                    <SelectItem value="Sun-Tue-Thu">
                                        Sun-Tue-Thu
                                    </SelectItem>

                                </SelectContent>

                            </Select>

                        </div>

                        <div>

                            <Label>
                                Available Time Slot
                            </Label>

                            <Select
                                onValueChange={setTime}
                            >

                                <SelectTrigger>

                                    <SelectValue placeholder="Choose Time" />

                                </SelectTrigger>

                                <SelectContent>

                                    <SelectItem value="5PM-6PM">
                                        5PM - 6PM
                                    </SelectItem>

                                    <SelectItem value="7PM-8PM">
                                        7PM - 8PM
                                    </SelectItem>

                                </SelectContent>

                            </Select>

                        </div>

                        <div>

                            <Label>
                                Total Slot
                            </Label>

                            <Input
                                type="number"
                                name="totalSlot"
                                placeholder="10"
                                required
                            />

                        </div>

                        <div>

                            <Label>
                                Session Start Date
                            </Label>

                            <Input
                                type="date"
                                name="sessionDate"
                                required
                            />

                        </div>

                        <div>

                            <Label>
                                Institution
                            </Label>

                            <Input
                                name="institution"
                                placeholder="University"
                                required
                            />

                        </div>

                        <div>

                            <Label>
                                Location
                            </Label>

                            <Input
                                name="location"
                                placeholder="Dhaka"
                                required
                            />

                        </div>

                        <div className="md:col-span-2">

                            <Label>
                                Teaching Mode
                            </Label>

                            <Select
                                onValueChange={setMode}
                            >

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

                            <Label>
                                Experience
                            </Label>

                            <Textarea
                                name="experience"
                                className="min-h-32"
                                placeholder="5 years teaching experience..."
                                required
                            />

                        </div>

                        <div className="md:col-span-2">

                            <Button
                                disabled={loading}
                                className="w-full h-12 rounded-2xl bg-blue-600 hover:bg-indigo-600"
                            >

                                {
                                    loading
                                        ? "Adding Tutor..."
                                        : "Add Tutor"
                                }

                            </Button>

                        </div>

                    </form>

                </CardContent>

            </Card>

        </div>
    );
}