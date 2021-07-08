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

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, swagger')
      .expect(200);
  });
});
