/** 583. Delete Operation for Two Strings
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 * @Type dynamic programming
 */
export const minDistance = function(word1: string, word2: string): number {};

export const isPisPalindrome = function(s: string) {}

export const reverseString = function(s: Array<string>) {}

export const reorderLogFiles = function(logs: Array<string>): Array<string> {}

export const mostCommonWord = function(paragraph: string, banned: Array<string>): string {}

/**
 * @param {string} s
 * @return {string}
 */
export const longestPalindrome = function(s: string): string {};

/** 1. Two Sum
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @Runtime 72 ms
 * @Memory 38.4 MB
 */
export const twoSum = function(nums: Array<number>, target: number): Array<number> {
  const result: number | any = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i+1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i, j)
        return result;
      }
    }
  }
  return result;
};

/**
 * @param {number[]} height
 * @return {number}
 */
export const trap = function(height: Array<number>): number {};

/** Three Sum
 * @param {number[]} nums
 * @return {number[][]}
 * @Runtime
 * @Memory
 */
export const threeSum = function(nums: Array<number>): number[][] {
  const result = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i-1]) continue;
    const target = 0 - nums[i];
    let left = i + 1;
    let right = nums.length-1;
    while (left < right) {
      const mid = nums[left] + nums[right];
      if (mid > target) {
        right -= 1;
      } else if (mid < target) {
        left -= 1;
      } else {
        result.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[left+1]) left -= 1;
        while (nums[right] === nums[right-1]) right -= 1;
        left += 1;
        right -= 1;
      }
    }
  }
  return result;
};

/** 561. Array Partition I
 * @param {number[]} nums
 * @return {number}
 * @Runtime
 * @Memory
 */
export const arrayPairSum = function(nums: number[]): number {
  nums = nums.sort((a, b) => a - b);
  let result = 0;
  for (let i = 0; i < nums.length; i += 2) {
    let pair = Math.min(nums[i], nums[i+1]);
    result += pair;
  }

  return result;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const productExceptSelf = function(nums: number[]): number[] {
  const result = [];

  let product = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = product;
    product *= nums[i]
  }

  product = 1;
  for (let j = nums.length-1; j >= 0; j--) {
    result[j] *= product;
    product *= nums[j];
  }

  return result;
};

/** 121. Best Time to Buy and Sell Stock
 * @param {number[]} prices
 * @return {number}
 */
export const maxProfit = function(prices: number[]): number {
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i+1; j < prices.length; j++) {
      let profit = prices[j] - prices[i];
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }

  return maxProfit;
};



