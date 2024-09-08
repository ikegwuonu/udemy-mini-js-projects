function calculateMaturityAmount() {
	// got input value from element
	const principle=parseFloat(document.getElementById('principle').value);
	const interestRate=parseFloat(document.getElementById('interestRate').value);
	const tenure=parseFloat(document.getElementById('tenure').value);
	//perform calculTION

	const maturityAmount=principle+(principle*interestRate*tenure)/100;
	//display result
	document.getElementById('result').innerText=`Maturity amont: $${maturityAmount.toFixed(2)}`;
}
// attach listener
document.getElementById('calculateBtn').addEventListener('click', calculateMaturityAmount);