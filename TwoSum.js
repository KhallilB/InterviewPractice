// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// Restate problem:
// The problem is to take an array an integer and take two idexes of numbers in array that add up
// to a specific target.

// Assumptions:
// Each input has one solution
// Elements must only be used once
// Elements are integers

// Soultion 1: Brute force
// Checking all the combinations by looping over every elemnt and finding if
// there is another value that equals the target given
//
// Time Complexity: O(n^2)
// For every element we have to loop through the rest of the array which takes 0(n) which were doing twice
// which would be O(n^2)
// Space O(1)
// Doesnt need to store any data

const twoSum = function(nums, target) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i);
        result.push(j);
      }
    }
  }
  return result;
};

console.log(twoSum([2, 7, 11, 15], 9));
