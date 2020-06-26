class treeNode {
   constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
   }
}
class BST {
  constructor() {
    this.root = null;
}


add(val, root = this.root) {
    if (this.root === null) {
      this.root = new treeNode(val);
      return;
    }

    if (val < root.val) {
      if (root.left === null) {
        root.left = new treeNode(val);
      } else {
        this.add(val, root.left)
      }
    } else {
      if (root.right === null) {
        root.right = new treeNode(val);
      } else {
        this.add(val, root.right);
      }
    }
  }
  contains(val) {
    var runner = this.root;
    while (runner) {
        if (val == runner.val) {
            return true;
        }
        if (val < runner.val) {
            if (!runner.left) {
                return false;
            }
            runner = runner.left;
        } else {
            if (!runner.right) {
                return false;
            }
            runner = runner.right;
        }
    }
    return false;
}
min() {
  var runner = this.root;
  var min = this.root.val;
  while(runner.left) {
      if(runner.left.val < min) {
          min = runner.left.val;
      }
      runner = runner.left;
  }
  return min
}
max() {
  var runner = this.root;
  var max = this.root.val;
  while(runner.right) {
    if(runner.right.val > max) {
      max = runner.right.val;
    }
    runner =  runner.right;
  }
  return max
}
size() {
  if (this.root === null) {
      return 0;
  }
  function sizeHelp(runner) {
      if (!runner) {
          return 0;
      }
      return 1 + sizeHelp(runner.left) + sizeHelp(runner.right);
  }
  return sizeHelp(this.root);
}
isEmpty() {
  if(this.root) {
      return false
  }
  return true
}
}
tree = new BST();
tree.add(10);
tree.add(20);
tree.add(5);
tree.add(7);
tree.add(21);
tree.add(2);
tree.add(9);
tree.add(17);
tree.add(6);
tree.add(4);
console.log(tree);
console.log(tree.contains(10));
console.log(tree.contains('Dojo'));
console.log(tree.min());
console.log(tree.max());
console.log(tree.size());
console.log(tree.isEmpty());
console.log(tree);
