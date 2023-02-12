import getBuffer from "../app";
import ArrayBufferConverter from "../ArrayBufferConverter";

test("converter check", () => {
  const obj = new ArrayBufferConverter();
  obj.load(getBuffer());
  expect(obj.toString()).toEqual(`{"data":{"user":{"id":1,"name":"Hitman","level":10}}}`);
});
