import environment, { Environment } from './base';

const baseApi = 'http://localhost:3000';
const env = environment(baseApi);

const localEnv: Environment = {
  ...env,
  // override anything that gets added from base.
  isProduction: false,
  isDevelopment: true,
};

export default localEnv;
