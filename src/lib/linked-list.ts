import { Node } from "./node";
export class SingleLinkedList<T = unknown> {
  head: Node<T> | null;
  constructor(head = null) {
    this.head = head;
  }

  /**
   * Indicates the size of the element within the list
   *
   * @returns The size of the list
   */
  size() {
    let size = 0;
    let cursor = this.head;
    while (cursor?.next) {
      size++;
      cursor = cursor.next;
    }
  }

  /**
   * Remove value from the first head node
   */
  clear() {
    this.head = null;
  }

  getFirst() {}
  getLast() {}
  getAt(index: number): Node<T> | null {
    return null;
  }

  insertAtBeginning(node: Node<T>): void {}

  insertAtEnd(node: Node<T>): void {}

  insertAt(index: number, node: Node<T>): void {}

  deleteFirstNode(): void {}

  deleteLastNode(): void {}

  deleteAt(): void {}
}
