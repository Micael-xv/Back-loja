import cupoms from '../controllers/cupomsController';

export default (app) => {
  app.post('/cupoms/persist', cupoms.persist);
  app.post('/cupoms/persist/:id', cupoms.persist);
  app.post('/cupoms/destroy', cupoms.destroy);
  app.put('/cupoms/update', cupoms.update);
  app.get('/cupoms', cupoms.get);
  app.get('/cupoms/:id', cupoms.get);
};
