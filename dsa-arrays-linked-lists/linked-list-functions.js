const LinkedList = require("./linked-list")


const reverseInPlace = (list) => {

    const reverseNode = (node) => {
        if(node.next) {
            reverseNode(node.next).next = node
        }
        return node
    }

    if(list.length) {

        const node = list.head

        list.head = list.tail
        list.tail = node

        reverseNode(node)

        node.next = null
    }
}

const sortSortedLists = (list1, list2) => {

    const newList = new LinkedList()

    let node1 = list1.head
    let node2 = list2.head

    while( node1 && node2 ) {

        if( node1.val < node2.val ) {
            newList.push(node1.val)
            node1 = node1.next
        }
        else {
            newList.push(node2.val)
            node2 = node2.next
        }
    }
    while( node1 ) {

        newList.push(node1.val)
        node1 = node1.next
    }
    while( node2 ) {

        newList.push(node2.val)
        node2 = node2.next
    }

    return newList
}

const pivot = (list, pivotPt) => {

    let node = list.head

    while( node.next != null ) {

        if( node.next.val < pivotPt ) {
            list.unshift(node.next.val)
            node.next = node.next.next
        }
        node = node.next
    }

}

module.exports = {reverseInPlace, sortSortedLists, pivot}