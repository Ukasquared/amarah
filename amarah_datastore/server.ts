import { databaseConfig } from './src/config';
import { express_app } from './src/config/express';
import express, { Request, Response } from 'express';
import { runMongoConnection } from './src/config/database';
import { User } from './src/repository';



(async () => {
    const app = express();
    express_app(app);
    runMongoConnection();
    
    app.post('/book-a-quotation', async (req: Request, res: Response) => {
        const user = new User();
        await user.createUser(req.body)
        if (!user) {
           throw new Error('unable to book quotation')
        }
         res.send('you have successfully booked a quotation')
    })
    app.listen(databaseConfig.SERVER_PORT, () => {
        console.log('app is listening on port ' + databaseConfig.SERVER_PORT)
    })
})()