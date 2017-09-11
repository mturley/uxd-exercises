/*

  This is the code with my changes applied.
  The tests can be verified by running:

  mocha blah blah TODO replace this with a real command

 */

function remoteMathService(cb) {
  var one, two;
  var doMath = function() {
    cb(undefined, one + two);
  };
  callOneService(function(err, num) {
    one = num;
  });
  callTwoService(function(err, num) {
    two = num;
  });
  doMath();
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
