function removeDuplicates(nums: number[]): number {
    let k = 1; // arr index
    let count = 1; // count occurrences of curr el

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) count++;
        else count = 1;
        if (count <= 2) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};