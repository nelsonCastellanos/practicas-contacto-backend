import { UserAttributes, UserOutput } from '../../../db/models/userModel'

export const toModel = (library: UserOutput): UserAttributes => {
    return {
        id: library.id,
        name: library.name,
        email: library.email,
        password: library.password
    }
}