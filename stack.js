// Creates a node containing the data and a reference to the next item
class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    /* If the stack is empty, then the node will be the
       top of the stack */
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    /* If the stack already has something, 
       then create a new node,
       add data to the new node, and
       have the pointer point to the top */
    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    /* In order to remove the top of the stack, you have to point
       the pointer to the next item and that next item becomes the
       top of the stack */
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

function main() {
  let starTrek = new Stack();

  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  //console.log(peek(starTrek));

  starTrek.pop();
  starTrek.pop();
  starTrek.push('Scotty');
  //console.log(display(starTrek));
}

//2. Useful Methods
function peek(stack) {
  if (stack.top === null) {
    return 'stack is empty';
  }
  return stack.top.data;
}

function isEmpty(stack) {
  if (stack.top === null) {
    return 'stack is empty';
  }
}

function display(stack) {
  return JSON.stringify(stack, null, 2);
}

//3. Palindromes

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  // Your code goes here
  const newStack = new Stack();
  let revString = '';
  for (let i = 0; i < s.length; i++) {
    newStack.push(s[i]);
  }
  while (newStack.top !== null) {
    revString += newStack.pop();
  }
  return revString === s;
}

// True, true, true, false
console.log(is_palindrome('dad'));
console.log(is_palindrome('A man, a plan, a canal: Panama'));
console.log(is_palindrome('1001'));
console.log(is_palindrome('Tauhida'));

//4. Matching Parentheses

function checkBracks(str) {
  const testStack = new Stack();

  for (let i = 0; i < str.length; i++) {
    // console.log('loop');
    if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
      testStack.push(str[i]);
    }
  }

  console.log(JSON.stringify(testStack, null, 2));

  let j = 0;
  while (j < str.length) {
    if (str[j] === ')' || str[j] === ']' || str[j] === '}') {
      testStack.pop();
    }
    j++;
  }

  console.log(JSON.stringify(testStack, null, 2));

  if (testStack.top === null) {
    return true;
  } else {
    return false;
  }
}

console.log(checkBracks('(([{}]))'));

// 5. Sort Stack

function sortStack(stack) {
  let workingStack = new Stack();
  let currentNode;

  workingStack.push(stack.pop());

  while (!isEmpty(stack)) {
    currentNode = stack.pop();

    if (isEmpty(workingStack)) {
      workingStack.push(currentNode);
    }

    if (peek(workingStack) < currentNode) {
      stack.push(workingStack.pop());
      workingStack.push(currentNode);
    } else {
      workingStack.push(currentNode);
    }
  }
  return workingStack;
}

let test = new Stack();
test.push(1);
test.push(2);
test.push(3);
test.push(6);
test.push(5);

// console.log(JSON.stringify(sortStack(test), null, 2));

module.exports = Stack;
