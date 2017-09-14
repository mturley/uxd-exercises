
var assert = require('assert');
var buggyService = require('../remoteMathService-buggy');
var fixedService = require('../remoteMathService-fixed');
var promisesService = require('../remoteMathService-promises');

function assertIsBuggy(service) {
  service.remoteMathService(function(err, answer) {
    assert.notEqual(answer, 3, 'answer is incorrect');
  });
}

function assertIsWorking(service) {
  service.remoteMathService(function(err, answer) {
    assert.equal(answer, 3, 'one plus two is three!');
  });
}

describe('remoteMathService-buggy', function() {
  it('is buggy and returns a bad answer', function() {
    assertIsBuggy(buggyService);
  });
});

describe('remoteMathService-fixed', function() {
  it('adds numbers correctly from async services', function() {
    assertIsWorking(fixedService);
  });
});

describe('remoteMathService-promises', function() {
  it('adds numbers correctly from async services', function() {
    assertIsWorking(promisesService);
  });
});
