import express from 'express';
import MainRouter from './routes/MainRouter';

class Index {
    public static start(){
        const port = 4000;
        const app = express();

        app.use('/', MainRouter.initialize());

        app.listen(port, () => {
            console.log('The application is listening on port 4000!');
        });
    }
}

Index.start();