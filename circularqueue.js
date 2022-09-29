// Implementation of Circular Queue in JavaScript
//using Arrays

class MyCircularQueue{
    constructor(size){
        this.size = size;
        this.front = -1;
        this.rear = -1;
        this.queue = new Array(size);
    }
    isFull(){
        if((this.rear+1)%this.size === this.front){
            return true;
        }else{
            return false;
        }
    }
    isEmpty(){
        if((this.front === -1) && (this.rear===-1)){
            return true;
        }else{
            return false;
        }
    }
    enqueue(item){
        if(this.isFull()){
            console.log("Cannot enqueue as the queue is full");
        }else{
            if(this.front === -1){
                this.front === 0;
            }
            this.rear = (this.rear+1)%this.size;
            this.queue[this.rear] = item;
            return this.front;
        }
    }
    dequeue(){
        let element;
        if(this.isEmpty()){
            console.log("Cannot dequeue as the queue is empty");
        }else{
            element = this.queue[this.front];
            if(this.front === this.rear){
                this.front === -1;
                this.rear === -1;
            }else{
                this.front = (this.front+1)%this.size;
            }
            console.log("deleted item ", element);
        }
    }
    display(){
        if(this.isEmpty()){
            console.log("Cannot display the queue as it is empty");
        }else{
            for(let i= this.front; i<this.rear; i++){
                console.log(queue[i]);
            }
        }
    }
}

let mc1 = new MyCircularQueue(2);
mc1.enqueue(4);
mc1.enqueue(5);
mc1.enqueue(6);
// console.log(mc1.isFull());


//currenlty some implementation error

