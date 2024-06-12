import "./styles/main.css";
import Node from "./node.js";

export class LinkedList {
  constructor() {
    this.headNode = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.headNode === null) {
      this.headNode = newNode;
    } else {
      let currentNode = this.headNode;
      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value, this.headNode);
    this.headNode = newNode;
  }

  size() {
    let count = 0;
    let currentNode = this.headNode;
    while (currentNode) {
      count++;
      currentNode = currentNode.nextNode;
    }
    return count;
  }

  head() {
    return this.headNode;
  }

  tail() {
    let currentNode = this.headNode;
    if (!currentNode) {
      return null;
    }
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  at(index) {
    let count = 0;
    let currentNode = this.headNode;
    while (currentNode) {
      if (count === index) {
        return currentNode;
      } else {
        count++;

        currentNode = currentNode.nextNode;
      }
    }
    return null;
  }

  pop() {
    let currentNode = this.headNode;
    while (currentNode.nextNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = null;
  }

  contains(value) {
    let currentNode = this.headNode;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      } else {
        currentNode = currentNode.nextNode;
      }
    }
    return false;
  }

  find(value) {
    let count = 0;
    let currentNode = this.headNode;
    while (currentNode) {
      if (currentNode.value === value) {
        return count;
      } else {
        count++;
        currentNode = currentNode.nextNode;
      }
    }
    return null;
  }

  toString() {
    let toStringVal = "";
    let currentNode = this.headNode;
    while (currentNode) {
      toStringVal += "(" + currentNode.value + ") ->";
      currentNode = currentNode.nextNode;
    }
    return toStringVal + "null";
  }
}
