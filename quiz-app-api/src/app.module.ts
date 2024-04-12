import { Module } from '@nestjs/common';

import { QuizController } from './controllers/quiz.controller';
import { QuizModule } from './modules/quiz.module';
import { QuizService } from './services/quiz.service';

@Module({
  imports: [QuizModule],
  controllers: [QuizController],
  providers: [QuizService],
})
export class AppModule {}
