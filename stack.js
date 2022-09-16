//Implementation of Stack data structure
// It follows LIFO operation- Last In First Out

//:Using  Arrays

class MyStack{
    constructor(size){
        this.size = size;
        this.top = -1; //always initialize top with -1 for empty stack
        this.stk = new Array(size);
    }
    //pushing an item to the top
    push(item){
        if(this.top === this.size-1){
            console.log("Stack Overflow");
        }else{
            this.stk[++this.top] = item;
        }
    }
    //removing an item from the top
    pop(){
        if(this.top===-1){
            console.log("Stack is empty");
            return -1
        }
        else{
            return stk[this.top--];
        }
    }
    //getting the value of the top element
    peek(){
        if(this.top ===-1){
            console.log("Stack is Empty");
            return -1;
        }else{
            return stk[this.top];
        }
    }
    //checking if the stack is empty or not ~ boolean
    isEmpty(){
        return this.top === -1;
    }
}

let s1 = new MyStack(3);
s1.push(5);
s1.push(6);
s1.push(7);
// s1.push(8);
console.log(s1.isEmpty());