import usersRoute from './usersRoute';
import adressesRoute from './adressesRoute';
import categoriesRoute from './categoriesRoute';
import productsRoute from './productsRoute';
import ordersRoute from './ordersRoute';
import ordersProductsRoute from './ordersProductsRoute';
import cupomsRoute from './cupomsRoute';
import paymentsRoute from './paymentsRoute';

function Routes(app) {
  usersRoute(app);
  adressesRoute(app);
  categoriesRoute(app);
  productsRoute(app);
  ordersRoute(app);
  ordersProductsRoute(app);
  cupomsRoute(app);
  paymentsRoute(app);
}

export default Routes;
