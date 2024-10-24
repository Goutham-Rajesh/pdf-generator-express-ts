import { Sequelize } from 'sequelize';

// Hard-coded database configuration for MySQL connection
const sequelize = new Sequelize(
  'mydb',   // Database name
  'root',                 // MySQL user
  'pass@word1',          // MySQL password
  {
    host: 'localhost',    // MySQL host
    port: 3306,           // MySQL port (default is 3306, change if needed)
    dialect: 'mysql',     // Database dialect
  }
);

export default sequelize;

