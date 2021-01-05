class Queue {
  constructor() {
    // Set initial data.
  }

  enqueue(data) {
    // Add some data to the queue.
  }

  dequeue() {
    // Remove some data from the queue.
  }

  show() {
    // Return the next item in the queue.
  }

  all() {
    // Return all items in the queue.
    let arr = [];

    let node = this.first;

    while(node) {
      arr.push(node.value);
      node = node.next;
    }
  return arr;
  }
}

module.exports = Queue
