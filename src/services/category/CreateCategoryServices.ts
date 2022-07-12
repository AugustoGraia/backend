import prismaClient from "../../prisma";

interface CategoryRequest{
    name:string
}

class CreateCategoryServices{
    async execute({name}: CategoryRequest){
        //Verificando se recebe alguma categoria
        if(name === ''){
            throw new Error("Nome invalido")
        }
        //Criando a categoria no banco
        const category = await prismaClient.category.create({
            data:{
                name:name,
            },
            select:{
                id:true,
                name:true,
            }
        })
        return category;
    }
}

export { CreateCategoryServices }