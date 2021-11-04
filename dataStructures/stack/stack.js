class MyStack {
  constructor() {
    this.items = [];
    this.counts = 0;
  }
  push(element) {
    if (!element) {
      throw new Error("invalid input");
    }

    this.items[this.counts] = element;
    this.counts++;
  }

  pop() {
    if (this.counts <= 0) {
      throw new Error("empty stack");
    }

    const value = this.items[this.counts - 1];
    this.items[this.counts - 1] = undefined;
    this.counts--;
    return value;
  }
}

const stack = new MyStack();
stack.push(2);
stack.push(4);
stack.push(5);
stack.pop();
console.log(stack);
