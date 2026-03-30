const todoList = ['make dinner', 'watch you tube', 'eat ontime']; //empty array

renderTodoList();

function renderTodoList () {
        let todoListHTML = '';


    for (let i = 0; i < todoList.length; i ++) {
        const todo = todoList[i];
        const html = `<p>${todo}</p>`;
    todoListHTML += html;
    };

    console.log(todoListHTML);

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;

}


function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value; //todo item is stored in the variable name
    
    todoList.push(name); //name(values) is added to the end of the array
    console.log(todoList); //log the array to the console

    inputElement.value = ''; //clear the input field after adding the item

    renderTodoList();
}