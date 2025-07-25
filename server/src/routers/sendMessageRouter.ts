import express from 'express';
import { sendMessage } from '../controllers/sendMessageController';

const router = express.Router();

// POST /sendMessage — handles user contact form messages
router.post('/', sendMessage);

export default router;