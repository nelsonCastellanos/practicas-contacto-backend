import { Router, Request, Response} from 'express'
import { GetAllModelFilters } from '../../db/dal/types'
import { UserController } from '../controllers/user';
import { CreateUserDTO } from '../dto/user/CreateUserDTO';
import { UpdateUserDTO } from '../dto/user/UpdateUserDTO';
import * as jwt from "jsonwebtoken";
import config from '../../configs/utils/config';

export class UserRouter{
  public router: Router;
  public controller: UserController = new UserController();

  constructor(){
    this.router = Router();
    this.routes();
  }

  routes(){
    this.router.get(':/id', async (req: Request, res: Response) => {
      const id = Number(req.params.id)
      const result = await this.controller.getById(id)
      return res.status(200).send(result)
    })
    
    this.router.put('/:id', async (req: Request, res: Response) => {
      const id = Number(req.params.id)
      const payload:UpdateUserDTO = req.body
    
      const result = await this.controller.update(id, payload)
      return res.status(201).send(result)
    })
    
    this.router.delete('/:id', async (req: Request, res: Response) => {
      const id = Number(req.params.id)
    
      const result = await this.controller.deleteById(id)
      return res.status(204).send({
          success: result
      })
    })
    
    this.router.post('/', async (req: Request, res: Response) => {
      const payload:CreateUserDTO = req.body
      const user = await this.controller.create(payload)
      const token = jwt.sign(
        { userId: user.id, username: user.name },
        config.jwtSecret,
        { expiresIn: "1h" }
      );
      return res.status(200).send({"token": token});
    })
    
    this.router.get('/', async (req: Request<{},{},{},GetAllModelFilters>, res: Response) => {
      const filters:GetAllModelFilters = req.query
      const results = await this.controller.getAll(filters)
      return res.status(200).send(results)
    })

    this.router.post('/login', async (req: Request, res: Response) => {
      const payload:CreateUserDTO = req.body
      const user = await this.controller.getLogin(payload)
      const token = jwt.sign(
        { userId: user.id, username: user.name },
        config.jwtSecret,
        { expiresIn: "1h" }
      );
      return res.status(200).send({"token": token});
    })
  }
}