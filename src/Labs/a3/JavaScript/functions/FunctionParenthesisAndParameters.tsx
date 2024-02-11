function FunctionParenthesisAndParameters() {
  const square = (a: number) => a * a;
  const plusOne = (a: number) => a + 1;
  const twoSquared = square(2);
  const threePlusOne = plusOne(3);

  return (
    <div>
      <h3>Function Parenthesis and Parameters</h3>
      <p>twoSquared = {twoSquared}</p>
      <p>square(2) = {square(2)}</p>
      <p>threePlusOne = {threePlusOne}</p>
      <p>plusOne(3) = {plusOne(3)}</p>
    </div>
  );
}

export default FunctionParenthesisAndParameters;
