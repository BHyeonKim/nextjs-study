import { connectDatabase, insertDocument } from '../../helpers/db-utils';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email || !email.includes('@')) {
      res.status(422).json({ message: 'Invalid email address.' });
      return;
    }

    let client;

    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: 'Connecting to the database failed.' });
      return;
    }

    try {
      await insertDocument(client, 'newsletter', { email });
    } catch (error) {
      res.status(500).json({ message: 'Inserting data failed.' });
      return;
    } finally {
      client.close();
    }

    res.status(201).json({ message: 'email info sent successfully!' });
  }
}

export default handler;
