import products from '../controllers/productsController';

export default (app) => {
  app.post('/products/persist', products.persist);
  app.post('/products/persist/:id', products.persist);
  app.post('/products/destroy', products.destroy);
  app.put('/products/update', products.update);
  app.get('/products', products.get);
  app.get('/products/:id', products.get);
};
