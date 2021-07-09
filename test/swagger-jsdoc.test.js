'use strict';

const mock = require('egg-mock');

describe('test/swagger-jsdoc.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/swagger-jsdoc-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /api-docs', () => {
    return app.httpRequest()
      .get('/api-docs')
      .expect('{"swagger":"2.0","info":{"description":"This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.","version":"1.0.0","title":"Swagger Petstore","termsOfService":"http://swagger.io/terms/","contact":{"email":"apiteam@swagger.io"},"license":{"name":"Apache 2.0","url":"http://www.apache.org/licenses/LICENSE-2.0.html"}},"host":"petstore.swagger.io","basePath":"/v2","securityDefinitions":{"petstore_auth":{"type":"oauth2","authorizationUrl":"http://petstore.swagger.io/oauth/dialog","flow":"implicit","scopes":{"write:pets":"modify pets in your account","read:pets":"read your pets"}},"api_key":{"type":"apiKey","name":"api_key","in":"header"}},"paths":{"/pet":{"post":{"tags":["pet"],"summary":"Add a new pet to the store","description":"","operationId":"addPet","consumes":["application/json","application/xml"],"produces":["application/xml","application/json"],"parameters":[{"in":"body","name":"body","description":"Pet object that needs to be added to the store","required":true,"schema":{"$ref":"#/definitions/Pet"}}],"responses":{"405":{"description":"Invalid input"}},"security":[{"petstore_auth":["write:pets","read:pets"]}]},"put":{"tags":["pet"],"summary":"Update an existing pet","description":"","operationId":"updatePet","consumes":["application/json","application/xml"],"produces":["application/xml","application/json"],"parameters":[{"in":"body","name":"body","description":"Pet object that needs to be added to the store","required":true,"schema":{"$ref":"#/definitions/Pet"}}],"responses":{"400":{"description":"Invalid ID supplied"},"404":{"description":"Pet not found"},"405":{"description":"Validation exception"}},"security":[{"petstore_auth":["write:pets","read:pets"]}]}}},"definitions":{"Pet":{"type":"object","required":["name","photoUrls"],"properties":{"id":{"type":"integer","format":"int64"},"category":{"$ref":"#/definitions/Category"},"name":{"type":"string","example":"doggie"},"photoUrls":{"type":"array","xml":{"name":"photoUrl","wrapped":true},"items":{"type":"string"}},"tags":{"type":"array","xml":{"name":"tag","wrapped":true},"items":{"$ref":"#/definitions/Tag"}},"status":{"type":"string","description":"pet status in the store","enum":["available","pending","sold"]}},"xml":{"name":"Pet"}},"Tag":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"name":{"type":"string"}},"xml":{"name":"Tag"}},"Category":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"name":{"type":"string"}},"xml":{"name":"Category"}}},"responses":{},"parameters":{},"tags":[{"name":"pet","description":"Everything about your Pets","externalDocs":{"description":"Find out more","url":"http://swagger.io"}}]}')
      .expect(200);
  });

  it('should GET /swagger-ui/index.html', () => {
    return app.httpRequest()
      .get('/swagger-ui/index.html')
      .expect('<!-- HTML for static distribution bundle build -->\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <title>Swagger UI</title>\n    <link rel="stylesheet" type="text/css" href="./swagger-ui.css" />\n    <link rel="icon" type="image/png" href="./favicon-32x32.png" sizes="32x32" />\n    <link rel="icon" type="image/png" href="./favicon-16x16.png" sizes="16x16" />\n    <style>\n      html\n      {\n        box-sizing: border-box;\n        overflow: -moz-scrollbars-vertical;\n        overflow-y: scroll;\n      }\n\n      *,\n      *:before,\n      *:after\n      {\n        box-sizing: inherit;\n      }\n\n      body\n      {\n        margin:0;\n        background: #fafafa;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div id="swagger-ui"></div>\n\n    <script src="./swagger-ui-bundle.js" charset="UTF-8"> </script>\n    <script src="./swagger-ui-standalone-preset.js" charset="UTF-8"> </script>\n    <script>\n    window.onload = function() {\n      // Begin Swagger UI call region\n      const ui = SwaggerUIBundle({\n        url: "/api-docs",\n        dom_id: \'#swagger-ui\',\n        deepLinking: true,\n        presets: [\n          SwaggerUIBundle.presets.apis,\n          SwaggerUIStandalonePreset\n        ],\n        plugins: [\n          SwaggerUIBundle.plugins.DownloadUrl\n        ],\n        layout: "StandaloneLayout"\n      });\n      // End Swagger UI call region\n\n      window.ui = ui;\n    };\n  </script>\n  </body>\n</html>\n')
      .expect(200);
  });
});
