function majorityElement(nums: number[]): number {
  nums.sort((a,b) => a - b);
  let n = nums.length;

  if(n % 2 === 0) return nums[n / 2];
  else return nums[(n - 1) / 2];
};