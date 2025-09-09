function saveTodos() {
    const todos = [];
    document.querySelectorAll('#ft_list .todo').forEach(div => {
        todos.push(div.textContent);
    });
    document.cookie = "todos=" + JSON.stringify(todos) + "; path=/";
}

function loadTodos() {
    const cookies = document.cookie.split(';').map(c => c.trim());
    const todoCookie = cookies.find(c => c.startsWith('todos='));
    if (todoCookie) {
        try {
            const todos = JSON.parse(todoCookie.split('=')[1]);
            todos.forEach(text => createTodo(text, false));
        } catch (e) {
            console.error('Failed to load todos', e);
        }
    }
}

function createTodo(text, save = true) {
    const ftList = document.getElementById('ft_list');
    const div = document.createElement('div');
    div.className = 'todo';
    div.textContent = text;

    div.addEventListener('click', () => {
        if (confirm('Do you want to remove this TO DO?')) {
            div.remove();
            saveTodos();
        }
    });

    ftList.insertBefore(div, ftList.firstChild); // insert on top
    if (save) saveTodos();
}

document.getElementById('newBtn').addEventListener('click', () => {
    const todoText = prompt('Enter a new TO DO:');
    if (todoText && todoText.trim() !== '') {
        createTodo(todoText.trim());
    }
});

window.onload = loadTodos;
