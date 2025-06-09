// diagnosis/routes/diagnosisRoutes.js
import { diagnosePlant } from '../handlers/diagnosisHandler.js';

const diagnosisRoutes = [
  {
    method: 'POST',
    path: '/diagnosis',
    options: {
      payload: {
        output: 'stream',
        parse: true,
        allow: 'multipart/form-data',
        maxBytes: 5 * 1024 * 1024,
        multipart: true,
      },
      handler: diagnosePlant,
    },
  },
];

export default diagnosisRoutes;
