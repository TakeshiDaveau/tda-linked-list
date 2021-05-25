import { SingleLinkedList } from "./linked-list";
describe("SingleLinkedList", () => {
  describe("size()", () => {
    it("should return the size of a list", () => {
      expect(new SingleLinkedList().size()).toBe(0);
    });
  });
});
