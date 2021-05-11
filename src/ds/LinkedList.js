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

  async add(element): Promise<void> {
    const node = Object.assign(element);
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
    return this.length === 0
  }

  indexOf(element) {
    var currentNode = this.head
    var index = -1

    while (currentNode) {
      index++

      // Checking if the node is the element we are searching for
      if (currentNode.element === element) {
        return index + 1
      }
      currentNode = currentNode.next
    }

    return -1
  }


  ValueOfIndex(index) {}

  elementAt(index) {
    let current = this.head;
    let count = 0;
    while (count < index) {
      count++;
      current = current.next;
    }

    return current.element;
  }

  addAt(index, element) {
    index--
    var node = new Node(element)

    var currentNode = this.head
    var previousNode
    var currentIndex = 0

    // Check if index is out of bounds of list
    if (index > this.length) {
      return false
    }

    // Check if index is the start of list
    if (index === 0) {
      node.next = currentNode
      this.head = node
    } else {
      while (currentIndex < index) {
        currentIndex++
        previousNode = currentNode
        currentNode = currentNode.next
      }

      // Adding the node at specified index
      node.next = currentNode
      previousNode.next = node
    }

    // Incrementing the length
    this.length++
    return true
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