import { Module } from '@nestjs/common';

import { QuizService } from 'src/services/quiz.service';

@Module({
  providers: [QuizService],
})
export class QuizModule {}
