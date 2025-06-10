import progressHandler from '../handlers/progressHandler.js';

const routes = [
  {
    method: 'GET',
    path: '/progress',
    handler: progressHandler.getAllProgress
  },
  {
    method: 'POST',
    path: '/progress',
    handler: progressHandler.addProgress
  },
  {
  method: 'GET',
  path: '/progress/{id}',
  handler: progressHandler.getProgressById
  },
  {
    method: 'DELETE',
    path: '/progress/{id}',
    handler: progressHandler.deleteProgress
  },
  {
    method: 'PUT',
    path: '/progress/{id}',
    handler: progressHandler.updateProgress
  }
];

export default routes;
