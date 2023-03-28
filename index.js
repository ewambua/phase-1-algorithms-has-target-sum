function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    let addend = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === addend) {
        return true
      }
    }
  }
  return false
}

/*
  Write the Big O time complexity of your function here

*/

/*
  Add your pseudocode here
  iterate the number array
  for the current number, find a addend number that adds to the target
  iterate the remaining numbers in the number array
  if any of the remaining numbers is === addend
  return true
  end of array returns false
*/

/*
  Add written explanation of your solution here
  It iterates over the number array
  Uses the for loops to find the addend  that adds to the target
  Then it iterates over the remaining numbers in the number array
  and returns true if any of the remaining numbers is = addend
  if it reaches the end of the array it retuns false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 5, 4, 15, 19], 20));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 3], 20));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
