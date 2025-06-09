import mongoose from 'mongoose';

const plantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    type: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    collection: 'plants'
  }
);

const Plant = mongoose.model('Plant', plantSchema);
export default Plant;
