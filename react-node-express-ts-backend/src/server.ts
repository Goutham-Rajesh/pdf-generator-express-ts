import app from './app';
import sequelize from './config/database';

// Sync models with the database and start the server
sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log('Server is running on port 3001');
  });
}).catch((error) => {
  console.error('Unable to connect to the database:', error);
});
