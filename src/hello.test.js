import {hello} from "./hello"

test('hello should print hello', () => {
  expect(hello()).toEqual('hellokana')
});
