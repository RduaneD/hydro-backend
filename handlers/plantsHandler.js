import Plant from '../models/PlantModel.js';

export const getAllPlants = async (request, h) => {
  try {
    const plants = await Plant.find();
    return h.response(plants).code(200);
  } catch (error) {
    return h.response({ error: 'Gagal mengambil data tanaman' }).code(500);
  }
};

export const getPlantById = async (request, h) => {
  try {
    const { id } = request.params;
    const plant = await Plant.findById(id);

    if (!plant) {
      return h.response({ error: 'Tanaman tidak ditemukan' }).code(404);
    }

    return h.response(plant).code(200);
  } catch (error) {
    return h.response({ error: 'Gagal mengambil detail tanaman' }).code(500);
  }
};

export const createPlant = async (request, h) => {
  try {
    const { name, type, description } = request.payload;

    const newPlant = new Plant({
      name,
      type,
      description,
    });

    const savedPlant = await newPlant.save();
    return h.response(savedPlant).code(201);
  } catch (error) {
    return h.response({ error: 'Gagal menambahkan tanaman' }).code(500);
  }
};

export const updatePlant = async (request, h) => {
  try {
    const { id } = request.params;
    const { name, type, description } = request.payload;

    const updatedPlant = await Plant.findByIdAndUpdate(
      id,
      { name, type, description },
      { new: true }
    );

    if (!updatedPlant) {
      return h.response({ error: 'Tanaman tidak ditemukan' }).code(404);
    }

    return h.response(updatedPlant).code(200);
  } catch (error) {
    return h.response({ error: 'Gagal memperbarui tanaman' }).code(500);
  }
};

export const deletePlant = async (request, h) => {
  try {
    const { id } = request.params;
    const deleted = await Plant.findByIdAndDelete(id);

    if (!deleted) {
      return h.response({ error: 'Tanaman tidak ditemukan' }).code(404);
    }

    return h.response({ message: 'Tanaman berhasil dihapus' }).code(200);
  } catch (error) {
    return h.response({ error: 'Gagal menghapus tanaman' }).code(500);
  }
};
