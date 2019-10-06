const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector('.search input');


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






// The filter function
const filterTodos = term => {

    Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.add('filtered'))

    Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.remove('filtered'))
    
};


// The search bar
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});

