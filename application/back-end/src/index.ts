import { APPLICATION_PORT, startExpressServer } from '@config/express.configuration';

const setupApplication = async () => {
  await startExpressServer(APPLICATION_PORT);
};

setupApplication().then(() => {
  console.log(`Server running on port ${APPLICATION_PORT}`);
});
