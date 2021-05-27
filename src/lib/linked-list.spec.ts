import { SingleLinkedList } from "./linked-list";
import { Node } from "./node";

describe("SingleLinkedList", () => {
  let n10: Node<string>,
    n9: Node<string>,
    n8: Node<string>,
    n7: Node<string>,
    n6: Node<string>,
    n5: Node<string>,
    n4: Node<string>,
    n3: Node<string>,
    n2: Node<string>,
    n1: Node<string>;
  beforeEach(() => {
    // Reset the nodes between each executions
    n10 = new Node<string>("10");
    n9 = new Node<string>("9", n10);
    n8 = new Node<string>("8", n9);
    n7 = new Node<string>("7", n8);
    n6 = new Node<string>("6", n7);
    n5 = new Node<string>("5", n6);
    n4 = new Node<string>("4", n5);
    n3 = new Node<string>("3", n4);
    n2 = new Node<string>("2", n3);
    n1 = new Node<string>("1", n2);
  });
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
      expect(list.getAt(5)?.data).toBe(n5.data);
      expect(list.getAt(5)?.next).toBe(n5.next);
    });
    it("should return null when index is bigger than the size", () => {
      const list = new SingleLinkedList<string>(new Node<string>("head", n1));
      expect(list.getAt(20)).toBe(null);
    });
  });
  describe("insertFirst()", () => {
    it("should add the head when list is empty", () => {
      const list = new SingleLinkedList<string>();
      list.insertFirst(new Node<string>("head"));
      expect(list.getAt(0)?.data).toBe("head");
      expect(list.getAt(0)?.next).toBe(null);
      expect(list.getAt(1)).toBe(null);
    });

    it("should add the element at the beginning of the list", () => {
      const newNode = new Node<string>("new-head");
      const head = new Node<string>("head", n1);
      const list = new SingleLinkedList<string>(head);
      list.insertFirst(newNode);
      expect(list.getFirst()?.data).toBe(newNode?.data);
      expect(list.getFirst()?.next).toEqual(newNode?.next);

      expect(list.getAt(1)?.data).toBe(head?.data);
      expect(list.getAt(1)?.next).toEqual(head?.next);

      expect(list.getAt(11)?.data).toBe(n10?.data);
      expect(list.getAt(11)?.next).toEqual(n10?.next);
    });
  });
  describe("insertLast()", () => {
    it("should add the head when list is empty", () => {
      const list = new SingleLinkedList<string>();
      list.insertLast(new Node<string>("head"));
      expect(list.getAt(0)?.data).toBe("head");
      expect(list.getAt(0)?.next).toBe(null);
      expect(list.getAt(1)).toBe(null);
    });

    it("should add the element at the end of the list", () => {
      const newNode = new Node<string>("new-head");
      const head = new Node<string>("head", n1);
      const list = new SingleLinkedList<string>(head);
      list.insertLast(newNode);
      expect(list.getAt(0)?.data).toBe(head?.data);
      expect(list.getAt(0)?.next).toEqual(head?.next);

      expect(list.getLast()?.data).toBe(newNode?.data);
      expect(list.getLast()?.next).toEqual(newNode?.next);
    });
  });
  describe("insertAt", () => {
    it("should add the element at a specific position of the list", () => {
      const newNode = new Node<string>("new-node");
      const head = new Node<string>("head", n1);
      const list = new SingleLinkedList<string>(head);
      list.insertAt(4, newNode);
      expect(list.getFirst()?.data).toBe(head?.data);
      expect(list.getFirst()?.next).toEqual(head?.next);

      expect(list.getAt(4)?.data).toBe(newNode?.data);
      expect(list.getAt(4)?.next).toEqual(newNode?.next);

      expect(list.getLast()?.data).toBe(n10?.data);
      expect(list.getLast()?.next).toEqual(n10?.next);
    });
    it("should NOT add the element if the index is greater than the size of the list", () => {
      const newNode = new Node<string>("new-head");
      const head = new Node<string>("head", n1);
      const list = new SingleLinkedList<string>(head);
      const size = list.size();
      list.insertAt(size + 5, newNode);
      expect(list.size()).toBe(size);
      expect(list.getFirst()?.data).toBe(head?.data);
      expect(list.getFirst()?.next).toEqual(head?.next);

      expect(list.getLast()?.data).toBe(n10?.data);
      expect(list.getLast()?.next).toEqual(n10?.next);
    });
  });

  describe("deleteFirst()", () => {
    it("should not break if empty head", () => {
      const list = new SingleLinkedList<string>();
      expect(list.size()).toBe(0);
      list.deleteFirst();
      expect(list.size()).toBe(0);
    });

    it("should remove the first element (head) of the list", () => {
      const head = new Node<string>("head", n1);
      const list = new SingleLinkedList<string>(head);
      const size = list.size();
      list.deleteFirst();
      expect(list.size()).toBe(size - 1);
      expect(list.getFirst()?.data).toBe(n1?.data);
      expect(list.getFirst()?.next).toEqual(n1?.next);
      expect(list.getLast()?.data).toBe(n10?.data);
      expect(list.getLast()?.next).toEqual(n10?.next);
    });
  });
  describe("deleteLast()", () => {
    it("should not break if empty head", () => {
      const list = new SingleLinkedList<string>();
      expect(list.size()).toBe(0);
      list.deleteLast();
      expect(list.size()).toBe(0);
    });

    it("should remove the last element  of the list", () => {
      const head = new Node<string>("head", n1);
      const list = new SingleLinkedList<string>(head);
      const size = list.size();
      list.deleteLast();
      expect(list.size()).toBe(size - 1);
      expect(list.getFirst()?.data).toBe(head?.data);
      expect(list.getFirst()?.next).toEqual(head?.next);
      expect(list.getLast()?.data).toBe(n9?.data);
      expect(list.getLast()?.next).toEqual(n9?.next);
    });
  });
  describe("deleteAt", () => {
    it("should NOT remove the element if the index is greater than the size of the list", () => {
      const list = new SingleLinkedList<string>();
      expect(list.size()).toBe(0);
      list.deleteAt(0);
      expect(list.size()).toBe(0);
    });

    it("should remove the element at a specific position of the list", () => {
      const head = new Node<string>("head", n1);
      const list = new SingleLinkedList<string>(head);
      const size = list.size();
      list.deleteAt(6);
      expect(list.size()).toBe(size - 1);
      expect(list.getFirst()?.data).toBe(head?.data);
      expect(list.getFirst()?.next).toEqual(head?.next);
      expect(list.getAt(1)?.data).toBe(n1?.data);
      expect(list.getAt(1)?.next).toEqual(n1?.next);
      expect(list.getAt(2)?.data).toBe(n2?.data);
      expect(list.getAt(2)?.next).toEqual(n2?.next);
      expect(list.getAt(3)?.data).toBe(n3?.data);
      expect(list.getAt(3)?.next).toEqual(n3?.next);
      expect(list.getAt(4)?.data).toBe(n4?.data);
      expect(list.getAt(4)?.next).toEqual(n4?.next);
      expect(list.getAt(5)?.data).toBe(n5?.data);
      expect(list.getAt(5)?.next).toEqual(n5?.next);
      expect(list.getAt(6)?.data).toBe(n7?.data);
      expect(list.getAt(6)?.next).toEqual(n7?.next);
      expect(list.getAt(7)?.data).toBe(n8?.data);
      expect(list.getAt(7)?.next).toEqual(n8?.next);

      expect(list.getLast()?.data).toBe(n10?.data);
      expect(list.getLast()?.next).toEqual(n10?.next);
    });
  });
});
