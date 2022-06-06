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
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    let current = this.root;
    while (true) {
      if (val > current.val) {
        if (current.right) {
          current = current.right;
        } else {
          current.right = new Node(val);
          return this;
        }
      } else if (val < current.val) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = new Node(val);
          return this;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, root = this.root) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    if (val > root.val) {
      if (!root.right) {
        root.right = new Node(val);
        return this;
      }
      return this.insertRecursively(val, root.right);
    } else {
      if (!root.left) {
        root.left = new Node(val);
        return this;
      }
      return this.insertRecursively(val, root.left);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.val === val) {
        return currentNode;
      }
      if (currentNode.val > val) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, root = this.root) {
    if (root === null) {
      return undefined;
    }

    if (val > root.val) {
      if (root.right && root.right.val === val) {
        return root.right;
      }
      return this.findRecursively(val, root.right);
    } else {
      if (root.left && root.left.val === val) {
        return root.left;
      }
      return this.findRecursively(val, root.left);
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(root = this.root, arr = []) {
    arr.push(root.val);
    if (root.left) {
      this.dfsPreOrder(root.left, arr);
    }
    if (root.right) {
      this.dfsPreOrder(root.right, arr);
    }
    return arr;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(root = this.root, arr = []) {
    if (root.left) this.dfsInOrder(root.left, arr);
    arr.push(root.val);
    if (root.right) this.dfsInOrder(root.right, arr);
    return arr;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(root = this.root, arr = []) {
    if (root.left) this.dfsPostOrder(root.left, arr);
    if (root.right) this.dfsPostOrder(root.right, arr);
    arr.push(root.val);
    return arr;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let node = this.root;
    let queue = [];
    let data = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    return data;
  }

  //   /** Further Study!
  //    * remove(val): Removes a node in the BST with the value val.
  //    * Returns the removed node. */

  //   remove(val) {}

  //   /** Further Study!
  //    * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  //   isBalanced() {}

  //   /** Further Study!
  //    * findSecondHighest(): Find the second highest value in the BST, if it exists.
  //    * Otherwise return undefined. */

  //   findSecondHighest() {}
}

module.exports = BinarySearchTree;
