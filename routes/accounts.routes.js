import { Router } from 'express';
import Controller from '../controllers/accounts.controllers'

const router = Router();

// Create account
router.post('/accounts', Controller.createAccount);


// Get all accounts
router.get('/accounts', Controller.getAllAccount);


// Get account by id
router.get('/accounts/:id', Controller.getAccountbyID);


// Update account
router.patch('/accounts/:id', Controller.updateAccount);


// Delete account
router.delete('/accounts/:id', Controller.deleteAccount);



export default router;