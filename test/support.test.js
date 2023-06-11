/**
* @jest-environment jsdom
*/
const support = require("../js/support")

test('number background color test', () => {
  expect(support.getNumberBackgroundColor(1024)).toBe("#33b5e5");
});