const s = require('../src/Solutions');

// ===============
// MATHEMATICAL
// ===============
test('math functions', () => {
  expect(s.add(2,3)).toBe(5);
  expect(s.subtract(5,2)).toBe(3);
  expect(s.multiply(2,4)).toBe(8);
  expect(s.divide(10,2)).toBe(5);
  expect(s.divide(5,0)).toBeNull();
  expect(s.power(2,3)).toBe(8);
  expect(s.squareRoot(9)).toBe(3);
  expect(s.squareRoot(-4)).toBeNull();
  expect(s.factorial(5)).toBe(120);
  expect(s.factorial(-1)).toBeNull();
  expect(s.isPrime(7)).toBe(true);
  expect(s.isPrime(9)).toBe(false);
  expect(s.gcd(12,8)).toBe(4);
  expect(s.lcm(4,6)).toBe(12);
  expect(s.average([2,4,6])).toBe(4);
  expect(s.minInArray([3,1,7])).toBe(1);
  expect(s.maxInArray([3,1,7])).toBe(7);
  expect(s.absolute(-10)).toBe(10);
  expect(s.roundNumber(3.6)).toBe(4);
});

// ===============
// STRING
// ===============
test('string functions', () => {
  expect(s.stringLength("hello")).toBe(5);
  expect(s.toUpper("abc")).toBe("ABC");
  expect(s.toLower("ABC")).toBe("abc");
  expect(s.firstChar("hi")).toBe("h");
  expect(s.firstChar("")).toBeNull();
  expect(s.lastChar("hi")).toBe("i");
  expect(s.reverseString("abc")).toBe("cba");
  expect(s.isPalindrome("Racecar")).toBe(true);
  expect(s.removeSpaces("a b c")).toBe("abc");
  expect(s.includesSubstring("hello","ell")).toBe(true);
  expect(s.repeatString("ha",3)).toBe("hahaha");
  expect(s.splitWords("hello world")).toEqual(["hello","world"]);
  expect(s.concatStrings("a","b")).toBe("ab");
  expect(s.replaceSubstring("hello","l","x")).toBe("hexlo");
  expect(s.charCode("A")).toBe(65);
  expect(s.charCode("")).toBeNull();
  expect(s.stringToNumber("42")).toBe(42);
  expect(s.stringToNumber("abc")).toBeNull();
});

// ===============
// ARRAY
// ===============
test('array functions', () => {
  expect(s.arrayLength([1,2,3])).toBe(3);
  expect(s.firstElement([1,2,3])).toBe(1);
  expect(s.firstElement([])).toBeNull();
  expect(s.lastElement([1,2,3])).toBe(3);
  expect(s.pushElement([1,2],3)).toEqual([1,2,3]);
  expect(s.unshiftElement([2,3],1)).toEqual([1,2,3]);
  expect(s.popElement([1,2,3])).toBe(3);
  expect(s.shiftElement([1,2,3])).toBe(1);
  expect(s.includesElement([1,2,3],2)).toBe(true);
  expect(s.indexOfElement([1,2,3],3)).toBe(2);
  expect(s.sumArray([1,2,3])).toBe(6);
  expect(s.averageArray([2,4,6])).toBe(4);
  expect(s.sortArray([3,1,2])).toEqual([1,2,3]);
  expect(s.reverseArray([1,2,3])).toEqual([3,2,1]);
  expect(s.filterEven([1,2,3,4])).toEqual([2,4]);
  expect(s.squareArray([1,2,3])).toEqual([1,4,9]);
});
