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
    host: process.env.HOST || '0.0.0.0', // Agar bisa diakses publik (Railway)
    routes: {
      cors: {
        origin: [
          'https://hydrosmart-frontend-jmtwh2wa0-nevlt-riduans-projects.vercel.app',
          'https://hydrosmart-frontend.vercel.app',
          'http://localhost:5173'
        ],
        headers: ['Accept', 'Content-Type'],
        credentials: true
      }
    }
  });

  // ✅ Global handler untuk preflight CORS (OPTIONS)
  server.ext('onPreResponse', (request, h) => {
    const response = request.response;

    if (request.method === 'options') {
      const headers = {
        'Access-Control-Allow-Origin': 'https://hydrosmart-frontend.vercel.app',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Accept',
        'Access-Control-Allow-Credentials': 'true'
      };
      return h.response('OK').code(200).headers(headers);
    }

    if (response.isBoom) {
      response.output.headers['Access-Control-Allow-Origin'] = 'https://hydrosmart-frontend.vercel.app';
      response.output.headers['Access-Control-Allow-Credentials'] = 'true';
    } else if (response.header) {
      response.header('Access-Control-Allow-Origin', 'https://hydrosmart-frontend.vercel.app');
      response.header('Access-Control-Allow-Credentials', 'true');
    }

    return h.continue;
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
