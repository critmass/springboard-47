/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues(node = this.root) {
    if(!node) return 0

    return node.children.reduce( (sum, child) => {
      return sum + this.sumValues(child)
    }, node.val)
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens(node = this.root) {
    if(!node) return 0

    const nodeIsEven = Number(!(node.val%2))

    return node.children.reduce( (evens, child) => {
      return evens + this.countEvens(child)
    },  nodeIsEven)
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound, node=this.root) {
    if(!node) return 0

    const isGreater = Number( node.val > lowerBound )

    return node.children.reduce( (biggerNums, child) => {
      return biggerNums + this.numGreater(lowerBound, child)
    }, isGreater)
  }
}

module.exports = { Tree, TreeNode };
