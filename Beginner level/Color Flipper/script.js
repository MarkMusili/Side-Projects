let num = 0; 

function changeColor() {
    const randomColor = getRandomColor();
    document.getElementById('bd').style.backgroundColor = randomColor;
	document.getElementById('cv').innerHTML = randomColor;
}

function getRandomColor() {
	return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
