import fs  from 'fs-extra';
import path  from 'path';

import { generateModel }  from './generateModel.js';
import { generateController }  from './generateController.js';
import { generateRoute }  from './generateRoute.js';
import { generateDB }  from './generateDB.js';
import { generateApp }  from './generateApp.js';
import { generateServer }  from './generateServer.js';
import { generatePackageJson }  from './generatePackageJson.js';
import { generateEnv }  from './generateEnv.js';

export async function generateProject(projectPath, fields) {

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
