import payments from '../controllers/paymentsController';

export default (app) => {
  app.post('/payments/persist', payments.persist);
  app.post('/payments/persist/:id', payments.persist);
  app.post('/payments/destroy', payments.destroy);
  app.put('/payments/update', payments.update);
  app.get('/payments', payments.get);
  app.get('/payments/:id', payments.get);
};
