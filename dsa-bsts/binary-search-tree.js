class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if(!this.root) {
      this.root = new Node(val)
      return this
    }
    let node = this.root
    let placeFound = false
    while(!placeFound) {
      if(val > node.val){
        if(node.right) {
          node = node.right
        }
        else {
          node.right = new Node(val)
          placeFound = true
        }
      }
      else {
        if (node.left) {
          node = node.left
        }
        else {
          node.left = new Node(val)
          placeFound = true
        }
      }
    }
    return this
  }

  /** insertRecursively(val): insert a new node into the BST
   * with value val.  Returns the tree. Uses recursion. */

  insertRecursively(val, node = this.root) {
    if(!node) this.root = new Node(val)
    else if(val > node.val) {
      if(node.right) this.insertRecursively(val, node.right)
      else node.right = new Node(val)
    }
    else {
      if (node.left) this.insertRecursively(val, node.left)
      else node.left = new Node(val)
    }
    return this
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let node = this.root
    while(node) {
      if(val > node.val) node = node.right
      else if(val < node.val) node = node.left
      else return node
    }
  }

  /** findRecursively(val): search the tree for a node with
   * value val. return the node, if found; else undefined.
   * Uses recursion. */

  findRecursively(val, node = this.root) {
    if(!node) return undefined
    else if (val > node.val) {
      return this.findRecursively(val, node.right)}
    else if (val < node.val) {
      return this.findRecursively(val, node.left)}
    else return node
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node=this.root) {
    if(!node) return []
    const path = [node.val]
    return path.concat(this.dfsPreOrder(node.left)).concat(this.dfsPreOrder(node.right))
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node=this.root) {
    if (!node) return []
    const path = this.dfsInOrder(node.left)
    path.push(node.val)
    return path.concat(this.dfsInOrder(node.right))
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node=this.root) {
    if(!node) return []
    const path = this.dfsPostOrder(node.left).concat(this.dfsPostOrder(node.right))
    return path.concat([node.val])
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const queue = [this.root]
    const path = []

    while(queue.length) {
      const node = queue.shift()
      path.push(node.val)

      if(node.left ) queue.push(node.left)
      if(node.right) queue.push(node.right)
    }
    return path
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

    const replaceNode = (nodeToReplace) => {

      let replacement = nodeToReplace.right
      let parentReplacement
      while(replacement.left!=null) {
        parentReplacement = replacement
        replacement = replacement.left
        if(!replacement.left){
          if(replacement.right!=null) {
            parentReplacement.left = replaceNode(replacement)
            parentReplacement.left.left  = replacement.left
            parentReplacement.left.right = replacement.right
          }
          else {
            parentReplacement.left = null
          }
        }
      }

      return replacement
    }

    let node = this.root
    let parent

    // find the node to replace
    while( node.val !== val ) {
      parent = node
      if( node.val > val ) node = node.left
      else node = node.right
    }

    if(!node.right && !node.left) {
      // if the node is a leaf
      if(!parent) this.root = null
      else {
        if( parent.left === node ) parent.left = null
        else parent.right = null
      }
    }
    else if(!node.right) {
      // if the node doesn't have a right child
      if(!parent) this.root = node.left
      else if( parent.left === node ) parent.left = node.left
      else parent.right = node.left
    }
    else if(!node.left) {
      // if the node doesn't have a left child
      if(!parent) this.root = node.right
      else if( parent.left === node ) parent.left = node.right
      else parent.right = node.right
    }
    else {
      // if there is both a left and a right child
      if (!parent) {
        this.root = replaceNode(node)
        this.root.left = node.left
        this.root.right = node.right
      }
      else if (parent.left === node) {
        parent.left = replaceNode(node)
        parent.left.left = node.left
        parent.left.right = node.right
      }
      else {
        parent.right = replaceNode(node)
        parent.right.left = node.left
        parent.right.right = node.right
      }
    }
    // console.log(val,this.bfs())
    return node
  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced,
   * false otherwise. */

  isBalanced() {
    let currTier = 0
    const queue = [[this.root,currTier]]
    let tierCount = 2 ** currTier
    while(queue.length) {
      const [node, tier] = queue.shift()
      if( tier != currTier ) return false
      if(node.left) queue.push([node.left,currTier+1])
      if(node.right) queue.push([node.right,currTier+1])
      tierCount--
      if(!tierCount) {
        currTier++
        tierCount = 2 ** currTier
      }
    }
    return true
  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the
   * BST, if it exists.  Otherwise return undefined. */

  findSecondHighest() {
    if(!this.root) return undefined
    let highest = 0
    let secondHighest = 0
    const stack = [this.root]
    while(stack.length) {
      const node = stack.pop()
      if(node.val > highest) {
        secondHighest = highest
        highest = node.val
      }
      else if(node.val > secondHighest) {
        secondHighest = node.val
      }
      else {
        return secondHighest
      }
      if(node.right) stack.push(node.right)
      if(node.left) stack.push(node.left)
    }
    return secondHighest || this.root.val
  }
}

module.exports = BinarySearchTree;
