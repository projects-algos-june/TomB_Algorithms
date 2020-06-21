class Node {
    constructor(value, next=null){
        this.value = value;
        this.next = next;
    }
}

class sll {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    // Code for Display assignment
    display(){
        let i = 0;
        let current = this.head;
        let str = "";
        while (current) {
            str += i + ": " + current.value + " ";
            current = current.next;
            i++; 
        }
        console.log(str);
    }

    addFront(value) {
        if (this.head === null){
            this.head = new Node(value);
            return this;
        } else {
            var temp = this.head;
            this.head = new Node(value);
            this.head.next = temp;
        }
        this.size++;
        return this
    }

    removeFront() {
        if (this.head === null) {
            console.log("This list is empty");
        } else {
            console.log(`Value ${this.head.value} has been removed`);
            this.head = this.head.next;
        }
        return this
    }

    front() {
        if (this.head === null){
            return null
        }
        return this.head.value
    }
    // Code for Contains Assignment
    contains(val){
        if (this.head === null){
            console.log("This list is empty");
            return this
        } else {
            let current = this.head;
            while (current) {
                if (current.value == val){
                    console.log(`The value ${val}, does indeed exist`);
                    return true
                } else {
                    current = current.next;
                }
            }
            return this
        }
    }

    // Code for length assignment
    length(pointer){
        if (this.head !== null){
            let current = this.head;
            let count = 1;
            while (current) {
                count++;
                current = current.next;
            }
            return count
        }
    }

    // Code for Max/Min/Average
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

    min(){
        if (this.head === null) {
            console.log("This list is empty");
            return this
        } else {
            let min = this.head.value;
            let current = this.head;
            while(current){
                if (current.value < min) {
                    min = current.value;
                }
                // console.log(current.value)
                current = current.next;
            }
            return `${min} is the minumum value`
        }
    }

    average(){
        if (this.head === null){
            console.log("This list is empty");
            return this
        } else {
            let total = 0;
            let current = this.head;
            while(current){
                total += current.value;
                current = current.next;
            }
            return `${total/list.length()} is the avaerage value of this list`
        }
    }


    // Code for Back/Remove/Add
    back(){
        if (this.head === null){
            console.log("This list is empty");
            return this
        } else {
            let current = this.head;
            while (current) {
                if (current.next == null) {
                    return current.value
                }
                current = current.next;
            }
            return this
        }
    }

    removeBack(){
        if (this.head === null){
            console.log("This list is empty");
            return this
        } else {
            let current = this.head;
            while (current) {
                if (current.next.next == null) {
                    current.next = null;
                }
                current = current.next
            }
            return this
        }
    }

    addBack(value){
        if (this.head === null){
            this.head = value;
            this.head.next = new Node();
        } else {
            let current = this.head;
            while(current){
                if(current.next == null){
                    current.next = new Node(value);
                    return this
                }
                current = current.next;
            }
            return this
        }
    }

}

var list = new sll();
list.addFront(9);
list.addFront(23);
list.addFront(32);
list.addFront(45);
list.addFront(56);
list.addFront(67);
list.addFront(78);
list.addFront(89);
list.addFront(12);
list.display();
list.removeFront();
list.display();
console.log(list.front());
list.contains(32);
console.log(list.length());
console.log(list.max());
console.log(list.min());
console.log(list.average());
console.log(list.back());
list.removeBack();
list.addBack(123);
list.display();