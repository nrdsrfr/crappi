'use strict';
var Hapi = require('hapi');
var Lab = require('lab');

var expect = Lab.expect;
var before = Lab.before;
var beforeEach = Lab.beforeEach;
var after = Lab.after;
var afterEach = Lab.afterEach;
var describe = Lab.experiment;
var it = Lab.test;



Lab.test('returns true when 1 + 1 equals 2', function (done) {

  Lab.expect(1 + 1).to.equal(2);
  done();
});


describe('Crappi', function () {

  it('delays API calls by a specified time at a specified rate', function (done) {

    var server = Hapi.createServer(0);

    server.route(
      [{
        method: 'GET',
        path: '/test',
        handler: function (request, reply) {
          reply('success');
        },
        config: {
          plugins: {
            crappi: true
          }
        }
      }]
    );

    server.pack.require({ '../': {
        slomo: {
        rate: 100, // percent of calls affected
        time: 1  // number of seconds to delay the response
      }
    }}, function (err) {
      if (err) { done(err); }
      else {
        console.log('started server ', server.info);
        server.start(function () {
          var start = new Date();
          server.inject('/test', function (res) {
            var millis = Math.abs(new Date() - start);
            expect(millis).to.be.greaterThan(1000);
            expect(res.payload).to.equal('success');
            done();
          });
        });
      }
    });

  });
});