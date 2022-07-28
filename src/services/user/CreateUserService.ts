// Funcionalidade de registrar o usuário no banco de dados
// Services ira manipular os dados recebidos 
import prismaClient from '../../prisma';
import { hash } from 'bcryptjs';

//Passando para uma interface os tipos a receber
interface UserRequest{  
    name: string
    email: string
    password: string
}

class CreateUserService{
        //Recebendo como parametros os tipos
    async execute({name, email, password}: UserRequest){

       //Verificar se email foi recebido 
       if(!email){
        throw new Error("Email incorreto")
       }

       //Verificar se o email já está cadastrado no banco
       const emaiExistente = await prismaClient.user.findFirst({
        where:{
            email:email
        }
       })

       if(emaiExistente){
        throw new Error("Email já existente")
       }
       //Criptografando a senha
       const passwordHash = await hash(password, 8)

       //Cadastrando usuário no banco
       const user = await prismaClient.user.create({
        data:{
            name: name,
            email: email,
            password: passwordHash,
        },select:{
            id: true,
            name: true,
            email: true,
        }
       })

        return { user }
    }
}

export {CreateUserService}



