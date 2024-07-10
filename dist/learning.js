"use strict";
const person = {
    name: "Raheem",
    age: 21
};
let nums = [1, 2, 3, 4, 5, 6, 7];
let NewArray = nums.map((num) => {
    return num + 1;
});
NewArray = nums.filter((num) => {
    return num % 2 === 0;
});
let i = 0;
nums.forEach((num) => {
    nums[i++] = i * 10;
});
console.log(nums);
//# sourceMappingURL=learning.js.map