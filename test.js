var test = require('tape');
var contains = require('./2d-polygon-contains-polygon');


test('not contained', function (t) {
  var a = [
    [0, 0],
    [10, 0],
    [10, 10],
    [0, 10]
  ];

  var b = [
    [20, 20],
    [80, 20],
    [80, 80],
    [20, 80]
  ];

  t.equal(contains(a, b), false)

  t.end()
});

test('not contained (overlapping)', function (t) {
  var a = [
    [0, 0],
    [10, 0],
    [10, 10],
    [0, 10]
  ];

  var b = [
    [5, 5],
    [11, 5],
    [11, 11],
    [5, 11]
  ];

  t.equal(contains(a, b), false)

  t.end()
});

test('squares', function (t) {
  var a = [
    [0, 0],
    [100, 0],
    [100, 100],
    [0, 100]
  ];

  var b = [
    [20, 20],
    [80, 20],
    [80, 80],
    [20, 80]
  ];

  t.ok(contains(a, b))

  t.end()
});
