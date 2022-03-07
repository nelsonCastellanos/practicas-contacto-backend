import * as service from '.././../services/libraryService'
import * as mapper from './mapper'
import { LibraryAttributes } from '../../../db/models/library'
import { CreateLibraryDTO } from '../../dto/library/CreateLibraryDTO'
import { UpdateLibraryDTO } from '../../dto/library/UpdateLibraryDTO'
import { GetAllModelFilters } from '../../../db/dal/types'

export class LibraryController{
    
    public async create (payload: CreateLibraryDTO): Promise<LibraryAttributes>{
        return mapper.toLibrary(await service.create(payload))
    }

    public async update  (id: number, payload: UpdateLibraryDTO): Promise<LibraryAttributes>{
        return mapper.toLibrary(await service.update(id, payload))
    }

    public async getById  (id: number): Promise<LibraryAttributes>{
        return mapper.toLibrary(await service.getById(id))
    }

    public async deleteById (id: number): Promise<Boolean>{
        const isDeleted = await service.deleteById(id)
        return isDeleted
    }
    
    public async getAll (filters: GetAllModelFilters): Promise<LibraryAttributes[]>{
        return (await service.getAll(filters)).map(mapper.toLibrary)
    }
}
