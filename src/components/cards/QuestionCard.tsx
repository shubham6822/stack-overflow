interface QuestionProps {
    _id: string;
    title: string;
    tags: {
        _id: string;
        name: string;
    }[];
    author: {
        _id: string;
        name: string;
        picture?: string;
        clerkId?: string;
    };
    upvotes: number;
    views: number;
    answers: Array<object>;
    createdAt: Date;
    clerkId?: string | null;
}
export default function QuestionCard({
    clerkId,
    _id,
    title,
    tags,
    author,
    upvotes,
    views,
    answers,
    createdAt
}: QuestionProps) {
    return (
        <div>QuestionCard</div>
    )
}
