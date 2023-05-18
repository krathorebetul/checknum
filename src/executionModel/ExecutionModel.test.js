const ExecutionModel = require('./ExecutionModel');
const data={
  num1:"2"
}
test('cheknum 2%==0 to show even', () => {
  expect(ExecutionModel(data)).toBe("even");
}); 