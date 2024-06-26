var QUERY_REGEX = /[0-9]+[\+\-\*\/][0-9]+/;
var OPERATOR_REGEX = /[\+\-\*\/]/;
var OPERATIONS = {
  "+": add,
  "-": subtract,
  "*": multiply,
  "/": divide,
};

function Calculate(inputString) {
  // validate query
  const query = validateQuery(inputString);
  if (!query) return "";

  // extract operator
  const operator = extractOperator(query);
  const operands = query.split(operator).map((v) => +v);
  const compute = OPERATIONS[operator];
  return compute(...operands);
}

function validateQuery(inputString) {
  const matchObject = inputString.match(QUERY_REGEX);
  if (!matchObject) return null;
  return matchObject[0];
}

function extractOperator(query) {
  const matchObject = query.match(OPERATOR_REGEX);
  if (!matchObject) return null;
  return matchObject[0];
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if(b==0){
    throw new Error("Cannot divide by 0");
  }
  return a / b;
}
