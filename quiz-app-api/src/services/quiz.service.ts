import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import mongoose from 'mongoose';

import { Quiz, QuizSchema } from 'src/schemas/quiz.schema';
import { toDocument } from 'src/utils/mongo/convertObj';

@Injectable()
export class QuizService {
  private quizModel = mongoose.model('quiz', QuizSchema);

  async findAll(quiz?: Partial<Quiz>, limit?: string): Promise<Quiz[]> {
    const { title } = quiz;
    const findQuery = this.quizModel.find();

    if (title) findQuery.find({ title });
    if (limit) findQuery.limit(Number(limit));
    return findQuery.exec();
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
      await this.create(questions);
    }
    return true;
  }
}
