import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Orders from './ordersModel';
import Products from './productsModel';

const OrdersProducts = sequelize.define(
  'orders_products',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    priceProducts: {
      field: 'price_products',
      type: DataTypes.NUMERIC,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false,
    },
    idOrder: {
      field: 'id_order',
      unique: true,
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idProduct: {
      field: 'id_product',
      unique: true,
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

OrdersProducts.belongsTo(Orders, {
  as: 'order',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_order',
    name: 'idOrder',
  },
});

OrdersProducts.belongsTo(Products, {
  as: 'product',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_product',
    name: 'idProduct',
  },
});

export default OrdersProducts;
