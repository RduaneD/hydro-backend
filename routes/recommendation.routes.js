import { getRecommendation } from '../handlers/recommendation.handler.js';

const recommendationRoutes = [
  {
    method: 'POST',
    path: '/api/recommendation',
    handler: getRecommendation
  }
];

export default recommendationRoutes;
