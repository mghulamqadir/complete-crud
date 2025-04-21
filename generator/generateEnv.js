const fs = require('fs-extra');
const path = require('path');

async function generateEnv(projectPath) {
  const content = `
# .env — rename to .env in production
PORT=5000
MONGO_URI=mongodb://localhost:27017/yourdbname
  `.trim() + "\n";

  await fs.writeFile(path.join(projectPath, ".env"), content);
}

module.exports = { generateEnv };