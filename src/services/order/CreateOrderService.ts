import prismaClient from "../../prisma";

interface Order{
    table: number;
    name: string;
}

class CreateOrderService {
    async execute({table, name}: Order){

        const order = await prismaClient.order.create({
            data:{
            table: table,
            name:name
            }
        })

        return order;

    }
}

export { CreateOrderService }