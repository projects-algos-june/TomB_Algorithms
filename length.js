class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(val) {
    var newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      console.log(`added! ${val} as the head of the list!`)
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
      console.log(`added! ${val}`)
    }
    this.size++;
  }



length() {
  var runner = this.head;
  var node = 0;
  while(runner) {
    node += 1;
    runner = runner.next
  }
  return node
    
      
    }
}
 

let list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
console.log(list.length());