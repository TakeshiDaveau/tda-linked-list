export class Node<T = unknown> {
  public data: T | null;
  public next: Node<T> | null;
  public prev: Node<T> | null;
  constructor(data?: T | Node<T>, next?: Node<T>, prev?: Node<T>) {
    if (data instanceof Node) {
      this.data = data.data ?? null;
      this.next = data.next ?? null;
      this.prev = data.prev ?? null;
    } else {
      this.data = data ?? null;
      this.next = next ?? null;
      this.prev = prev ?? null;
    }
  }
}
