//Search Array

//Function that sorts array in order 0-9, a-z, and then booleans

function searchArr(arr){
	// create arrays to store results
	let nums = [];
	let words = [];
	let junk = [];
	let result = [];
	//create a loop 
	for(let i = 0; i < arr.length; i++){
		//conditional to check whether arr[i] is a string or a num
		if(typeof(arr[i])=== "number"){
			nums.push(arr[i]);
		}else if(typeof(arr[i]) === "string"){
			words.push(arr[i]
				.toUpperCase());
		}else{
			junk.push[arr[i]];
		}
	}

	nums.sort((a,b)=>{
		return a - b;
	})
	.forEach(e=>{
		e.toString()
		console.log(typeof(e))
	});

	words.sort();

	result = nums.concat(words);


	//REsults
	
	console.log(`\n The result is: \n ${result.sort()}`);
	return result.sort();
}

searchArr([23,6345,23,435,7,90,324,12,2,5,9, "poo", "Tower", "apples","horse", "classic", "apricot", 21345, 4563,1,4132, "Oleg","omega", "342", "2"]);

//searchArr(['1','4321','5243','134', 1,5234,6,12])