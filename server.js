import Hapi from '@hapi/hapi';
import dotenv from 'dotenv';
import connectDB from './database.js';
import routes from './routes/index.js';

dotenv.config();

// Koneksi ke MongoDB
await connectDB();

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST || '0.0.0.0', // ⬅️ Agar bisa diakses publik (Railway)
    routes: {
      cors: {
        origin: [
          'https://hydrosmart-frontend-jmtwh2wa0-nevlt-riduans-projects.vercel.app',
          'http://localhost:5173'
        ],
        headers: ['Accept', 'Content-Type'],
        credentials: true
      }
    }
  });

  // Route dasar
  server.route({
    method: 'GET',
    path: '/',
    handler: () => ({
      message: 'HydroSmart API is running 🚀'
    })
  });

  // Register semua route
  server.route(routes);

  await server.start();
  console.log('✅ Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});

init();
