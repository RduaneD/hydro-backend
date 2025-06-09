import mongoose from 'mongoose';

const savedArticleSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: String,
  image: String,
  excerpt: String
}, { timestamps: true });

const SavedArticle = mongoose.model('SavedArticle', savedArticleSchema);

export default SavedArticle;
