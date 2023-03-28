const form = document.getElementById('to-do-form');
const taskList = document.getElementById('task-list');
form.addEventListener('submit', function(e) {
	e.preventDefault();
	const taskInput = document.getElementById('task-input');
	const taskText = taskInput.value.trim();
	if (taskText !== '') {
		const li = document.createElement('li');
		li.innerHTML = `<span>${taskText}</span><button>Del</button>`;
		taskList.append(li);
		taskInput.value = '';
	}
	else{
	  alert("Enter The Task..")
	}
});
taskList.addEventListener('click', function(e) {
	if (e.target.tagName.toLowerCase() === 'button') {
	 e.target.parentElement.remove(); 
	}
});
