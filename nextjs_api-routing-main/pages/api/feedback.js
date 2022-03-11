import fs from 'fs';
import path from 'path';

export function buildFeedBackPath() {
  return path.join(process.cwd(), 'data', 'feedback.json');
}

export function extractFeedback(filePath) {
  const fileData = fs.readFileSync(filePath);
  return JSON.parse(fileData);
}

function handler(req, res) {
  if (req.method === 'POST') {
    const { email, text } = req.body; // Already parsed by NextJS

    const newFeedback = {
      email,
      text,
      id: new Date().toISOString(),
    };

    // store that in a database or in a file
    const filePath = buildFeedBackPath();
    const data = extractFeedback(filePath);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: 'Success!', feedback: newFeedback });
  }

  if (req.method === 'GET') {
    const filePath = buildFeedBackPath();
    const data = extractFeedback(filePath);
    res.status(200).json({ feedback: data });
  }
}

export default handler;
