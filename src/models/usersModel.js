import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';

const User = sequelize.define(
  'users',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false,
    },
    cpf: {
      type: DataTypes.STRING(14),
      unique: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(16),
      allowNull: false,
    },
    passwordHash: {
      field: 'password_hash',
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    token: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    role: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: 'customer',
    },
    cart: {
      type: DataTypes.JSONB,
    },
    email: {
      type: DataTypes.STRING(255),
      unique: true,
      allowNull: false,
    },
    recuperation: {
      type: DataTypes.STRING(255),
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

export default User;
