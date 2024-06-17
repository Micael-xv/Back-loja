import verifyToken from '../middleware/verifyToken';
import verifyCargo from '../middleware/verifyCargo';
import user from '../controllers/usersController';

export default (app) => {
  app.post('/users/persist/', user.persist);
  app.post('/users/persist/:id', user.persist);
  app.post('/users/destroy/', verifyToken, user.destroy);
  app.post('/users/destroy/:id', verifyCargo, verifyToken, user.destroy);
  app.post('/users/login/', user.login);
  app.post('/users/register/', user.register);
  app.get('/users/', user.get);
  app.get('/users/:id', user.get);
};
