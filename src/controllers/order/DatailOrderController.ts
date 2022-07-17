import { json, Request, Response } from 'express';
import { DatailOrderService } from '../../services/order/DatailOrderService' 

class DatailOrderController{
    async handle(req: Request, res: Response){
        const order_id = req.query.order_id as string

        const datailOrder = new DatailOrderService();

        const orders = await datailOrder.execute({
            order_id
        })

        return res.json(orders)

    }

}

export { DatailOrderController }