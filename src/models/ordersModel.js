import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Adresses from './adressesModel';
import Payments from './paymentsModel';
import Users from './usersModel';
import Cupoms from './cupomsModel';

const Orders = sequelize.define(
  'orders',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    status: {
      type: DataTypes.STRING(255),
      defaultValue: 'criado',
      allowNull: false,
    },
    total: {
      type: DataTypes.NUMERIC,
      allowNull: false,
    },
    totalDiscount: {
      field: 'total_discount',
      type: DataTypes.NUMERIC,
      allowNull: false,
      defaultValue: 0,
    },
    idUserCostumer: {
      field: 'id_user_costumer',
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    idUserDeliver: {
      field: 'id_user_deliver',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idAdress: {
      field: 'id_adress',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idPayment: {
      field: 'id_payment',
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    idCupom: {
      field: 'id_cupom',
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

Orders.belongsTo(Users, {
  as: 'user',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_user_costumer',
    name: 'idUserCustomer',
  },
});

Orders.belongsTo(Users, {
  as: 'users',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_user_deliver',
    name: 'idUserDeliver',
  },
});

Orders.belongsTo(Adresses, {
  as: 'adress',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_adress',
    name: 'idAdress',
  },
});

Orders.belongsTo(Payments, {
  as: 'payment',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_user_costumer',
    name: 'idPayment',
  },
});

Orders.belongsTo(Cupoms, {
  as: 'cupom',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_cupom',
    name: 'idCupom',
  },
});

export default Orders;
