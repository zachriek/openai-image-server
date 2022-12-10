import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config';
import openaiRoutes from './routes/openaiRoutes.js';

const app = express();
const port = process.env.PORT || 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/v1', (req, res) => res.status(200).json({ message: 'hello' }));
app.use('/api/v1/openai', openaiRoutes);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
