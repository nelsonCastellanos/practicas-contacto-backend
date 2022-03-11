import { LibraryAttributes, LibraryOutput } from '../../../db/models/library'

export const toLibrary = (library: LibraryOutput): LibraryAttributes => {
    return {
        id: library.id,
        name: library.name,
        last_name: library.last_name,
        email: library.email,
        phone: library.phone,
        cell_phone: library.cell_phone,
        address: library.address,
        user_id: library.user_id
    }
}