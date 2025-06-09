// diagnosis/models/DiagnosisPayloadSchema.js
import Joi from 'joi';

const DiagnosisPayloadSchema = Joi.object({
  file: Joi.any().required(),
});

export { DiagnosisPayloadSchema };
