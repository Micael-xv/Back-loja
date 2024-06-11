import orders from '../controllers/ordersController';

export default (app) => {
  app.post('/orders/persist', orders.persist);
  app.post('/orders/persist/:id', orders.persist);
  app.post('/orders/destroy', orders.destroy);
  app.put('/orders/update', orders.update);
  app.get('/orders', orders.get);
  app.get('/orders/:id', orders.get);
};
