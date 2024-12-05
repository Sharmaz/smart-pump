// For migrations, models and seeders. Also db connection.
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import { JSONFilePreset } from 'lowdb/node';

const __dirname = dirname(fileURLToPath(import.meta.url));
const data = readFileSync(join(__dirname, './users.json'));

const file = join(__dirname, './db.json');
const defaultData = JSON.parse(data);
const db = await JSONFilePreset(file, defaultData);
await db.write()

export { db };
