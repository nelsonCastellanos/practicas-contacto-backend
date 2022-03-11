
import {Op} from 'sequelize'
import {GetAllModelFilters} from './types'
import Library, { LibraryInput, LibraryOutput } from '../models/library'

export const create = async (payload: LibraryInput): Promise<LibraryOutput> => {
    const library = await Library.create(payload)
    return library
}

export const update = async (id: number, payload: Partial<LibraryInput>): Promise<LibraryOutput> => {
    const library = await Library.findByPk(id)
    if (!library) {
        // @todo throw custom error
        throw new Error('not found')
    }
    const updated = await (library as Library).update(payload)
    return updated
}

export const getById = async (id: number): Promise<LibraryOutput> => {
    const library = await Library.findByPk(id)
    if (!library) {
        // @todo throw custom error
        throw new Error('not found')
    }
    return library
}

export const deleteById = async (id: number): Promise<boolean> => {
    const deleted = await Library.destroy({
        where: {id}
    })
    return !!deleted
}

export const getAll = async (filters?: GetAllModelFilters): Promise<LibraryOutput[]> => {
    return Library.findAll({
        where: {
            ...(filters?.isDeleted && {deletedAt: {[Op.not]: null}})
        },
        ...((filters?.isDeleted || filters?.includeDeleted) && {paranoid: true})
    })
}

export const getAllByUser = async (userId: number): Promise<LibraryOutput[]> => {
    return Library.findAll({
        where: {
            user_id: userId
        }
    })
}