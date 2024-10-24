import { Router } from 'express';
import { createPO, getAllPOs } from '../controllers/poController';

const router = Router();

// Route to create a PO
router.post('/pos', createPO);

// Route to get all POs
router.get('/pos', getAllPOs);

export default router;
