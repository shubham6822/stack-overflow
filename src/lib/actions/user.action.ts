"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import { CreateUserParams, DeleteUserParams, GetUserByIdParams, UpdateUserParams } from "./shared.types";
import { revalidatePath } from "next/cache";
import Question from "@/database/question.model";

export async function getUserById(params: GetUserByIdParams) {
    try {
        connectToDatabase();

        const { userId } = params;

        const user = await User.findOne({ userId });
        return user;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function createUser(userdata: CreateUserParams) {
    try {
        connectToDatabase();
        const user = await User.create(userdata);
        return user;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function updateUser(params: UpdateUserParams) {
    try {
        connectToDatabase();

        const { clerkId, updateData, path } = params;

        await User.findOneAndUpdate({ clerkId }, updateData, { new: true });
        revalidatePath(path);
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}

export async function deleteUser(params: DeleteUserParams) {
    try {
        connectToDatabase();

        const { clerkId } = params;
        const user = await User.findOneAndDelete({ clerkId });
        if (!user) {
            throw new Error("User not found");
        }
        // const userQuestionsIds = await User.findOne({ clerkId }).distinct("_id");
        await Question.deleteMany({ author: user._id });
        const deletedUser = await User.findByIdAndDelete(user._id);

        return deletedUser;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}