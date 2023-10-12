class Queue {
  #items = [];

  enqueue(el) {
    this.#items.push(el);
  }
  dequeue() {
    return this.#items.shift();
  }
  front() {
    //console.log( this.#items[0])
    return this.#items[0];
  }
  isEmpty() {
    return !this.#items.length;
  }
  size() {
    return this.#items.length;
  }
  print() {
    let str = this.#items.join(" ");
    console.log(str);
  }
}
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.print();
console.log("Front element: " + queue.front());
console.log(queue.print());
