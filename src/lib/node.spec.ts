import { Node } from "./node";

describe("Node", () => {
  it("should have a constructor by parameters", () => {
    const firstNode = new Node("foo");
    const secondNode = new Node("bar", firstNode);
    const thirdNode = new Node("fooBar", firstNode, secondNode);
    expect(firstNode.data).toBe("foo");
    expect(firstNode.next).toBe(null);
    expect(firstNode.prev).toBe(null);
    expect(secondNode.data).toBe("bar");
    expect(secondNode.next).toBe(firstNode);
    expect(secondNode.prev).toBe(null);
    expect(thirdNode.data).toBe("fooBar");
    expect(thirdNode.next).toBe(firstNode);
    expect(thirdNode.prev).toBe(secondNode);
  });
  it("should have a constructor by copy", () => {
    const firstNode = new Node(new Node("foo"));
    const secondNode = new Node(new Node("bar", firstNode));
    const thirdNode = new Node(new Node("fooBar", firstNode, secondNode));
    expect(firstNode.data).toBe("foo");
    expect(firstNode.next).toBe(null);
    expect(firstNode.prev).toBe(null);
    expect(secondNode.data).toBe("bar");
    expect(secondNode.next).toBe(firstNode);
    expect(secondNode.prev).toBe(null);
    expect(thirdNode.data).toBe("fooBar");
    expect(thirdNode.next).toBe(firstNode);
    expect(thirdNode.prev).toBe(secondNode);
  });
  it("should have an empty constructor", () => {
    const node = new Node();
    expect(node.data).toBe(null);
    expect(node.next).toBe(null);
    expect(node.prev).toBe(null);
  });
});
