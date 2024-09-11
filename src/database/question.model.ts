import { model, models, Schema } from "mongoose";

interface IQuestion extends Document {
    title: string;
    content: string;
    tags: Schema.Types.ObjectId[];
    views: number;
    answers: Schema.Types.ObjectId[];
    upvotes: Schema.Types.ObjectId[];
    downvotes: Schema.Types.ObjectId[];
    author: Schema.Types.ObjectId;
    createdAt: Date;

}

const QuestionSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
    views: { type: Number, default: 0 },
    answers: [{ type: Schema.Types.ObjectId, ref: 'Answer' }],
    upvotes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    downvotes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now }
});

const Question = models.Question || model('Question', QuestionSchema);

export default Question;