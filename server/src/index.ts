import express, { Request, Response } from 'express';
import cors from 'cors';
import SendMessageRouter from './routers/sendMessageRouter';

const app = express();
const PORT = process.env.PORT || 3001;

// ✅ Enable CORS for frontend access (adjust origin as needed)
app.use(cors({
  origin: ['http://localhost:3000', 'https://zohebhasan.com'],
  methods: ['POST', 'GET'],
  credentials: false,
}));

// ✅ Parse JSON request bodies
app.use(express.json());

// ✅ Routes
app.use('/sendMessage', SendMessageRouter);

// ✅ Test route
app.get('/', (_req: Request, res: Response) => {
  res.send('Hello from TypeScript + Express!');
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
