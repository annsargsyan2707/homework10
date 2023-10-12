class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let node = new Node(val);
    if (!this.top) {
      this.top = node;
      this.last = node;
    } else {
      let temp = this.top;
      this.top = node;
      this.top.next = temp;
    }
    return ++this.size;
  }
  pop() {
    if (!this.top) return null;
    let temp = this.top;
    if (this.top === this.last) {
      this.last === null;
    }
    this.top = this.top.next;
    this.size--;
    return temp.value;
  }
  peek() {
    return this.top;
  }
  isEmpty() {
    return !this.size;
  }
  getSize() {
    return this.size;
  }
}
const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.getSize());
