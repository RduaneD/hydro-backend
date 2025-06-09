import SavedArticle from '../models/SavedArticleModel.js';

// ✅ GET semua artikel tersimpan
export const getSavedArticles = async (request, h) => {
  const articles = await SavedArticle.find().sort({ createdAt: -1 });
  return h.response(articles);
};

// ✅ POST simpan artikel
export const saveArticle = async (request, h) => {
  const { id, title, image, excerpt } = request.payload;

  const existing = await SavedArticle.findOne({ id });
  if (existing) return h.response({ message: 'Sudah disimpan' }).code(200);

  const newArticle = new SavedArticle({ id, title, image, excerpt });
  await newArticle.save();
  return h.response({ message: 'Artikel disimpan' }).code(201);
};

// ✅ DELETE hapus artikel
export const deleteArticle = async (request, h) => {
  const { id } = request.payload;
  await SavedArticle.findOneAndDelete({ id });
  return h.response({ message: 'Artikel dihapus' });
};

// ✅ GET satu artikel untuk cek status
export const checkIfSaved = async (request, h) => {
  const { id } = request.params;
  const existing = await SavedArticle.findOne({ id });
  return h.response({ isSaved: !!existing });
};
