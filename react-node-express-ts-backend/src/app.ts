import express from 'express';
import poRoutes from './routes/poRoutes';
import cors from 'cors';

const app = express();
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.use('/api', poRoutes);

export default app;
