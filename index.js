function distanceTravelledInFeet(start, end) {

  return Math.abs((end-start)*264);
}


function distanceFromHqInBlocks (block) {

  return Math.abs(42 - block);
}


function distanceFromHqInFeet (block) {

  return distanceFromHqInBlocks(block) * 264;
}

function calculatesFarePrice(start, destination) {

  let distance = distanceTravelledInFeet(start, destination)
  let cost

  if (distance <= 400) {
    cost = 0
  }
  else if (distance <= 2000) {
    cost = (distance - 400) * 0.02
  }
  else if (distance <= 2500)  {
    cost = 25
  }
  else {
    cost = 'cannot travel that far'
  }

  return cost

}
