import { Module } from '@nestjs/common';

import { QuizService } from './quiz.service';

@Module({
  providers: [QuizService],
})
export class QuizModule {}
