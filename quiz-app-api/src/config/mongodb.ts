import mongoose from 'mongoose';

// mongodb://mongodb-container:27017/your-database-name
const uri = 'mongodb://mongo:27017/quiz-app';

export const databaseConnect = async () => {
  await mongoose.connect(uri);
  console.log('Database connected successfully!');
};
