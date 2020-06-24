
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

max(){
    if (this.head === null) {
        return this
    } else {
        let max = this.head.val;
        let current = this.head;
        while(current) {
            if (current.val > max) {
                max = current.val;
            }
            current = current.next;
            
        }
        return `${max} is the maximum value`
    }
}

                   
maxMinAvg() {
    var sum = 0;
    var max = this.head.val;
    var min = this.head.val;
    var runner = this.head;
    while(runner) {
        sum += runner.val;
        if(runner.val > max) {
            max = runner.val;
        }
        else if(runner.val < min) {
            min = runner.val;
        }
        runner = runner.next
    }
     return `max: ${max}, min: ${min}, avg: ${sum/this.size}`
}
}

let list =  new LinkedList();
list.add(12);
list.add(24);
list.add(36);
list.add(10);
list.add(50);
console.log(list.max());
console.log(list.maxMinAvg());