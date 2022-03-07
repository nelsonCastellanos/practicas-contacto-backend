import * as dal from '../../db/dal/userDAL'
import {GetAllModelFilters} from '../../db/dal/types'
import { UserInput, UserOutput } from '../../db/models/userModel'

export const create = (payload: UserInput): Promise<UserOutput> => {
    return dal.create(payload)
}
export const update = (id: number, payload: Partial<UserInput>): Promise<UserOutput> => {
    return dal.update(id, payload)
}
export const getById = (id: number): Promise<UserOutput> => {
    return dal.getById(id)
}
export const deleteById = (id: number): Promise<boolean> => {
    return dal.deleteById(id)
}
export const getAll = (filters: GetAllModelFilters): Promise<UserOutput[]> => {
    return dal.getAll(filters)
}