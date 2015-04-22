var test = require('tape');
var contains = require('2d-polygon-contains-polygon');


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
