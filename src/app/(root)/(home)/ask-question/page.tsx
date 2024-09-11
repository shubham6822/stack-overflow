import Question from "@/components/forms/Question";
import { getUserById } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Page() {
    const { userId } = auth();
    if (!userId) redirect("/sign-in");

    const mongouser = await getUserById({ userId });

    return (
        <div>
            <h1 className="h1-bold text-dark100_light900">Ask a question</h1>
            <div className="mt-9">
                <Question mongoUserId={mongouser} />
            </div>
        </div>
    )
}
