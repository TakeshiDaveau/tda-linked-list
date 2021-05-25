export class Node<T = unknown> {
  public data?: T;
  public next?: Node<T>;
  public prev?: Node<T>;
  constructor(data?: T | Node<T>, next?: Node<T>, prev?: Node<T>) {
    if (data instanceof Node) {
      this.data = data.data;
      this.next = data.next;
      this.prev = data.prev;
    } else {
      this.data = data;
      this.next = next;
      this.prev = prev;
    }
  }
}
