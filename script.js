// 1 
let user = {
    firstName: 'giorgi',
    lastName: 'smith',
    age: 25,
    studentStatus: 'active'
}

console.log(user.studentStatus);

//2
let zero = [10, 15, 20, 25, 30, 35, 40, 45, 50]
for (let z = 0; z < zero.length; z++){
    console.log(zero[z]);
}


//3
let numbers = [5, 10, 15, 4, 6, 2, 3, 50, 75, 85]
for (let x = 0; x < numbers.length; x++){
    if(numbers [x] > 5)
    console.log(numbers[x]);

}

//4 

let y = {
    name: 'lasha',
    age: 20,
    studentStatus: 'active'

}
if (y.age > 18) {
    console.log('hello world');
}

else if (y.studentStatus = 'active'){
    console.log('hello');
}

else if ((y.studentStatus = 'active') || (y.age < 25)) {
    console.log('hello world');
}

else {
    console.log('error');
}

//5 

let array = [ 'watermelon',  'pear', 10,  45,  50, 'apple',  'ananas' ] ;

for (let x of array) {
    if(typeof x == 'string') {
        console.log(x);
    }
}

//6

let watermelon = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ] 
for (let x of watermelon) {
    for (let y of x){
        if (y > 0){
            console.log(y);
        }
    }
}   

//7 

let arraySecond = [32, 10, 'hello', null, 'hello2', 50 ]
for (let x = 0 ; x < arraySecond.length; x++) {
    if (typeof arraySecond[x] == 'number' && arraySecond[x]%5 == 0 ) {
        console.log(arraySecond[x]);
    }
}
 


