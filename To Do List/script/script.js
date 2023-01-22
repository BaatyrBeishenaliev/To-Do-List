let input = document.querySelector('#input');
let button = document.querySelector('#button');
let block = document.querySelector('.block')
let textTask = document.querySelector('.textTask');
let deleteTask = document.querySelector('.deleteTask');
let elem = document.querySelector('.elem');



button.addEventListener('click', function (event) {

    event.preventDefault();

    let task = document.createElement('p');
    task.className = 'task';
    task.innerHTML = input.value;

    block.append(task);

    if (input.value == '') {
        alert('Заполните все поля!');
    }

    task.addEventListener('click', function (event) {
        event.preventDefault();

        task.style.textDecoration = 'line-through';

        window.setTimeout(() => {
            task.style.display = 'none';
        }, 2000)
    })
})