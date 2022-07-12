import prismaClient from "../../prisma";

interface CategotyRequest{
    name:string
}

class CreateCategotyServices{
    async execute({name}: CategotyRequest){
        
        if(name === ''){
            throw new Error("Nome invalido")
        }

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

export { CreateCategotyServices }