import { runPrompts } from '../cli/prompts.js';
import { generateProject } from '../generator/index.js';
import chalk from 'chalk';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(chalk.green.bold('\n Express CRUD Generator'));

const run = async () => {
    const { fields, useCrud } = await runPrompts();

    if (!useCrud) {
        console.log(chalk.yellow('No CRUD selected. Exiting...'));
        return;
    }

    const outputPath = path.join(process.cwd(), 'crud-app');
    await generateProject(outputPath, fields);

    console.log(chalk.green(`\nProject created at ${outputPath}`));
};

run();