let myfunc = function (grade) {

    if (grade == 10) {
        console.log('Ohh, ' + grade + ' is Good Grade');
    }

}

myfunc(10);

//function
//-------
//array

const myArray = ['ironman', 'thor', 'cap. america'];

console.log(myArray);

//could get elements using the index
console.log(myArray[0]);

//to get last element
console.log(myArray[myArray.length - 1]);

//it change the data
myArray[1] = 'Thor: the dark world'
console.log(myArray)


//insertion on array - start
//delete element at start
myArray.shift(); //return 0th index element and delete it
console.log(myArray);
//insert element at start
myArray.unshift("Tony Stark");
console.log(myArray);


//insertion on array - end
//delete end element
myArray.pop();
console.log(myArray);

//insert on end
myArray.push('Avengers');
console.log(myArray);

//delete no of elements & insertion on array - middle

// first 1 is the start index, second 1 is the no of element to be deleted, and 3rd is the element that 
// you want to insert
myArray.splice(1, 1, 'Thor: the cold World');
console.log(myArray);


//to do app

const myTodo = []

myTodo.unshift('Learn JS');
myTodo.unshift('Learn Java');
myTodo.unshift('Learn ML');

console.log(myTodo)

for (index = 0; index < myTodo.length; index++) {
    console.log("Your work no." + (index + 1) + " is to " + myTodo[index]);
}

//for each
myTodo.forEach(function (todo) {
    console.log(todo);
})