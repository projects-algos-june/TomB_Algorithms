//Add Front

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
  
    addFront(val) {
      if (this.head === null) {
        this.head = new Node(val)
      } else {
        let temp = this.head;
        this.head = new Node(val);
        this.head.next = temp;
        console.log(`Added! ${val}`);
      }
      this.size++;
    }
  
    removeFront() {
      if (this.head === null) {
        return "list is empty";
      } else {
        this.head = this.head.next;
      }
    }

    front() {
      if (this.head === null){
          return null;
      }
      return this.head.value;
  }
 

  var list = LinkedList();
  list.add(1);
  list.add(2);
  list.add(3);
  list.display();
  list.addFront(88);
  list.display();
  list.removeFront();
  list.display();
  list.front();
  list.display();
  





