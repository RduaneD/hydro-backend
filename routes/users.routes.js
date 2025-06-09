// routes/users.routes.js
import * as UsersHandler from '../handlers/usersHandler.js';

const usersRoutes = [
  {
    method: 'POST',
    path: '/register',
    handler: UsersHandler.registerUser,
    options: {
      description: 'Registrasi pengguna baru',
      tags: ['api', 'auth']
    }
  },
  {
    method: 'POST',
    path: '/login',
    handler: UsersHandler.loginUser,
    options: {
      description: 'Login pengguna',
      tags: ['api', 'auth']
    }
  }
];

export default usersRoutes;
