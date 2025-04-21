import inquirer from 'inquirer';
import chalk from 'chalk';

export async function runPrompts() {
    const { useCrud } = await inquirer.prompt([
        {
            type: 'confirm',
            name: 'useCrud',
            message: 'Generate full CRUD with MongoDB?',
            default: true
        }
    ]);

    const fields = [];
    while (true) {
        const { field } = await inquirer.prompt([
            {
                type: 'input',
                name: 'field',
                message: 'Enter a field name (or type "no-more" to finish):'
            }
        ]);

        const normalized = field.trim().toLowerCase();
        if (normalized === 'no-more') {
            if (fields.length === 0) {
                console.log(chalk.red('Please add at-least one field.'));
                continue;
            }
            break;
        }

        if (!field.trim()) {
            console.log(chalk.red('Please enter a non-empty field name.'));
            continue;
        }

        fields.push(field.trim());
    }

    return { fields, useCrud };
}
