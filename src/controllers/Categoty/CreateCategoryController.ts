import { Request, Response } from 'express';
import { CreateCategotyServices } from '../../services/category/CreateCategotyServices';

class CreateCategoryController{
    async handle(req: Request, res: Response){
        const { name } = req.body; 

        const createCategotyServices = new CreateCategotyServices();

        const category = await createCategotyServices.execute({
            name
        });

        return res.json(category);

    }
}

export { CreateCategoryController }