import { app, setUpAPIRoutes, setUpMiddlewares } from './app';

/* istanbul ignore next */
const PORT = process.env.PORT || 8080;

async function startApp() {
  setUpAPIRoutes();

  setUpMiddlewares();

  /* istanbul ignore next */
  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Express server listening on port ${PORT}`);
  });
}

startApp();
