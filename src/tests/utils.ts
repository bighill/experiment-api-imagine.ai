import { setUpAPIRoutes, setUpMiddlewares } from 'server/app';

function setUpRoutesAndMiddlewares() {
  setUpAPIRoutes();
  setUpMiddlewares();
}

export { setUpRoutesAndMiddlewares };
