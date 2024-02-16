import mysql from 'mysql2';
import { Sequelize } from 'sequelize';

// Configurar la conexión a MySQL
const db = new Sequelize("chicharrika","root","Soyyomiguel1!",{
    host: 'localhost',
    dialect:"mysql",
  });
  export default db;