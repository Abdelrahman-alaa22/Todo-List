const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");


// Function that adds the todo to the HTML
const generateTemplate = todo => {
    const html = `
    <li class="list-group-item d-flex justify-content-between           align-item-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;

    list.innerHTML += html
};

// Form Event Listner that gets the value of the input
addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();

    if(todo.length){
    generateTemplate(todo);
    addForm.reset();
    }

});

// Delete todo's

list.addEventListener('click', e => {

    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }


});

