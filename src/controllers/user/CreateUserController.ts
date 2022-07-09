// Controller ira receber diretamente a requisição, pegar parametros da requisição
// Controller ira comunicar diretamento com as rotas
import {Request, Response} from 'express'; 
import { CreateUserService } from '../../services/user/CreateUserService'

class CreateUserController {
    async handle(req: Request, res: Response){
        const { name, email, password} = req.body

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({
            name,
            email,
            password
        });
        
        return res.json(user)
    }
}

export {CreateUserController} ;