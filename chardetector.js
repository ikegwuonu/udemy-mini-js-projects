function detectCharacter() {
	const characterInput=document.getElementById('characterInput');
	const result=document.getElementById('result');
	const character=characterInput.value;

	if(isASCII(character)){
		result.innerText=`${character} is an ASCII character`;
	}
	else{
		result.innerText=`${character} is a Unicode character`;
	}
	// body...
}
function isASCII(character){
	return character.charCodeAt(0)<=127;
}