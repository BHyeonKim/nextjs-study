import path from 'path';
import fs from 'fs';

export function buildEmailDataPath() {
  return path.join(process.cwd(), 'data', 'users.json');
}

export function extractData(filePath) {
  const fileData = fs.readFileSync(filePath);
  return JSON.parse(fileData);
}

export function buildCommentDataPath() {
  return path.join(process.cwd, 'data', 'comments.json');
}
