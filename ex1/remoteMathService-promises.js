/*

  This is the code with my changes applied.
  The tests can be verified by running:

  npm test

 */

function remoteMathService(cb) {
  var callServicePromise = function(callService) {
    return new Promise(function(resolve, reject) {
      callService(function(err, num) {
        err ? reject(err) : resolve(num);
      });
    });
  }
  Promise.all([
    callServicePromise(callOneService),
    callServicePromise(callTwoService),
  ]).then(function(result) {
    cb(undefined, result[0] + result[1]);
  });
}

function callOneService(cb) {
  setTimeout(function() {
    cb(undefined, 1);
  }, 1000);
}

function callTwoService(cb) {
  setTimeout(function() {
    cb(undefined, 2);
  }, 1500);
}

remoteMathService(function(err, answer) {
  if (err) console.log("error ", err);
  if (answer !== 3) {
    console.log("wrong answer", answer);
  } else {
    console.log("correct");
  }
});

module.exports = {
  remoteMathService: remoteMathService
};
