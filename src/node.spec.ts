import { Node } from "./node";

describe("Node", () => {
  it("should have a constructor by parameters", () => {
    const firstNode = new Node("foo");
    const secondNode = new Node("bar", firstNode);
    const thirdNode = new Node("fooBar", firstNode, secondNode);
    expect(firstNode.data).toBe("foo");
    expect(firstNode.next).toBe(undefined);
    expect(firstNode.prev).toBe(undefined);
    expect(secondNode.data).toBe("bar");
    expect(secondNode.next).toBe(firstNode);
    expect(secondNode.prev).toBe(undefined);
    expect(thirdNode.data).toBe("fooBar");
    expect(thirdNode.next).toBe(firstNode);
    expect(thirdNode.prev).toBe(secondNode);
  });
  it("should have a constructor by copy", () => {
    const firstNode = new Node(new Node("foo"));
    const secondNode = new Node(new Node("bar", firstNode));
    const thirdNode = new Node(new Node("fooBar", firstNode, secondNode));
    expect(firstNode.data).toBe("foo");
    expect(firstNode.next).toBe(undefined);
    expect(firstNode.prev).toBe(undefined);
    expect(secondNode.data).toBe("bar");
    expect(secondNode.next).toBe(firstNode);
    expect(secondNode.prev).toBe(undefined);
    expect(thirdNode.data).toBe("fooBar");
    expect(thirdNode.next).toBe(firstNode);
    expect(thirdNode.prev).toBe(secondNode);
  });
  it("should have an empty constructor", () => {
    const node = new Node();
    expect(node.data).toBe(undefined);
    expect(node.next).toBe(undefined);
    expect(node.prev).toBe(undefined);
  });
});
