import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

import { toJSObject } from 'src/utils/mongo/convertObj';

import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Get('/reset')
  async resetQuizList() {
    console.log('RESET');

    return await this.quizService.resetQuizCollection();
  }

  @Get(':id')
  async quizItem(@Param() params) {
    const { id } = params;
    return toJSObject(await this.quizService.findOne(id));
  }

  @Delete(':id')
  async deleleQuiz(@Param() params) {
    const { id } = params;
    return toJSObject(await this.quizService.delete(id));
  }

  @Get()
  async quizList(@Query() query) {
    const { title, limit } = query;
    const items = await this.quizService.findAll({ title }, limit);
    return items.map(toJSObject);
  }

  @Post()
  async createQuiz(@Body() body) {
    return toJSObject(await this.quizService.create(body));
  }

  @Patch()
  async updateQuiz(@Body() body) {
    return toJSObject(await this.quizService.findOneAndUpdate(body.id, body));
  }
}
