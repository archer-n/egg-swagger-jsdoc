'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
// eslint-disable-next-line no-unused-vars
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  config.keys = '123456';

  config.swagger = {
    swaggerDefinition: {
      swagger: '2.0',
      info: {
      // API informations (required)
        description: 'This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.', // Description (optional)
        version: '1.0.0', // Version (required)
        title: 'Swagger Petstore', // Title (required)
        termsOfService: 'http://swagger.io/terms/',
        contact: {
          email: 'apiteam@swagger.io',
        },
        license: {
          name: 'Apache 2.0',
          url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
        },
      },
      host: 'petstore.swagger.io',
      basePath: '/v2',
      securityDefinitions: {
        petstore_auth: {
          type: 'oauth2',
          authorizationUrl: 'http://petstore.swagger.io/oauth/dialog',
          flow: 'implicit',
          scopes: {
            'write:pets': 'modify pets in your account',
            'read:pets': 'read your pets',
          },
        },
        api_key: {
          type: 'apiKey',
          name: 'api_key',
          in: 'header',
        },
      },
    },
    apis: [
      './test/fixtures/apps/swagger-jsdoc-test/app/controller/**.js',
      './test/fixtures/apps/swagger-jsdoc-test/app/swagger/schemas/**.yaml',
    ],
  };

  return config;
};
