import crypto from 'crypto';
import multer from 'multer';

import { extname, resolve } from 'path';

//Configurando o envio de imagem / destino 
export default { //local que ira salvar a imagem 
    upload(folder: string){
        return{
            storage: multer.diskStorage({
                destination: resolve(__dirname, '..', '..', folder),
                filename: (request, file, callback) =>{
                    const fileHash = crypto.randomBytes(16).toString("hex") //Não salvar duas fotos com o mesmo nome
                    const fileName = `${fileHash}-${file.originalname}` //Pegando o nome da foto

                    return callback(null, fileName)
                }
            })
        }
    }
}