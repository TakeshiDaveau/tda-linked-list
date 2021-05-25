import { SingleLinkedList } from "./linked-list";
import { Node } from "./node";

describe("SingleLinkedList", () => {
  const n10 = new Node<string>("10");
  const n9 = new Node<string>("9", n10);
  const n8 = new Node<string>("8", n9);
  const n7 = new Node<string>("7", n8);
  const n6 = new Node<string>("6", n7);
  const n5 = new Node<string>("5", n6);
  const n4 = new Node<string>("4", n5);
  const n3 = new Node<string>("3", n4);
  const n2 = new Node<string>("2", n3);
  const n1 = new Node<string>("1", n2);
  describe("size()", () => {
    it("should return the size of a list", () => {
      expect(new SingleLinkedList().size()).toBe(0);
      expect(
        new SingleLinkedList<string>(new Node<string>("head", n1)).size()
      ).toBe(10);
    });
  });
  describe("clear()", () => {
    it("should empty the head of a list", () => {
      const list = new SingleLinkedList<string>(new Node<string>("head", n1));
      list.clear();
      expect(list.size()).toBe(0);
    });
  });
  describe("getFirst()", () => {
    it("should return null when the list is empty", () => {
      const list = new SingleLinkedList<string>();
      expect(list.getFirst()).toBe(null);
    });
    it("should return the first element of a list", () => {
      const list = new SingleLinkedList<string>(new Node<string>("head", n1));
      expect(list.getFirst()?.data).toBe("head");
      expect(list.getFirst()?.next).toEqual(n1);
    });
  });
  describe("getLast()", () => {
    it("should return null when the list is empty", () => {
      const list = new SingleLinkedList<string>();
      expect(list.getLast()).toBe(null);
    });
    it("should return the last element of a list", () => {
      const list = new SingleLinkedList<string>(new Node<string>("head", n1));
      expect(list.getLast()?.data).toBe("10");
      expect(list.getLast()?.next).toBe(null);
    });
  });
  describe("getAt()", () => {
    it("should return null when the list is empty", () => {
      const list = new SingleLinkedList<string>();
      expect(list.getAt(0)).toBe(null);
    });
    it("should return the element at n of a list", () => {
      const list = new SingleLinkedList<string>(new Node<string>("head", n1));
      expect(list.getAt(0)?.data).toBe("head");
      expect(list.getAt(0)?.next).toBe(n1);
      expect(list.getAt(5)?.data).toBe("5");
      expect(list.getAt(5)?.next).toBe(n6);
    });
    it("should return null when index is bigger than the size", () => {
      const list = new SingleLinkedList<string>(new Node<string>("head", n1));
      expect(list.getAt(20)).toBe(null);
    });
  });
});
