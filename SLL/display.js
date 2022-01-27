class SLLNode { 
    constructor(val) {
        this.value = val; 
        this.next = null; 
    }
}

class SLL {
    constructor() {
        this.head = null;
    }
    // Add to front method
    addFront(value) {
        var newNode = new SLLNode(value); 
        newNode.next = this.head; 
        this.head = newNode; 
        return this.head; 
    }

    // Remove from front of list
    removeFront() {
        if (this.head == null) {
            return this.head;
        }
        var removedNode = this.head;
        this.head = removedNode.next; 
        removedNode.next = null;
        return this.head;
    }

    // Return head value
    front() {
        if (this.head == null) {
            return null;
        } else {
            return this.head.value;
        }
    }

    // Display all node values
    display() {
        var listStr = ""; 
        if (this.head == null) {
            return "";
        }
        listStr += this.head.value; 
        var runner = this.head.next;
        while (runner != null) {
            listStr += ", " + runner.value; 
            runner = runner.next;
        }
        return listStr;
    }
}