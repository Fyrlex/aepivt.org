import mongoose from 'mongoose';

export const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { dbName: 'AEData' });
  } catch (error) {
    console.error(error);
  }
};
