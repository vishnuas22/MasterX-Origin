// 📡 backend/server.js

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sessionRoutes from './routes/sessionState.js'; // 📁 Make sure this exists

// 🧠 Load environment variables
dotenv.config();

// 🚀 Initialize app
const app = express();
const PORT = process.env.PORT || 5000;

// 🌐 Middleware
app.use(cors({
  origin: '*', // Update to your frontend domain in production
  credentials: true,
}));
app.use(express.json());

// 🛣️ API Routes
app.use('/api/session', sessionRoutes);

// 🌍 Default route
app.get('/', (req, res) => {
  res.send('🌌 MasterX AI Backend Active');
});

// 🚦 Start server
app.listen(PORT, () => {
  console.log(`⚡ MasterX backend running on http://localhost:${PORT}`);
});
