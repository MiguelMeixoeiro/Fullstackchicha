import express from 'express';
import cors from 'cors';
import db from './db.js';
import UsersRoutes from './routes/routes.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Configurar el middleware CORS
app.use(cors());
app.use(express.json());
app.use("/",UsersRoutes)



// db.connect((err) => {
//   if (err) {
//     console.error('Error connecting to MySQL:', err);
//   } else {
//     console.log('Connected to MySQL');
//   }
// });

// const tableName = 'clients';

// // Crear la tabla si no existe
// db.query(
//   `CREATE TABLE IF NOT EXISTS ${tableName} (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), lastname VARCHAR(255), email VARCHAR(255), password VARCHAR(255))`,
//   (err) => {
//     if (err) {
//       console.error('Error creating table:', err);
//     }
//   } 
// );



//   // Insertar el nuevo usuario en la base de datos
//   db.query(
//     `INSERT INTO ${tableName} (name, lastname, email, password) VALUES (?, ?, ?, ?)`,
//     [newUser.name, newUser.lastname, newUser.email, newUser.password],
//     (err, result) => {
//       if (err) {
//         console.error('Error registering user:', err);

//         // Manejar error interno del servidor
//         res.status(500).json({ success: false, message: 'Error interno del servidor' });
//       } else {
//         // Obtener el ID generado automáticamente por la base de datos
//         const userId = result.insertId;

//         // Respuesta exitosa
//         res.json({ success: true, message: 'Usuario registrado exitosamente', userId });
//       }
//     }
//   );
// });

try {
  await db.authenticate()
  console.log("esta conectado")
  
} catch (error) {
  console.log(error)
  
}

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
