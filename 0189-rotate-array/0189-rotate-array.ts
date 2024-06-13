/**
 Do not return anything, modify nums in-place instead.
 */
function revArr(nums: number[], s: number, e: number){
    while(s < e) {
        [nums[s], nums[e]] = [nums[e], nums[s]];
        s++;
        e--;
    }
}
function rotate(nums: number[], k: number): void {
    let n = nums.length;
    k = k % n;
    nums.reverse();
    revArr(nums, 0, k - 1);
    revArr(nums, k, n - 1);
};