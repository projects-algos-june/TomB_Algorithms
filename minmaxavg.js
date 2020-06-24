
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
        console.log("This list is empty");
        return this
    } else {
        let max = this.head.value;
        let current = this.head;
        while(current) {
            if (current.value > max) {
                max = current.value;
            }
            // console.log(current.value);
            current = current.next;
            
        }
        return `${max} is the maximum value`
    }
}

// maxMinAvg() {
//     var sum = 0;
//     var max = this.head.value;
//     var min = this.head.value;
//     var runner = this.head;
//     while(runner) {
//         sum += runner.value;
//         if(runner.value > max) {
//             max = runner.value;
//         }
//         else if(runner.value < min) {
//             min = runner.value;
//         }
//         runner = runner.next
//     }
//      return `max: ${max}, min: ${min}', avg: ${sum/this.length}`
// }
}

let list =  new LinkedList();
list.add(12);
list.add(24);
list.add(36);
console.log(list.max());