import express, { Request, Response, NextFunction } from 'express'; //Para as resquisições
import 'express-async-errors'; //Tratamento de erro
import cors from 'cors';
import path from 'path';

import { router } from './routes';

const app = express();
//Tipo de formato de retorn
app.use(express.json());
//Para qualquer URL / IP ter acesso a aplicação
app.use(cors());
//Rotas
app.use(router);
//Middlewar para expor a imagem para uso no front
app.use(
    '/files',
    express.static(path.resolve(__dirname, '..', 'tmp'))
)


//Middleware para tratar erros
app.use((err: Error, req: Request, res:Response, next: NextFunction)=>{
    if(err instanceof Error){
        //Se for um instancia do tipo erro
        return res.status(400).json({
            erro: err.message
        })
    }else{ 
        return res.status(500).json({
            status: "Error",
            message: "Internal server error"
        })
    }
     
})

//Porta 
app.listen(3333, ()=> console.log("SERVIDOR ONLINE!!"));