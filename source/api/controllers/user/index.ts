import * as service from '../../services/userService'
import * as mapper from './mapper'
import { UserAttributes, UserInput } from '../../../db/models/userModel'
import { GetAllModelFilters } from '../../../db/dal/types'
import { CreateUserDTO } from '../../dto/user/CreateUserDTO'
import { UpdateUserDTO } from '../../dto/user/UpdateUserDTO'

export class UserController{
    
    public async create (payload: CreateUserDTO): Promise<UserAttributes> {
        return mapper.toModel(await service.create(payload))
    }
    
    public async update  (id: number, payload: UpdateUserDTO): Promise<UserAttributes> {
        return mapper.toModel(await service.update(id, payload))
    }
    
    public async getById  (id: number): Promise<UserAttributes> {
        return mapper.toModel(await service.getById(id))
    }
    
    public async deleteById (id: number): Promise<Boolean> {
        const isDeleted = await service.deleteById(id)
        return isDeleted
    }
    
    public async getAll (filters: GetAllModelFilters): Promise<UserAttributes[]> {
        return (await service.getAll(filters)).map(mapper.toModel)
    }
}

