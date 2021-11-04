// Implemented a Stack using array with getMin functions that will alywas return the smallest value in the stack,
// the approch is done by ceating a second stack to track the min and do comparsion when new value is pushed.
// if the new number is smaller than top of minStack push that value into the minStack as well.

class MyStack {
  constructor() {
    this.items = [];
    this.counts = 0;
  }
  push(num) {
    if (!num) {
      throw new Error("invalid input");
    }

    this.items[this.counts] = num;
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

  peek() {
    return this.items[this.counts - 1];
  }
}

class DataStack extends MyStack {
  constructor() {
    super();
    this.minStack = new MyStack();
  }

  push(num) {
    super.push(num);
    if (num < this.minStack.peek() || this.minStack.counts === 0) {
      this.minStack.push(num);
    }
  }

  pop() {
    if (this.peek() === this.minStack.peek()) {
      this.minStack.pop();
    }
    return super.pop();
  }

  getMin() {
    return this.minStack.peek();
  }
}
