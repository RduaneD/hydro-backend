import Progress from '../models/ProgressModel.js';

const getAllProgress = async (request, h) => {
  const progress = await Progress.find().sort({ createdAt: -1 });
  return h.response(progress);
};

const getProgressById = async (request, h) => {
  const { id } = request.params;
  const found = await Progress.findById(id);
  if (!found) {
    return h.response({ message: 'Progress not found' }).code(404);
  }
  return h.response(found);
};

const addProgress = async (request, h) => {
  const { image, title, description, date } = request.payload;

  const newProgress = new Progress({ image, title, description, date });
  const saved = await newProgress.save();
  return h.response(saved).code(201);
};

const deleteProgress = async (request, h) => {
  const { id } = request.params;
  await Progress.findByIdAndDelete(id);
  return h.response({ message: 'Progress deleted' });
};

const updateProgress = async (request, h) => {
  const { id } = request.params;
  const { image, title, description, date } = request.payload;

  const updated = await Progress.findByIdAndUpdate(
    id,
    { image, title, description, date },
    { new: true }
  );

  return h.response(updated);
};

export default {
  getAllProgress,
  getProgressById, // ✅ penting agar bisa ambil berdasarkan ID
  addProgress,
  deleteProgress,
  updateProgress
};
