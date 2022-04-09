function consecutiveNums(nums) {
  const numArr = nums.toString().split('');
  let total = 0;
  numArr.forEach((num, index) => {
    if (num === numArr[index + 1]) {
      total += +num;
    }
  });

  if (numArr[numArr.length - 1] === numArr[0]) {
    total += +numArr[0];
  }
  return total;
}

module.exports = consecutiveNums;
