const inputbox = document.getElementById("input-box");
const list = document.getElementById('list');

function addTask(){
	if (inputbox.value === "") {
		alert("You must write something!");
	} else {
		const li = document.createElement('li');
		li.innerHTML = inputbox.value;
		list.appendChild(li);
		let span = document.createElement("span")
		span.innerHTML = "\u00d7"
		li.appendChild(span);

		inputbox.value = '';
		saveData();
	}
}

document.addEventListener('click', function(event) {
	if (event.target.tagName === 'SPAN') {
		event.target.parentElement.remove();
		saveData();
	}
	else if (event.target.tagName === 'LI'){
		event.target.classList.toggle("checked")
		saveData();
	}
});

function saveData(){
	localStorage.setItem("data", list.innerHTML);
}

function showTask(){
	list.innerHTML = localStorage.getItem("data");
}
showTask();