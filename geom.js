// TODO include arith.js
// TODO include arrays.js

function scaleHarmonicRatio (rat) { return binaryLog (rat); }

function logScaleToDegrees (ls) { return 360 * ls; }
function logScaleToRadians (ls) { return 2 * Math.PI * ls; }
function harmonicRatioToRadians (hr) {
  const ls  = scaleHarmonicRatio (hr);
  const rad = logScaleToRadians (ls);
  return rad;
}

function radiansToX (rad) { return Math.cos (rad); }
function radiansToY (rad) { return Math.sin (rad); }
function harmonicRatioToXY (hr) {
  const rad = harmonicRatioToRadians (hr);
  const x   = radiansToX (rad);
  const y   = radiansToY (rad);
  return (x, y);
}

function intervalToTriangle (hr1, hr2) {
  const A = (0, 0);
  const B = harmonicRatioToXY (hr1);
  const C = harmonicRatioToXY (hr2);
  return (A, B, C);
}

function harmonicRatiosToIntervals (hrs) {
  var intervals = {};
  for (var i = 1; i < hrs.length; i++)
    for (var j = 0; j < i; j++)
      intervals.push ((hrs[j], hrs[i]));
  return intervals;
}

function harmonicRatiosToTriangles (hrs) {
  const intervals = harmonicRatiosToIntervals (hrs);
  const triangles = intervals.map (intervalToTriangle);
  return triangles;
}

function getDistance (pt1, pt2) {
 assert (pt1.length == pt2.length);
 var ds = {};
 for (var i = 0; i < pt1.length; i++)
   ds.push (pt2[i] - pt1[i]);
 const ds2 = ds.map (x => x ** 2);
 const s = sum (ds2);
 return Math.sqrt (s); 
}

function getSides (triangle) {
  var sides = zip (triangle, triangle.slice (1))
  sides.push ((triangle[triangle.length - 1], triangle[0]));
  return sides;
}

function getPerimeter (triangle) {
  const sides = getSides (triangle);
  const sideLengths = sides.map (getDistance);
  return sum (sideLenghts); 
}

function getArea (triangle) {
  // TODO
}

function getOrthocenter (triangle) {
  // TODO
}

function getCircumcenter (triangle) {
  // TODO
}

function getCentroid (triangle) {
  // TODO
}

function getExeterPoint (triangle) {
  // TODO
}

function getNinePointCircle (triangle) {
  // TODO
}

function getEulersLine (triangle) {
  // TODO
}
