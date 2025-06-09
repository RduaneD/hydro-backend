// handlers/recommendation.handler.js
import axios from 'axios';

export const getRecommendation = async (request, h) => {
  try {
    const { temperature, ph, light } = request.payload;

    // Mapping dari frontend → backend Flask
    const intensityMapping = {
      rendah: 100,
      sedang: 300,
      tinggi: 600
    };

    const payload = {
      suhu: parseFloat(temperature),
      ph_air: parseFloat(ph),
      intensitas_cahaya: intensityMapping[light] || 300 // default sedang
    };

    const response = await axios.post('https://plant-recommendation-production-fc59.up.railway.app/predict', payload);

    return h.response(response.data).code(200);
  } catch (error) {
    console.error('❌ Error forwarding to Flask:', error.message);
    return h.response({
      status: 'ERROR',
      message: 'Failed to get recommendation from model',
      detail: error.message
    }).code(500);
  }
};
