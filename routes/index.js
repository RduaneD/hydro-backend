// routes/index.js
import plantsRoutes from './plants.routes.js';
import usersRoutes from './users.routes.js';
import progressRoutes from './progress.routes.js';
// import remindersRoutes from './reminders.routes.js'; // bisa ditambahkan nanti
import diagnosisRoutes from './diagnosisRoutes.js'; // tambahan fitur diagnosis
import savedArticlesRoutes from './savedArticleRoutes.js'; // ⬅️ tambahkan ini
import recommendationRoutes from './recommendation.routes.js';

const routes = [
  ...plantsRoutes,
  ...usersRoutes,
  ...progressRoutes,
  // ...remindersRoutes,
  ...diagnosisRoutes,
  ...savedArticlesRoutes, // ⬅️ daftarkan ke dalam array utama
  ...recommendationRoutes,
];

export default routes;
