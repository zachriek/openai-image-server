import express from 'express';
import { generateImage } from '../controllers/openaiController.js';

const router = express.Router();

router.post('/generate-image', generateImage);

export default router;
