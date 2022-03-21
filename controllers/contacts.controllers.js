import { Contact } from '../database/models';

export default {
createContact: async (req, res) => {
        try {
            const { name, email, message } = req.body;
    
            const contact = await Contact.create({
                name,
                email,
                message
            });

            return res.status(201).json({ contact });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
}
}