import { Router } from 'express';
import Controller from '../controllers/contacts.controllers'

const router = Router();

router.post('/contacts', Controller.createContact);

export default router;