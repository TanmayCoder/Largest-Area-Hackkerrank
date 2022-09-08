// # Complete the 'getMaxArea' function below.
// #
// # The function is expected to return a LONG_INTEGER_ARRAY.
// # The function accepts following parameters:
// #  1. INTEGER w
// #  2. INTEGER h
// #  3. BOOLEAN_ARRAY isVertical
// #  4. INTEGER_ARRAY distance
(function main() {
  let w = 4;
  let h = 4;
  let isVertical = [0, 1];
  let distance = [3, 1];
  //result [12,9]
  getMaxArea(w, h, isVertical, distance);
})();

function getMaxArea(w, h, isVertical, distance) {
  let area = [];
  let verticals = [w, h];
  console.log('verticals', verticals);
  for (let ver = 0; ver < isVertical.length; ver++) {
    //spliceVerticals(verticals,distance[ver],Boolean(isVertical[ver]))
    if (typeof verticals[Boolean(isVertical[ver]) ? 0 : 1] === 'number') {
      let arr = [];
      arr.push(verticals[Boolean(isVertical[ver]) ? 0 : 1] - distance[ver]);
      arr.push(distance[ver]);
      verticals.splice(Boolean(isVertical[ver]) ? 0 : 1, 1, arr);
    } else {
      for (
        let i = 0;
        i < verticals[Boolean(isVertical[ver]) ? 0 : 1].length;
        i++
      ) {
        if (verticals[Boolean(isVertical[ver]) ? 0 : 1][i] >= distance[ver]) {
          let arr = [];
          arr.push(
            verticals[Boolean(isVertical[ver]) ? 0 : 1][i] - distance[ver]
          );
          arr.push(distance[ver]);
          verticals[Boolean(isVertical[ver]) ? 0 : 1].splice(i, 1, arr);
        }
      }
    }
    //Calculate largest Area
    area.push(calculateLagestArea(verticals));
    console.log(
      `its ${Boolean(isVertical[ver]) ? 'vertical' : 'horizontal'}`,
      verticals
    );
    console.log(`its largest area`, area);
  }
}
function calculateLagestArea(verticals) {
  let maxArea = 0;
  if (typeof verticals[0] === 'number' && typeof verticals[1] === 'number') {
    let area = verticals[0] * verticals[1];
    if (area > maxArea) {
      maxArea = area;
    }
  } else if (
    typeof verticals[0] !== 'number' &&
    typeof verticals[1] === 'number'
  ) {
    let area = 0;
    for (let i = 0; i < verticals[0].length; i++) {
      area = verticals[0][i] * verticals[1];
      if (area > maxArea) {
        maxArea = area;
      }
    }
  } else if (
    typeof verticals[0] === 'number' &&
    typeof verticals[1] !== 'number'
  ) {
    let area = 0;
    for (let i = 0; i < verticals[1].length; i++) {
      area = verticals[1][i] * verticals[0];
      if (area > maxArea) {
        maxArea = area;
      }
    }
  } else if (
    typeof verticals[0] !== 'number' &&
    typeof verticals[1] !== 'number'
  ) {
    let area = 0;
    for (let i = 0; i < verticals[0].length; i++) {
      for (let j = 0; j < verticals[1].length; j++) {
        area = verticals[i][j] * verticals[i][j];
        if (area > maxArea) {
          maxArea = area;
        }
      }
    }
  }
  return maxArea;
}
