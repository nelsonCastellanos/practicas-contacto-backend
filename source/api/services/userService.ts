import * as dal from '../../db/dal/userDAL'
import {GetAllModelFilters} from '../../db/dal/types'
import { UserInput, UserOutput } from '../../db/models/userModel'
import PasswordHash from '../../services/utils/password'

export const create = async(payload: UserInput): Promise<UserOutput> => {
    await PasswordHash.cryptPassword(payload.password, async(error:Error, hash:string)=>{
        if(!error){
            payload.password = hash;
        }
    })
    return dal.create(payload);
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

export const login = async(payload: UserInput): Promise<UserOutput> => {
    const user = await dal.getByEmail(payload.email)
    const res = await PasswordHash.comparePassword(payload.password,user.password);
    if(res){
        return user;
    }
    throw new Error('Error on authentication')
}