export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  add(element) {
    const node = new Node(element);
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }

    this.length += 1;
  }

  remove(element) {
    let current = this.head;
    let previous;

    if (current.value === element) {
      this.head = current.next;
    } else {
      while (current.element !== element) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }

    this.length--;
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {

  }

  indexOf() {

  }


  ValueOfIndex(index) {}

  addAt() {
    
  }

  removeAt(index) {
    index -= 1;
    let current = this.head;
    let previous;
    let currentIndex;
    if (index <= 0 || index >= this.length) {
      return null;
    }

    if (index === 0) {
      this.head = current.next;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.length--;
    return current.element;
  }

  print() {
    let current = this.head;
    let count = 0;
    while (count < this.length) {
      count++;
      console.log(current.element);
      current = current.next;
    }
  }

}