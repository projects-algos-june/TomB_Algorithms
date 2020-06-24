class Node{
      constructor(val, next = null){
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
  
    display() {
      let i = 0;
      let current = this.head;
      let str = "";
      while (current) {
        str += i + ". " + current.val + " ";
        current = current.next;
        i++
      }
      console.log(str);
    }
  }
  let list = new LinkedList();
  list.add(21);
  list.add(36);
  list.add("Coding");
  list.add("Dojo");
  list.display();

