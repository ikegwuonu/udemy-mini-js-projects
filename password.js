const lowercaseletters="abcdefghijklmnopqrstuvwxyz";
const uppercaseletters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers="0123456789";
const symbols="!@#$%^&*()_+-'\",./<>?;:[]\\{}|";

const lengthe1=document.getElementById('length');
const lowercaasee1=document.getElementById('lowercase');
const uppercasee1=document.getElementById('uppercase');
const numberse1=document.getElementById('numbers');
const symbolse1=document.getElementById('symbols');
const generatebtn=document.getElementById('generate');
const passworde1=document.getElementById('password');

generatebtn.addEventListener("click",function() {
	const length=lengthe1.value;
	let characters="";
	let password="";

	if(lowercaasee1.checked){
		characters += lowercaseletters;
	}
	if (uppercasee1.checked) {
		characters+=uppercaseletters;
	}
	if (numberse1.checked) {
		characters+=numbers;
	}
	if (symbolse1.checked) {
		characters+=symbols;
	}
	for (let i = 0; i < length; i++) {
		password+=characters.charAt(Math.floor(Math.random()*characters.length));
	}
	passworde1.value=password;
});
