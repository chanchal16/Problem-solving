/**Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
 *  determine if the input string is valid.
 * An input string is valid if:
- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.
- Every close bracket has a corresponding open bracket of the same type.
Input: s = "()"
Output: true 
Input: s = "(]"
Output: false*/

const isValidParentheses = (str) => {
  let stack = [];
  let pairs = { "}": "{", ")": "(", "]": "[" };

  for (let s of str) {
    // If it's a closing bracket (), }, ]), check
    if (s in pairs) {
      // If the stack is empty, return false (no matching opening bracket).
      // Otherwise, pop from the stack and ensure it matches the corresponding opening bracket.
      if (stack.length === 0 || stack.pop() !== pairs[s]) {
        return false;
      }
    } else {
      stack.push(s); //If it's an opening bracket push on stack
    }
  }
  // After iterating, the stack should be empty if all brackets are balanced.
  return stack.length === 0;
};
console.log(isValidParentheses("(){}[]")); // true
console.log(isValidParentheses("([)]")); // false
console.log(isValidParentheses("{[]}"));