import { Request, Response} from 'express';
import { DetailUserServices } from '../../services/user/DetailUserServices';

class DetailUserController{
    async handle(req: Request, res: Response){

        const detailUserServices = new DetailUserServices();

        const user = await detailUserServices.execute();

        return res.json(user);
    }
}

export { DetailUserController }