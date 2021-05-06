export class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(value) {
    this.queue.push(value);
  }

  dequeue(value) {
    if (this.queue.length === 0) {
      throw new Error("Queue is empty");
    }

    const result = this.queue[0];
    this.queue.splice(0, 1);
    return result;
  }

  length() {
    return this.queue[0];
  }

  peek() {
    return this.queue[0];
  }

  view() {
    console.log(this.queue);
  }

}


/* queue implementation using closure */

const FunctionalQueue = (function () {
  function Queue () {
    this.queue = [];
  }

  Queue.prototype.enqueue = function (item) {
    this.queue.push(item);
  }

  Queue.prototype.dequeue = function () {
    if (this.queue.length === 0) {
      throw new Error('Queue is Empty');
    }

    const result = this.queue[0];
    this.queue.splice(0, 1); // remove the item at position 0 from the array

    return result;
  }

  Queue.prototype.length = function () {
    return this.queue.length
  }

  Queue.prototype.peek = function () {
    return this.queue[0]
  }

  Queue.prototype.view = function () {
    console.log(this.queue)
  }

  return Queue
}())

export class QueueUsingTwoStack {
  constructor () {
    this.inputStack = []
    this.outputStack = []
  }

  // Push item into the inputstack
  enqueue (item) {
    this.inputStack.push(item)
  }

  dequeue (item) {
    // push all items to outputstack
    this.outputStack = []
    if (this.inputStack.length > 0) {
      while (this.inputStack.length > 0) {
        this.outputStack.push(this.inputStack.pop())
      }
    }
    // display the top element of the outputstack
    if (this.outputStack.length > 0) {
      console.log(this.outputStack.pop())
      // repush all the items to the inputstack
      this.inputStack = []
      while (this.outputStack.length > 0) {
        this.inputStack.push(this.outputStack.pop())
      }
    }
  }

  // display elements of the inputstack
  listIn () {
    let i = 0
    while (i < this.inputStack.length) {
      console.log(this.inputStack[i])
      i++
    }
  }

  // display element of the outputstack
  listOut () {
    let i = 0
    while (i < this.outputStack.length) {
      console.log(this.outputStack[i])
      i++
    }
  }

}
