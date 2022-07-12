import { Request, Response, NextFunction} from 'express';
import { verify } from 'jsonwebtoken';

interface Payload{
    sub: string
}

export function isAuthenticated(req: Request, res: Response, next: NextFunction){

//Recebendo token

const authToken = req.headers.authorization;

//Verificando se tem o token
if (!authToken){
    return res.status(401).end();
}
    const[, token] = authToken.split(" ")

        //Validando token
    try {
        const { sub } = verify(
            token,
            process.env.JWT_SECRET
        )as Payload

        //Injetando dentro do request o user ad do usuário logado
        //Recuperar o id do token e colocar dentro de uma variavel user_id dentro do req
        req.user_id = sub; 

        return next();
    }catch(err){
        res.status(401).end();
    }

}
