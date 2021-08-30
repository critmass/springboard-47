const {reverseInPlace, sortSortedLists} = require("./linked-list-functions")
const LinkedList = require("./linked-list")

describe("reverse in place", () => {
    it("works", () => {
        const list  = new LinkedList([2,4,6,8])

        reverseInPlace(list)

        expect(list.head.val).toEqual(8)
        expect(list.head.next.val).toEqual(6)
        expect(list.head.next.next.val).toEqual(4)
        expect(list.tail.val).toEqual(2)
    })
})

describe("sort sorted lists", () => {
    it("works with same length lists", () => {
        const list1 = new LinkedList([1,3,5,7])
        const list2 = new LinkedList([2,4,6,8])

        const list3 = sortSortedLists(list1, list2)



        expect(list3.head.val).toBe(1)

        for(let i = 0; i < list3.length; i++) {
            expect(list3.getAt(i)).toBe(i+1)
        }

        expect(list3.tail.val).toBe(8)
    })
    it("works with first list is longer", () => {
        const list1 = new LinkedList([1,3,5,7,9])
        const list2 = new LinkedList([2,4,6,8])

        const list3 = sortSortedLists(list1, list2)



        expect(list3.head.val).toBe(1)

        for(let i = 0; i < list3.length; i++) {
            expect(list3.getAt(i)).toBe(i+1)
        }

        expect(list3.tail.val).toBe(9)
    })
    it("works with second list is longer", () => {
        const list1 = new LinkedList([1,3,5,7])
        const list2 = new LinkedList([0,2,4,6,8])

        const list3 = sortSortedLists(list1, list2)



        expect(list3.head.val).toBe(0)

        for(let i = 0; i < list3.length; i++) {
            expect(list3.getAt(i)).toBe(i)
        }

        expect(list3.tail.val).toBe(8)
    })
})
