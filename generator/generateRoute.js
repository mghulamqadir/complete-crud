import fs  from 'fs-extra';
import path  from 'path';

export async function generateRoute(projectPath) {
  const content = `
import express from 'express';
import {
  createItem,
  getItems,
  getItem,
  updateItem,
  deleteItem
} from '../controllers/item.controller.js';

const router = express.Router();

router.post('/', createItem);
router.get('/', getItems);
router.get('/:id', getItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);

export default router;
  `.trim();

  await fs.writeFile(path.join(projectPath, 'routes', 'item.routes.js'), content);
}
