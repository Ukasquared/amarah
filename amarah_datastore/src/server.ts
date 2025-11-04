
import { databaseConfig } from './config';
import { express_app } from './config/express';
import express, { Application, Request, Response } from 'express';
import { runMongoConnection } from './config/database';
import { User } from './repository';



(async () => {
    const app: Application = express();
    express_app(app);
    await runMongoConnection();
    console.log('app started')
    
    app.get('/', (req: Request, res: Response) => {
        res.send({server:'server is running'})
    })
    
    app.post('/book-a-quotation', async (req: Request, res: Response) => {
         const user = new User();
        const newUser = await user.createUser(req.body)
        if (!user) {
           throw new Error('unable to book quotation')
        }
        console.log(newUser);
         res.send({message: 'you have successfully booked a quotation'})
    });

    console.log('app continues running');
    
    app.listen(databaseConfig.SERVER_PORT, () => {
        console.log('app is listening on port ' + databaseConfig.SERVER_PORT)
    })
})()