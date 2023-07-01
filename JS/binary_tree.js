/*Tree datastructure
	all data points in the tree are called nodes. The top of the tree is called the root node and from here it branches out into different nodes. Each of which may have more child nodes and so on. 
	Leaf nodes are nodes at the end of the tree that have no children.
	Binary tree only looks at two children for every parent.

*/

class Node{
	constructor(data, left = null, right = null){
		this.data = data;
		this.left = left;
		this.right = right;
	}
}


class BST {
	constructor(){
		this.root = null;
	}
	add(data){
		const node = this.root;
		if(node === null){
			this.root = new Node(data);
			return;
		}else{
			const searchTree = function(node){
				if(data < node.data){
					if(node.left === null){
						node.left = new Node(data);
						return;
					}else if(node.left !== null){
						return searchTree(node.left);
					}
				}else if(data > node.data){
					if(node.right === null){
						node.right = new Node(data);
						return;
					}else if(node.right !== null){
						return searchTree(node.right);
					}
				} else{
					return null;
				}
			}
		}
	}
}