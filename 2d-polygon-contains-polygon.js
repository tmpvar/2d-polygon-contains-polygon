var area = require('2d-polygon-area');
var intest = require('robust-point-in-polygon');
var isect = require('robust-segment-intersect');

module.exports = contains;

var abs = Math.abs;

// does a contain b?
function contains(a, b) {

  var aa = abs(area(a));
  var ab = abs(area(b));

  // the containing polygon's area should be larger
  // than the contained polygon
  if (ab > aa) {
    return false;
  }

  // all points should be contained
  var pl = b.length;
  for (var i=0; i<pl; i++) {
    if (intest(a, b[i]) >= 0) {
      return false;
    }
  }

  // last chance, let's test for intersections
  var al = a.length;
  var bl = b.length;
  for (var ai=0; ai<al; ai++) {
    var astart = a[ai];
    var aend = a[(ai+1) % al];
    for (var bi=0; bi<bl; bi++) {
      var bstart = b[bi];
      var bend = b[(bi+1) % bl];

      if (isect(astart, aend, bstart, bend)) {
        return false;
      }
    }
  }

  return true;
}
