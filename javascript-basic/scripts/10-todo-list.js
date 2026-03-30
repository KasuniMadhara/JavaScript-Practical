const todoList = []; //empty array

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value; //todo item is stored in the variable name
    
    todoList.push(name); //name(values) is added to the end of the array
    console.log(todoList); //log the array to the console

    inputElement.value = ''; //clear the input field after adding the item
}