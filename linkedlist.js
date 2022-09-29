class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    isEmpty(){
        return this.size === 0; //true else false
    }
    getSize(){
        return this.size;
    }
    //O(1) ~ constant time
    //adding at the start
    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
          this.head = node;
        } else {
          node.next = this.head;
          this.head = node;
        }
        this.size++;
    }
    //O(n) ~ linear time
    //adding at the last
    append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
        this.head = node;
    } else {
        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = node;
    }
    this.size++;
    }

    insert(value, index){
        if(index<0 || index>this.size){
            console.log('Linked list is invalid');
            return;
        }
        if(index===0){
            this.prepend(value);
        }else{
            const node = new Node(value);
            let prev = this.head;
            for(let i=0; i<index-1; i++){
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }

    //removal at a given index
    removeFrom(index){
        if(index<0 || index>this.size){
            console.log('Linked list is invalid');
            return null;
        }
        let removedNode;
        if(index===0){
            removedNode = this.head;
            this.head = removedNode.next;
        }else{
            let prev = this.head;
            for(let i=0; i<index-1; i++){
                prev = prev.next;
            }
            removedNode = prev.next;
            prev.next = removedNode.next;
        }
        this.size--;
        return removedNode.value;
    }

    removeValue(value){
        if(this.isEmpty()){
            console.log("Linked List is empty");
            return null;   
        }
        let removedNode;
        if(this.head.value === value){
            this.head = this.head.next;
            this.size--;
            return value;
        }else{
            let prev = this.head;
            while(prev.next && prev.next.value !== value){
                prev = prev.next;
            }
            if(prev.next){
                removedNode = prev.next;
                prev.next = removedNode.next;
                this.size--;
                return value;
            }
            return null;
        }
    }

    search(value){
        if(this.isEmpty()){
            console.log('Linked List is empty');
            return -1;
        }
        let i =0;
        let curr = this.head;
        while(curr){
            if(curr.value === value){
                return i;
            }
            curr = curr.next;
            i++;
        }
        return -1;
    }

    print() {
        if (this.isEmpty()) {
          console.log("List is empty");
        } else {
          let curr = this.head;
          let linkedlist = "";
          while (curr) {
            linkedlist += `${curr.value}->`;
            curr = curr.next;
          }
          console.log(linkedlist+"null"); 
        }
        
    }
    
   

}
const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.prepend(50);
list.prepend(100);
list.insert(60, 1);
list.removeFrom(0);

console.log("The size of the linked list is ", list.getSize());
console.log(list.print());