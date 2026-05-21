import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import MyTutorsTable from "@/Component/MyTutorsTable";

const MyTutorsPage = async() => {

    const session =
        await auth.api.getSession({
            headers: await headers()
        });

    const user = session?.user;

    const res = await fetch(
        `http://localhost:3500/my-tutors?email=${user?.email}`,
        {
            cache: "no-store"
        }
    );

    const tutors = await res.json();
    return (
        <div className=" py-10 px-4">
            <h1 className="text-4xl font-bold mb-8">
                My Tutors
            </h1>

            <MyTutorsTable
                initialTutors={tutors}
            />
        </div>
    );
};

export default MyTutorsPage;