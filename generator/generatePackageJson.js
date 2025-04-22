import fs  from 'fs-extra';
import path  from 'path';

export async function generatePackageJson(projectPath) {
    const pkg = {
        name: path.basename(projectPath),
        version: "1.0.0",
        description: "An auto-generated Express + MongoDB CRUD app",
        type: "module",
        main: "server.js",
        scripts: {
            server: "node server.js",
            start: "nodemon server.js"
        },
        dependencies: {
            express: "^5.1.0",
            mongoose: "^8.13.2",
            dotenv: "^16.5.0"
        },
        devDependencies: {
            nodemon: "^3.1.9"
        },
        author: "",
        license: "ISC"
    };

    const json = JSON.stringify(pkg, null, 2) + "\n";
    await fs.writeFile(path.join(projectPath, "package.json"), json);
}
