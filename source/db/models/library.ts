import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../config'

export interface LibraryAttributes {
    id: number;
    name: string;
    last_name: string;
    email: string;
    phone: string;
    cell_phone: string;
    address: string;
    user_id: number;
}

export interface LibraryInput extends Optional<LibraryAttributes, 'id' | 'email'> {}
export interface LibraryOutput extends Required<LibraryAttributes> {}

 
class Library extends Model<LibraryAttributes, LibraryInput> implements LibraryAttributes {
    public id!: number
    public name!: string
    public last_name!: string;
    public email!: string;
    public phone!: string;
    public cell_phone!: string;
    public address!: string;
    public user_id!: number;
  
    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}
  
Library.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    cell_phone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true
    },
    user_id:{
        type: DataTypes.INTEGER.UNSIGNED,
        references:{
            model: 'users',
            key: 'id'
        }
    }
    }, {
        timestamps: true,
        sequelize: sequelizeConnection,
        paranoid: true
    }
)

export default Library