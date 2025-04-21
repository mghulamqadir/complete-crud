const fs = require('fs-extra');
const path = require('path');

async function generateServer(projectPath) {
  const content = `
import dotenv from 'dotenv';
dotenv.config();

import connectDB from './utils/db.js';
import app from './app.js';

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(\`🚀 Server running on port http://localhost:\${process.env.PORT}\`);
});
`.trim();

  const target = path.join(projectPath, 'server.js');
  await fs.writeFile(target, content);
  await fs.chmod(target, 0o755);
}

module.exports = { generateServer };