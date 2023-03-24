/**
 * @jest-environment jsdom
 */

test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();

  jest.replaceProperty(element, "dir", "my-dir");
  expect(element.dir).toBe("my-dir")
});
