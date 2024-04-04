import { config } from 'dotenv';

config();

export const env = {
  MONGODBD: process.env.MONGODB,
};
