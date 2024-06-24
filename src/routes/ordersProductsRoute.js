import ordersProducts from '../controllers/ordersProductsController';

export default (app) => {
  app.post('/ordersProducts/persist', ordersProducts.persist);
  app.post('/ordersProducts/persist/:id', ordersProducts.persist);
  app.post('/ordersProducts/destroy', ordersProducts.destroy);
  app.put('/ordersProducts/update', ordersProducts.update);
  app.get('/ordersProducts', ordersProducts.get);
  app.get('/ordersProducts/:id', ordersProducts.get);
};