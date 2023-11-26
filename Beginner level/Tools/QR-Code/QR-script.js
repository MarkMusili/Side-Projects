const link = document.getElementById('link');
let generateButton = document.getElementById("but");
let container = document.querySelector('.container')

document.addEventListener("DOMContentLoaded", function () {
	generateButton.addEventListener('click', function (){
		if (link.value === "") {
			alert("You must add your link!");
		};
		generateQRcode();
	});


	function generateQRcode() {
		let QRbox = document.createElement('div');
		QRbox.id = 'qrcode';
		
		let inputValue = link.value;

		let qrcode = new QRCode(QRbox, {
			text: inputValue,
			width: 128,
			height: 128,
		});

		let existingQRCode = document.getElementById("qrcode");
		if (existingQRCode) {
			container.removeChild(existingQRCode);
		}

		container.appendChild(QRbox);
	}
});
