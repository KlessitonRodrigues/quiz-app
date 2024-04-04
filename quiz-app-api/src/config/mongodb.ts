import mongoose from 'mongoose';

import { env } from './env';

export const databaseConnect = async () => {
  await mongoose.connect(env.MONGODBD);
  console.log('DATABASE CONNECTED!');
};
