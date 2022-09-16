//queue implementation in JavaScript

class MyQueue{
    constructor(size){
        this.front = 0;
        this.rear = 0;
        this.size = size;
        this.queue = new Array(size);
    }
    enqueue(item){
        if(this.size === this.rear){
            console.log("cannot enqueue as queue is full");
        }else{
            this.queue[this.rear] = item;
            this.rear++;
        }
    }
    dequeue(){
        if(this.front===this.rear){
            console.log("cannot dequeue as queue is empty");
        }else{
            for(let i=0; i<this.rear; i++){
                this.queue[i]=this.queue[i+1];
            }
            this.rear--;
        }
    }
    display(){
        if(this.front===this.rear){
            console.log("Queue is empty");
        }else{
            for(let i=this.front; i<this.rear; i++){
                console.log(this.queue[i]);
            }
        }
    }
}

let queue1 = new MyQueue(4);
queue1.enqueue(4);
queue1.enqueue(5);
queue1.enqueue(6);
queue1.enqueue(7);
queue1.enqueue(8);

