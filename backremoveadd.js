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
  

    back() {
      var runner = this.head;
      while(runner.next) {
        runner = runner.next
      }

      return runner.val

  }

    removeBack() {
      var runner = this.head;
      while(runner.next.next) {
        runner = runner.next
      }
      runner.next = null;
      return this
    } 
    
    addBack(val) {
      var runner = this.head;
      while(runner.next) {
        runner = runner.next
      }
      runner.next = new Node(val);
      return this
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
    var list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(8);
    list.add(39);
    list.back();
    list.display();
    list.removeBack();
    list.display();
    list.addBack(55);
    list.display();