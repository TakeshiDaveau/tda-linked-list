import { Node } from "./node";
export class SingleLinkedList<T = unknown> {
  #head: Node<T> | null;
  constructor(head: Node<T> | null = null) {
    this.#head = head;
  }

  /**
   * Indicates the size of the element within the list
   *
   * @returns The size of the list
   */
  size() {
    let size = 0;
    let tail = this.#head;
    while (tail?.next) {
      size++;
      tail = tail.next;
    }
    return size;
  }

  /**
   * Remove value from the first head node
   */
  clear() {
    this.#head = null;
  }

  /**
   * Get the first (head) element of the list
   *
   * @returns the first node or null if empty list
   */
  getFirst(): Node<T> | null {
    return this.#head;
  }

  /**
   * Get the last element of the list
   *
   * @returns the last node or null if empty list
   */
  getLast(): Node<T> | null {
    let tail = this.#head;
    while (tail?.next) {
      tail = tail.next;
    }
    return tail;
  }
  /**
   * Return an element at the {index} position
   *
   * @param index index of the element to return
   *
   * @returns null when empty list or index over size of the list, the element otherwise
   */
  getAt(index: number): Node<T> | null {
    let tail = this.#head;
    let counter = 0;
    while (tail?.next) {
      if (counter === index) {
        return tail;
      }
      tail = tail.next;
      counter++;
    }
    if (counter < index) {
      return null;
    }
    return tail;
  }

  insertAtBeginning(node: Node<T>): void {}

  insertAtEnd(node: Node<T>): void {}

  insertAt(index: number, node: Node<T>): void {}

  deleteFirstNode(): void {}

  deleteLastNode(): void {}

  deleteAt(): void {}
}
