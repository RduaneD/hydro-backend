import {
  getSavedArticles,
  saveArticle,
  deleteArticle,
  checkIfSaved
} from '../handlers/savedArticleHandler.js';

const savedArticlesRoutes = [
  {
    method: 'GET',
    path: '/api/saved-articles',
    handler: getSavedArticles,
  },
  {
    method: 'POST',
    path: '/api/saved-articles',
    handler: saveArticle,
  },
  {
    method: 'DELETE',
    path: '/api/saved-articles',
    handler: deleteArticle,
  },
  {
    method: 'GET',
    path: '/api/saved-articles/{id}',
    handler: checkIfSaved,
  },
];

export default savedArticlesRoutes;
