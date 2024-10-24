import { DataTypes } from 'sequelize';
import sequelize from '../config/database';

// Define the PurchaseOrder model without createdAt and updatedAt fields
const PurchaseOrder = sequelize.define('PurchaseOrder', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  poNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  totalAmount: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: false, // Disable automatic timestamps
});

// Export the model so it can be imported elsewhere
export default PurchaseOrder;
