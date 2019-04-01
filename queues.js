/*Queues*/

function Queue(){
	//collect all the items in the queue
	collection = [];

	//function to print the collection
	this.print = function (){
		console.log(collection);
	};

	//function to push the first item onto the queue
	this.enqueue = function(element){
		collection.push(element);
	};

	//function to take an item off the queue
	this.dequeue = function(element){
		return collection.shift();
	};

	//return what item is first in the array without removing it from an array
	this.front = function(){
		return collection[0];
	};

	//function to return the length of the array
	this.size = function(){
		return collection.length;
	};

	//function to check if queue is empty
	this.isEmpty = function(){
		return (collection.length === 0);
	}
}

var q = new Queue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.print();
q.dequeue();
q.front();
q.print();

