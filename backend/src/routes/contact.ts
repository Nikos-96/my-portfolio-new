import { Router } from 'express';
import { submitContact } from '../controllers/contactController';
import { verifyRecaptcha } from '../middleware/recaptcha';
const router = Router();

router.post('/', verifyRecaptcha('contact'), submitContact);

export default router;