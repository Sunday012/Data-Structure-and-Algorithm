var Stack = function(){
    this.count = 0;
    this.storage = {};

    //Adds a value into the stack
    this.push = function(value){
        this.storage[this.count] = value;
        this.count++;
    }

    //Removes a value from the stack
    this.pop = function(){
        if(this.count === 0){
            return undefined;
        }

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    this.size = function(){
        return this.count;
    }

    this.peek = function(){
        return this.storage[this.count-1]
    }
}

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek())
myStack.push("favourSunday");
console.log(myStack.size());
console.log(myStack.pop());
console.log(myStack.peek());