const fs = require('fs-extra');
const path = require('path');

const { generateModel } = require('./generateModel.js');
const { generateController } = require('./generateController.js');
const { generateRoute } = require('./generateRoute.js');
const { generateDB } = require('./generateDB.js');
const { generateApp } = require('./generateApp.js');
const { generateServer } = require('./generateServer.js');
const { generatePackageJson } = require('./generatePackageJson.js');
const { generateEnv } = require('./generateEnv.js');

async function generateProject(projectPath, fields) {

    const dirs = ['controllers', 'models', 'routes', 'utils'];
    for (const dir of dirs) {
        await fs.ensureDir(path.join(projectPath, dir));
    }

    await generatePackageJson(projectPath);
    await generateEnv(projectPath);
    await generateModel(projectPath, fields);
    await generateController(projectPath);
    await generateRoute(projectPath);
    await generateDB(projectPath);
    await generateApp(projectPath);
    await generateServer(projectPath);
}

module.exports = { generateProject };