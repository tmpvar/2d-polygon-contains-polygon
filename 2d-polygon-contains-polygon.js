var area = require('2d-polygon-area');
var intest = require('robust-point-in-polygon');

module.exports = contains;

var abs = Math.abs;

// does a contain b?
function contains(a, b) {

  var aa = abs(area(a));
  var ab = abs(area(b));

  if (ab > aa) {
    return false;
  }

  var l = b.length;
  for (var i=0; i<l; i++) {
    if (intest(a, b[i]) >= 0) {
      return false;
    }
  }

  return true;
}
