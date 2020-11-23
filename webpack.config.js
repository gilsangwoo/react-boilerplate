const {merge} = require('webpack-merge');
const buildValidations = require('./build-utils/build-validations').default;
const commonConfig = require('./build-utils/webpack.common');

const getAddonsConfig = (addonsArg = []) => {
  const addons = [...addonsArg].filter(Boolean);

  return addons.map((addonName) =>
    require(`./build-utils/addons/webpack.${addonName}.js`),
  );
};
module.exports = (env) => {
  if (!env) {
    throw new Error(buildValidations.ERR_NO_ENV_FLAG);
  }

  const envConfig = require(`./build-utils/webpack.${env.env}.js`);
  const addonsConfig = getAddonsConfig(env.addons);
  const mergedConfig = merge(commonConfig, envConfig, ...addonsConfig);

  return mergedConfig;
};
