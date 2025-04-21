const fs = require('fs-extra');
const path = require('path');

async function generateApp(projectPath) {
    const content = `
import express from 'express';
import itemRoutes from './routes/itemRoutes.js';

const app = express();
app.use(express.json());

app.use('/api/items', itemRoutes);

export default app;
`.trim();

    await fs.writeFile(path.join(projectPath, 'app.js'), content);
}
module.exports = { generateApp };