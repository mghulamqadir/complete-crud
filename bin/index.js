const { runPrompts } = require('../cli/prompts.js');
const { generateProject } = require('../generator/index.js');
const chalk = require('chalk');
const path = require('path');

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
