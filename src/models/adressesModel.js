import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Users from './usersModel';

const Adresses = sequelize.define(
  'adresses',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    zipCode: {
      field: 'zip_code',
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    street: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    district: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    numberForget: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'number_forget',
    },
    idUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_user',
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

Adresses.belongsTo(Users, {
  as: 'user',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_user',
    name: 'idUser',
  },
});

export default Adresses;
