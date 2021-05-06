export class stack {
  constructor() {
    this.stack = [];
    this.top = 0;
  }

  push(value) {
    this.stack.push(value);
    this.top += 1;
  }

  pop() {
    if (this.top !== 0) {
      this.top -= 1;
      return this.stack.pop();
    }
    throw new Error("Stack");
  }

  /* utils */
  static isStack(el) {
    return el instanceof Stack;
  }

  get isEmpty() {
    return this.top === 0;
  }

  get length() {
    return this.top;
  }

  get last() {
    if (this.top !== 0) {
      return this.stack[this.stack.length - 1];
    }

    return null;
  }

}
