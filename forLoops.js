// Input Array

const everyone = ['dory', 'bruce', 'nemo', 'gill'];


//Basic Loop 1

function findNemo(array) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === 'nemo') {
			console.log('Found NEMO!');
		}
	}
}

// Way to loop using forEach

const findNemo2 = array => {
	array.forEach(fish => {
		if(fish === 'nemo') {
			console.log('Found NEMO!');
		}
	})
}


//Way to Loop using for of


const findNemo3 = array => {
	for (let fish of array) {
		if(fish === 'nemo') {
			console.log('Found NEMO!');
		}
	}
}




//Running the functions

findNemo(everyone);
findNemo2(everyone);
findNemo3(everyone);

