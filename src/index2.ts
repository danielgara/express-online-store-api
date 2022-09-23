import express from 'express';
import routes from './routes/routes';

const port = 4000;
const app = express();

app.use('/', routes);

app.listen(port, () => {
    console.log('The application is listening on port 4000!');
});