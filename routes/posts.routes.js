import { Router } from 'express';
import { Account } from '../database/models';

const router = Router();

// Create account
router.post('/accounts', async (req, res) => {
    try {
        const { username, password, email } = req.body;
  
        const account = await Account.create({
            username,
            password,
            email
        });

        return res.status(201).json({ account });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Get all accounts
router.get('/accounts', async (req, res) => {
    try {
        const accounts = await Account.findAll();
        return res.status(200).json({ accounts });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Get account by id
router.get('/accounts/:id', async (req, res) => {
    try {
        const account = await Account.findOne({
            where: { id: req.params.id }
        });

        if(!account) {
            return res.status(404).json({ message: 'the account with the given id was not found' });
        }

        return res.status(200).json({ account });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Update account
router.patch('/accounts/:id', async (req, res) => {
    try {
        const { username, password, email } = req.body;
        const accounts = await Account.update(
        { username, password, email },
        {
            returning: true,
            where: { id: req.params.id }
        }
        );
    
        if (accounts[0] === 0)
            return res.status(404).json({ message: 'The account with the given id was not found' });
        
        const account = accounts[1][0].dataValues;

        return res.status(200).json({ account });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Delete account
router.delete('/accounts/:id', async (req, res) => {
    try {
        const account = await Account.destroy({ where: { id: req.params.id } });
        if (!account)
            return res.status(404).json({ message: 'The account with the given id was not found' });
    
        return res.status(200).json({ message: 'The account was deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;