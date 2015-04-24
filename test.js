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

  t.equal(contains(a, b), false);

  t.end();
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

  t.equal(contains(a, b), false);

  t.end();
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

  t.ok(contains(a, b));

  t.end();
});


test('overlap but not contained (big area)', function (t) {
  var a = [
    [0, 0],
    [10, 0],
    [10, 10],
    [0, 10]
  ];

  var b = [
    [2, -2],
    [8, -2],
    [8, 12],
    [2, 12]
  ];

  t.ok(!contains(a, b));

  t.end();
});

test('overlap but not contained (smaller area)', function (t) {
  var a = [
    [0, 0],
    [10, 0],
    [10, 10],
    [0, 10]
  ];

  var b = [
    [2, -1],
    [3, -1],
    [3, 11],
    [2, 11]
  ];

  t.ok(!contains(a, b))

  t.end();
});

test('intersection', function (t) {
  var a = [
    [0, 0],
    [0, 20],
    [10, 20],
    [20, 10],
    [30, 20],
    [40, 20],
    [40, 0]
  ];

  var b = [
    [5, 15],
    [35, 15],
    [35, 5],
    [5, 5]
  ];

  t.ok(!contains(a, b))

  t.end();
});

