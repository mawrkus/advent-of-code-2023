import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

export default readFileSync(
  join(dirname(fileURLToPath(import.meta.url)), 'sample.txt'),
  'utf8'
);
