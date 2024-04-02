import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Quiz extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  icon: string;

  @Prop({ required: true })
  question: string;

  @Prop({ required: true })
  options: string[];

  @Prop({ required: true })
  answer: string;
}

export const QuizSchema = SchemaFactory.createForClass(Quiz);
