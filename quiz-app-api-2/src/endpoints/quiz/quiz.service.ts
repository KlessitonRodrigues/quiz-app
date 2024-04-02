import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import mongoose from 'mongoose';

import { toDocument } from 'src/utils/mongo/convertObj';

import { Quiz, QuizSchema } from './quiz.schema';

@Injectable()
export class QuizService {
  private quizModel = mongoose.model('quiz', QuizSchema);

  async findAll(): Promise<Quiz[]> {
    return this.quizModel.find().exec();
  }

  async findOne(id: string): Promise<Quiz> {
    return this.quizModel.findById(id).exec();
  }

  async findOneAndUpdate(id: string, quiz: Quiz): Promise<Quiz> {
    return this.quizModel.findByIdAndUpdate(id, toDocument(quiz), { new: true });
  }

  async create(quiz: Quiz): Promise<Quiz> {
    return this.quizModel.create(quiz);
  }

  async update(id: string, quiz: Quiz): Promise<Quiz> {
    return this.quizModel.findByIdAndUpdate(id, quiz, { new: true });
  }

  async delete(id: string): Promise<Quiz> {
    return this.quizModel.findByIdAndDelete(id);
  }

  async resetQuizCollection(): Promise<boolean> {
    const json = readFileSync('./src/utils/json/quizData.json').toString();
    const quizzes = JSON.parse(json)?.quizzes;
    await this.quizModel.deleteMany();

    for (const quiz of quizzes) {
      const questions = quiz.questions?.map(question => ({
        title: quiz.title,
        icon: quiz.icon,
        ...question,
      }));

      console.log(questions);

      await this.create(questions);
    }
    return true;
  }
}
