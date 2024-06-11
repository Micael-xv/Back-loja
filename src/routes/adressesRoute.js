import adresses from '../controllers/adressesController';

export default (app) => {
  app.post('/adresses/persist', adresses.persist);
  app.post('/adresses/persist/:id', adresses.persist);
  app.post('/adresses/destroy', adresses.destroy);
  app.put('/adresses/update', adresses.update);
  app.get('/adresses', adresses.get);
  app.get('/adresses/:id', adresses.get);
};
