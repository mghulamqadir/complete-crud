# Complete CRUD

A CLI tool to generate Express + MongoDB CRUD applications with a single command.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## About

`complete-crud` is a command-line interface (CLI) tool designed to simplify the creation of full-stack CRUD (Create, Read, Update, Delete) applications using Express.js and MongoDB. It automates the setup of a project structure, including models, controllers, routes, and database configuration, allowing developers to quickly bootstrap a RESTful API.

This tool is ideal for developers who want to prototype or build production-ready CRUD applications with minimal setup.

## Features

- Generates a complete Express + MongoDB CRUD application
- Supports custom schema fields for MongoDB models
- Creates RESTful API endpoints for Create, Read, Update, and Delete operations
- Includes pre-configured MongoDB connection and environment variables
- Produces a modular project structure with separate models, controllers, routes, and utilities
- Built with ES Modules for modern JavaScript development
- Interactive CLI prompts for easy configuration

## Installation

To install and use the `complete-crud` CLI tool globally, follow these steps:

1. Install the package via npm:
   ```bash
   npm install -g complete-crud
   ```

2. Verify the installation:
   ```bash
   complete-crud --version
   ```

Alternatively, you can use it without global installation by running it with `npx`:

```bash
npx complete-crud
```

## Usage

1. Run the CLI tool in your terminal:
   ```bash
   complete-crud
   ```

2. Follow the interactive prompts:
   - Confirm whether to generate a full CRUD application with MongoDB.
   - Enter field names for your MongoDB model (e.g., `name`, `email`). Type `no-more` when finished.

3. The tool will generate a new project in a `crud-app` directory in your current working directory.

4. Navigate to the generated project:
   ```bash
   cd crud-app
   ```

5. Install dependencies:
   ```bash
   npm install
   ```

6. Start the development server:
   ```bash
   npm start
   ```

7. The API will be available at `http://localhost:5000/api/items`. Use a tool like Postman or cURL to test the endpoints:
   - `POST /api/items` - Create a new item
   - `GET /api/items` - List all items
   - `GET /api/items/:id` - Get a single item
   - `PUT /api/items/:id` - Update an item
   - `DELETE /api/items/:id` - Delete an item

**Note**: Ensure MongoDB is running locally or provide a valid `MONGO_URI` in the `.env` file.

## Contributing

Contributions are welcome! To contribute to `complete-crud`:

1. Fork the repository:
   ```bash
   git clone https://github.com/mghulamqadir/complete-crud.git
   ```

2. Create a new branch:
   ```bash
   git checkout -b feature/YourFeatureName
   ```

3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```

4. Push to the branch:
   ```bash
   git push origin feature/YourFeatureName
   ```

5. Open a pull request on the [GitHub repository](https://github.com/mghulamqadir/complete-crud).

Please ensure your code follows the existing style and includes appropriate tests.

## License

This project is licensed under the ISC License. See the `LICENSE` file for more information.