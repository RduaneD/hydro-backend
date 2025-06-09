// routes/plants.routes.js
import * as PlantsHandler from '../handlers/plantsHandler.js';

const plantsRoutes = [
  {
    method: 'GET',
    path: '/plants',
    handler: PlantsHandler.getAllPlants,
    options: {
      description: 'Ambil semua tanaman',
      tags: ['api', 'plants']
    }
  },
  {
    method: 'GET',
    path: '/plants/{id}',
    handler: PlantsHandler.getPlantById,
    options: {
      description: 'Ambil detail tanaman berdasarkan ID',
      tags: ['api', 'plants']
    }
  },
  {
    method: 'POST',
    path: '/plants',
    handler: PlantsHandler.createPlant,
    options: {
      description: 'Buat tanaman baru',
      tags: ['api', 'plants']
    }
  },
  {
    method: 'PUT',
    path: '/plants/{id}',
    handler: PlantsHandler.updatePlant,
    options: {
      description: 'Perbarui data tanaman',
      tags: ['api', 'plants']
    }
  },
  {
    method: 'DELETE',
    path: '/plants/{id}',
    handler: PlantsHandler.deletePlant,
    options: {
      description: 'Hapus tanaman berdasarkan ID',
      tags: ['api', 'plants']
    }
  }
];

export default plantsRoutes;
