import express from 'express';
import bodyParser from 'body-parser';
import accountRoutes from './routes/accounts.routes';
import contactRoutes from './routes/contacts.routes';


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', accountRoutes);
app.use('/', contactRoutes);

const port = process.env.PORT || 4000;

app.get('/', (req, res) => res.status(200).send({
   message: 'welcome to The Blog API'
}));

app.listen(port, () => console.log(`Server is running on PORT ${port}`));