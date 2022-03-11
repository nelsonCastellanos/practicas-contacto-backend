import * as library from '../../db/dal/libraryDAL'
import {GetAllModelFilters} from '../../db/dal/types'
import { LibraryInput, LibraryOutput } from '../../db/models/library'

export const create = (payload: LibraryInput): Promise<LibraryOutput> => {
    return library.create(payload)
}
export const update = (id: number, payload: Partial<LibraryInput>): Promise<LibraryOutput> => {
    return library.update(id, payload)
}
export const getById = (id: number): Promise<LibraryOutput> => {
    return library.getById(id)
}
export const deleteById = (id: number): Promise<boolean> => {
    return library.deleteById(id)
}
export const getAll = (filters: GetAllModelFilters): Promise<LibraryOutput[]> => {
    return library.getAll(filters)
}

export const getAllByUser = (userId:number): Promise<LibraryOutput[]> => {
    return library.getAllByUser(userId)
}