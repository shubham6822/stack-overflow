"use server";

import { connectToDatabase } from "../mongoose";

export const createQuestion = async (question) => {
    try {
        connectToDatabase();
    } catch (error) {
        console.error('Error creating question: ', error);
    }
}