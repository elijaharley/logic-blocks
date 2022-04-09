const consecutiveNums = require('../2-consecutiveNumbers/consecutiveNums');
const nums = require('../2-consecutiveNumbers/consecutiveNumsData');

describe('consecutiveNums', () => {
  test('returns 0 when passed no consecutive numbers', () => {
    expect(consecutiveNums(123)).toBe(0);
    expect(consecutiveNums(1234567890)).toBe(0);
  });
  test("returns correct total when passed 2 consecutive numbers that don't loop", () => {
    expect(consecutiveNums(110)).toBe(1);
    expect(consecutiveNums(220)).toBe(2);
  });
  test("returns correct total when passed multiple consecutive numbers that don't loop", () => {
    expect(consecutiveNums(11110)).toBe(3);
    expect(consecutiveNums(22220)).toBe(6);
  });
  test('returns correct total when passed consecutive numbers that loop', () => {
    expect(consecutiveNums(11)).toBe(2);
    expect(consecutiveNums(22)).toBe(4);
    expect(consecutiveNums(1111)).toBe(4);
  });
  test('returns correct total when passed consecutive numbers that only loop', () => {
    expect(consecutiveNums(91212129)).toBe(9);
    expect(consecutiveNums(1234561)).toBe(1);
  });
  test('returns correct total when passed test data that loops', () => {
    expect(consecutiveNums(nums)).toBe(1150);
  });
});
