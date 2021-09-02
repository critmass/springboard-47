const Queue = require("./queue")
const Stack = require("./stack")

/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {

    if(!this.root) return 0

    const queue = new Queue()

    queue.enqueue([this.root, 1])

    while(!queue.isEmpty()) {

      const [node, tier] = queue.dequeue()

      if(!node.left && !node.right) return tier

      if(node.left) {
        queue.enqueue([node.left, tier+1])
      }
      if(node.right) {
        queue.enqueue([node.right, tier+1])
      }
    }
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {

    if(!this.root) return 0

    const stack = new Stack()

    stack.push([this.root, 1])
    let maxTier = 0

    while(!stack.isEmpty()) {

      const [node, tier] = stack.pop()

      if(!node.left && !node.right && maxTier<tier) maxTier=tier

      if(node.left) {
        stack.push([node.left, tier + 1])
      }
      if(node.right) {
        stack.push([node.right, tier + 1])
      }
    }
    return maxTier
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {

    let bestSum = 0

    const maxSumHelp = (node) => {
      if(!node) return 0

      const leftSum = maxSumHelp(node.left)
      const rightSum = maxSumHelp(node.right)

      bestSum = Math.max(bestSum, node.val + leftSum + rightSum)

      return Math.max(0, node.val + leftSum, node.val + rightSum)
    }

    maxSumHelp(this.root)

    return bestSum
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if(!this.root) return null

    const stack = new Stack()
    stack.push(this.root)

    let val = null
    while(!stack.isEmpty()) {
      const node = stack.pop()

      if(node.val > lowerBound && (!val || node.val < val)) {
        val = node.val
      }
      if(node.left) stack.push(node.left)
      if(node.right) stack.push(node.right)
    }
    return val
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

    const queue = new Queue()

    queue.enqueue([this.root, 1])

    let node1tier = null
    let node2tier = null

    while (!queue.isEmpty()) {

      const [node, tier] = queue.dequeue()

      if(node1 === node) node1tier = tier
      else if(node2 === node) node2tier = tier

      if (node.left === node1 && node.right === node2) return false
      if (node.left === node2 && node.right === node1) return false

      if (node.left) {
        queue.enqueue([node.left, tier + 1])
      }
      if (node.right) {
        queue.enqueue([node.right, tier + 1])
      }
    }

    if(!node1tier || !node2tier) return false

    return node1tier === node2tier
  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize(tree) {
    if (!tree.root) return []

    const queue = new Queue()

    queue.enqueue(tree.root)

    const serial = []

    while (!queue.isEmpty()) {

      const node = queue.dequeue()

      if( node ) {

        serial.push(node.val)

        queue.enqueue(node.left)
        queue.enqueue(node.right)
      }
      else {
        serial.push(null)
      }

    }

    return serial.join(",")
  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize(stringTree) {

    const arrayTree = stringTree.split(",")
    const newTree = new BinaryTree( new BinaryTreeNode(Number(arrayTree.shift())) )
    const queue = new Queue()

    queue.enqueue(newTree.root)

    while(arrayTree.length) {
      const node = queue.dequeue()
      const leftVal = arrayTree.shift()
      const rightVal = arrayTree.shift()

      if(leftVal.length) {
        node.left = new BinaryTreeNode(Number(leftVal))
        queue.enqueue(node.left)
      }
      if(rightVal.length) {
        node.right = new BinaryTreeNode(Number(rightVal))
        queue.enqueue(node.right)
      }
    }

    return newTree
  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {

    const findAncstors = (nodeToFind, currentNode=this.root) => {
      if( currentNode === nodeToFind ) return [currentNode]
      else if(!currentNode) return false

      const left = findAncstors(nodeToFind, currentNode.left)
      const right = findAncstors(nodeToFind, currentNode.right)

      if(!left && !right) return false
      else if(left) return [currentNode].concat(left)
      else return [currentNode].concat(right)
    }

    const node1Ancestors = findAncstors(node1)
    const node2Ancestors = findAncstors(node2)

    while( node1Ancestors.length ) {
      let node = node1Ancestors.pop()
      if( node2Ancestors.includes(node) ) return node
    }
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
