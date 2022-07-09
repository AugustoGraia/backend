// Funcionalidade de registrar o usuário no banco de dados
// Services ira manipular os dados recebidos 
interface UserRequest{ //Passando para uma interface os tipos a receber
    name: string
    email: string
    password: string
}

class CreateUserService{
                    //Recebendo como parametros os tipos
    async execute({name, email, password}: UserRequest){

        console.log(name)

        return { name: name }
    }
}

export{CreateUserService}