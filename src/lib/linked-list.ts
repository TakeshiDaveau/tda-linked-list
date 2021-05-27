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

  /**
   * Insert a node at the beginning of the liste then shift all others
   * elements
   *
   * @param node  node to add at beginning
   */
  insertFirst(node: Node<T>): void {
    if (!node) {
      return;
    }
    node.next = this.#head;
    this.#head = node;
  }

  /**
   * Add a new node at the end of the liste
   *
   * @param node node to add at the end
   */
  insertLast(node: Node<T>): void {
    if (!node) {
      return;
    }
    if (!this.#head) {
      this.#head = node;
      return;
    }
    let tail = this.#head;
    while (tail?.next) {
      tail = tail.next;
    }
    tail.next = node;
  }

  /**
   * Insert an element inside a linked list with specific position
   *
   * @param index position of the added element
   * @param node node to add
   */
  insertAt(index: number, node: Node<T>): void {
    if (!node) {
      return;
    }
    let counter = 0;
    let tail = this.#head;
    while (tail?.next) {
      if (counter === index - 1) {
        node.next = tail.next;
        tail.next = node;
      }
      tail = tail.next;
      counter++;
    }
  }

  deleteFirst(): void {
    this.#head = this.#head ? this.#head.next : null;
  }

  deleteLast(): void {
    if (!this.#head) {
      return;
    }
    let tail = this.#head;
    while (tail?.next?.next) {
      tail = tail.next;
    }
    tail.next = null;
  }

  deleteAt(index: number): void {
    if (!this.#head) {
      return;
    }
    let counter = 0;
    let tail = this.#head;
    while (tail?.next) {
      if (counter === index - 1) {
        tail.next = tail.next.next;
      }
      // @ts-ignore
      tail = tail.next;
      counter++;
    }
  }
}
