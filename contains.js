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

contains(value) {
    var runner = this.head;
    while(runner) {
        if(runner.val == value) {
            return true
        }
        runner = runner.next
    }
    return false
    
    }
 
}

let list =  new LinkedList();
list.add(12);
list.add(24);
list.add(36);
console.log(list.contains(12));
console.log(list.contains(18));
