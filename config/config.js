const _ = require('lodash');
const dotenv = require('dotenv');
const nodeEnvConfig = require('node-env-configuration');
const path = require('path');

class Config {
  constructor(prefix = 'APP') {
    const envVars = dotenv.config({
      path: 'config/env.vars',
    });

    if (envVars.error) {
      throw new Error('Failed to load default environment variables');
    }

    this.config = nodeEnvConfig({
      prefix,
    });
  }

  get(fieldPath, fallback) {
    return _.cloneDeep(_.get(this.config, fieldPath.toLowerCase(), fallback));
  }

  env() {
    const defaultEnv = 'stage';
    return defaultEnv;
  }
}

module.exports = Config;
