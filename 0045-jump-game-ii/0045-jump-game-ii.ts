function jump(nums: number[]): number {
    const len = nums.length;
    let oldMax = 0, newMax = 0, jump = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        newMax = Math.max(newMax, i + nums[i]);

        if (i == oldMax) {
            jump++;
            oldMax = newMax;
        }
    }
    return jump;
};