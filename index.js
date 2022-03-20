import express from 'express';
import bodyParser from 'body-parser';
import accountRoutes from './routes/accounts.routes';


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/accounts', accountRoutes);

const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.status(200).send({
   message: 'welcome to The Blog API'
}));

app.listen(port, () => console.log(`Server is running on PORT ${port}`));