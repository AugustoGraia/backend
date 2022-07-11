//Fazendo a autenticação do login
import prismaClient from "../../prisma";
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface AuthRequest{
    email: string;
    password: string;
}

class AuthUserService{
    async execute({email, password}:AuthRequest){
        //Verificar se o email existe dentro do banco.
        const user = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if(!user){
            throw new Error("Usuário inválido")
        }

        //Verificando se a senha esta correta
        const passwordMatch = await compare(password, user.password)
        if(!passwordMatch){
            throw new Error("Senha inválida")
        }

        //Gerando um token JWT e devolvendo os dados do usuário

        const token = sign(
            {
                name: user.name,    //Payload
                email: user.email
            },
            process.env.JWT_SECRET, //Chave de acesso
            {
                subject: user.id,   //Token expira em 30 dias
                expiresIn: '30d'
            }
        )
        
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            token: token
        }
    }
}

export { AuthUserService };