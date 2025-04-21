import fs from 'fs-extra';
import path from 'path';

function getSchema(fields) {
    return fields.map(f => `  ${f}: { type: String, required: true },`).join('\n');
}

export async function generateModel(projectPath, fields) {
    const content = `
import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
${getSchema(fields)}
}, { timestamps: true });

export default mongoose.model('Item', itemSchema);
  `.trim();

    await fs.writeFile(path.join(projectPath, 'models', 'Item.model.js'), content);
}
