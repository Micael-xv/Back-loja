import categories from '../controllers/categoriesController';

export default (app) => {
  app.post('/categories/persist', categories.persist);
  app.post('/categories/persist/:id', categories.persist);
  app.post('/categories/destroy', categories.destroy);
  app.put('/categories/update', categories.update);
  app.get('/categories', categories.get);
  app.get('/categories/:id', categories.get);
};
