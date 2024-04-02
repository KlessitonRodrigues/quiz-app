import { Module } from '@nestjs/common';

import { QuizController } from './endpoints/quiz/quiz.controller';
import { QuizModule } from './endpoints/quiz/quiz.module';
import { QuizService } from './endpoints/quiz/quiz.service';

@Module({
  imports: [QuizModule],
  controllers: [QuizController],
  providers: [QuizService],
})
export class AppModule {}
