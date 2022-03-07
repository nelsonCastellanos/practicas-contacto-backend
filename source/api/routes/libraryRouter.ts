import { Router, Request, Response} from 'express'
import { GetAllModelFilters } from '../../db/dal/types'
import { LibraryController } from '../controllers/library';
import { CreateLibraryDTO } from '../dto/library/CreateLibraryDTO'
import { UpdateLibraryDTO } from '../dto/library/UpdateLibraryDTO'

export class LibraryRouter{
  public router: Router;
  public controller: LibraryController = new LibraryController();

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
      const payload:UpdateLibraryDTO = req.body
    
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
      const payload:CreateLibraryDTO = req.body
      const result = await this.controller.create(payload)
      return res.status(200).send(result)
    })
    
    this.router.get('/', async (req: Request<{},{},{},GetAllModelFilters>, res: Response) => {
      const filters:GetAllModelFilters = req.query
      const results = await this.controller.getAll(filters)
      return res.status(200).send(results)
    })
  }
}