
import {Op} from 'sequelize'
import {GetAllModelFilters} from './types'
import UserModel, { UserInput, UserOutput } from '../models/userModel'

export const create = async (payload: UserInput): Promise<UserOutput> => {
    const user = await UserModel.create(payload)
    return user
}

export const update = async (id: number, payload: Partial<UserInput>): Promise<UserOutput> => {
    const user = await UserModel.findByPk(id)
    if (!user) {
        // @todo throw custom error
        throw new Error('not found')
    }
    const update = await (user as UserModel).update(payload)
    return update
}

export const getById = async (id: number): Promise<UserOutput> => {
    const user = await UserModel.findByPk(id)
    if (!user) {
        // @todo throw custom error
        throw new Error('not found')
    }
    return user
}


export const getByEmail = async (email: string): Promise<UserOutput> => {
    const user = await UserModel.findOne({where: {email: email}})
    if (!user) {
        // @todo throw custom error
        throw new Error('not found')
    }
    return user
}

export const deleteById = async (id: number): Promise<boolean> => {
    const deleted = await UserModel.destroy({
        where: {id}
    })
    return !!deleted
}

export const getAll = async (filters?: GetAllModelFilters): Promise<UserOutput[]> => {
    return UserModel.findAll({
        where: {
            ...(filters?.isDeleted && {deletedAt: {[Op.not]: null}})
        },
        ...((filters?.isDeleted || filters?.includeDeleted) && {paranoid: true})
    })
}