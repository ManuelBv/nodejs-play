import express, { Express } from 'express';

const app: Express = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/api/data', (req, res) => {
  try {
    const body = req.body || {};
    const { name, message } = body;

    if (!name || !message) {
      return res.status(400).json({ error: 'name and message are required' });
    }

    res.json({
      success: true,
      received: { name, message },
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default app;
