import fs  from 'fs-extra';
import path  from 'path';

export async function generateDB(projectPath) {
  const content = `
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/yourdbname');
    console.log('MongoDB connected');
  } catch (err) {
    console.error('DB connection error:', err);
    process.exit(1);
  }
};

export default connectDB;
`.trim();

  await fs.writeFile(path.join(projectPath, 'utils', 'db.js'), content);
}
