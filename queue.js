function Queue(){
    collection = [];
    this.print = function(){
        console.log(collection);
    };
    // to add it to the back of the array
    this.enqueue = function(element){
        collection.push(element);
    };
    // removes the first item of the array
    this.dequeue = function(){
        return collection.shift();
    };
    this.front = function(){
        return collection[0];
    };
    this.size = function(){
        return collection.length;
    };
    this.isEmpty = function(){
        return (collection.length === 0);
    }; 
}

var q = new Queue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.print();
q.dequeue();
console.log(q. front());
q.print();

function PriorityQueue(){
  collection = [];
  this.print = function(){
    console.log(collection);
  };
  this.enqueue = function(element){
    if(this.isEmpty()){
       collection.push(element);
    }else{
        var added = false;
        for (var i = 0; i < collection.length; i++){
            if(element[i] < collection[i][1]){
                collection.splice(i, 0, element);
                added = true;
                break;
            }
        }
        if(!added){
            collection.push(element);
        };
    };
  };
  this.dequeue = function(){
    var value =  collection.shift();
    return value[0]; 
  };
  this.front = function(){
    return collection[0]
  };
  this.size = function(){
    return collection.length;
  };
  this.isEmpty = function(){
    return (collection.length === 0);
  };
};

var pq = new PriorityQueue();
pq.enqueue(['foo', 2]);
pq.enqueue(['bar', 3]);
pq.print();
pq.dequeue(['foo', 2]);
console.log(pq.front());
pq.print()