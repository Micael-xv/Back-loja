import user from '../controllers/usersController';

export default (app) => {
  app.post('/users/persist', user.persist);
  app.post('/users/persist/:id', user.persist);
  app.post('/users/destroy', user.destroy);
  app.put('/users/update', user.update);
  app.get('/users', user.get);
  app.get('/users/:id', user.get);
};