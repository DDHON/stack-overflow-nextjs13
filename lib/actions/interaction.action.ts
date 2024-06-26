"use server";

import { connectToDatabase } from "../mongoose";
import { ViewQuestionParams } from "./shared.types";
import Question from "@/database/question.model";
import Interaction from "@/database/interaction.model";

export async function viewQuestion(params: ViewQuestionParams) {
  try {
    connectToDatabase();
    const { questionId, userId } = params;

    // update view count for the question
    await Question.findByIdAndUpdate(questionId, { $inc: { views: 1 } });

    if (userId) {
      const existingIntercation = await Interaction.findOne({
        user: userId,
        action: "view",
        question: questionId,
      });
      if (existingIntercation) return;
    }

    // create interaction
    await Interaction.create({
      user: userId,
      action: "view",
      question: questionId,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}
