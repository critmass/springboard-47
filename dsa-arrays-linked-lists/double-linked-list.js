/** Node: node for a singly linked list. */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null
    }
}

/** LinkedList: chained together nodes. */

class DoubleLinkedList {
    constructor(vals = []) {
        this.head = null;
        this.tail = null;
        this.length = 0;

        for (let val of vals) this.push(val);
    }

    /** push(val): add new value to end of list. */

    push(val) {
        const node = new Node(val)
        if (this.head) {
            this.tail.next = node
            node.prev = node
            this.tail = node
            this.length++
        }
        else {
            this.length = 1
            this.head = node
            this.tail = node
        }
    }

    /** unshift(val): add new value to start of list. */

    unshift(val) {
        const node = new Node(val)
        if (this.head) {
            node.next = this.head
            this.head.prev = node
            this.head = node
            this.length++
        }
        else {
            this.length = 1
            this.head = node
            this.tail = node
        }
    }

    /** pop(): return & remove last item. */

    pop() {
        if (!this.head) throw new Error("List empty")
        this.length--
        const toPop = this.tail.val
        if (this.length) {
            this.tail = this.tail.prev
            this.tail.next = null
        }
        else {
            this.head = null
            this.tail = null
        }
        return toPop
    }

    /** shift(): return & remove first item. */

    shift() {
        if (!this.head) throw new Error("List empty")
        this.length--
        const toShift = this.head.val
        if (this.length) {
            this.head = this.head.next
            this.head.prev = null
        }
        else {
            this.head = null
            this.tail = null
        }
        return toShift
    }

    /** getAt(idx): get val at idx. */

    getAt(idx) {
        if (idx >= this.length) throw new Error("Index outside list")
        let node
        if( idx < this.length/2 ) {
            node = this.head
            while (idx) {
                idx--
                node = node.next
            }
            return node.val
        }
        else {
            node = this.tail
            for(let i = this.length - 1; i != idx; i-- ) {
                node = node.prev
            }
        }
        return node.val
    }

    /** setAt(idx, val): set val at idx to val */

    setAt(idx, val) {
        if (idx >= this.length) throw new Error("Index outside list")
        let node
        if (idx < this.length / 2) {
            node = this.head
            while (idx) {
                idx--
                node = node.next
            }
            return node.val
        }
        else {
            node = this.tail
            for (let i = this.length - 1; i != idx; i--) {
                node = node.prev
            }
        }
        node.val = val
    }

    /** insertAt(idx, val): add node w/val before idx. */

    insertAt(idx, val) {
        if (idx > this.length) throw new Error("Index outside list")
        if (idx === this.length) {
            this.push(val)
        }
        else if (idx) {
            const newNode = new Node(val)
            let node = this.head
            while (idx > 1) {
                idx--
                node = node.next
            }
            newNode.next = node.next
            if(node.next) node.next.prev = newNode
            node.next = newNode
            newNode.prev = node
            this.length++
        }
        else {
            this.unshift(val)
        }
    }

    /** removeAt(idx): return & remove item at idx, */

    removeAt(idx) {
        if (idx >= this.length) throw new Error("Index outside list")
        if (idx) {
            let node = this.head
            while (idx > 1) {
                idx--
                node = node.next
            }
            const toRemove = node.next.val
            node.next = node.next.next
            if( node.next ) node.next.prev = node
            return toRemove
        }
        else {
            return this.pop()
        }
    }

    /** average(): return an average of all values in the list */

    average() {
        let sum = 0
        let node = this.head
        while (node) {
            sum = sum + node.val
            node = node.next
        }
        return this.length ? sum / this.length : 0
    }
}

module.exports = DoubleLinkedList;