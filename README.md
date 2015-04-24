# 2d-plolygon-contains-polygon

test if a polygon completely contains another polygon

this can useful when computing whether or not a polygon is a hole or island.

This library is not highly optimized, but should suit your needs for the general case.  Hit me up if it's not fast enough and I'll see what we can do.

## install

`npm install 2d-plolygon-contains-polygon`

## use

```javascript

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

console.log(contains(a, b));
// output: true
```

### api surface

__contains__(`container`, `contained`)

`container` and `container` are polygons represented by a 2d array (i.e. `[[x, y], [x, y], ]`)

returns `true` if `contained` is contained in `container`, and `false` otherwise.

## license

[MIT](LICENSE.txt)
