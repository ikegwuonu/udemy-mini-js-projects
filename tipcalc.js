function calculateTip() {
	const billAmount=parseFloat(document.getElementById('billamount').value);
	const tipPercentage=parseFloat(document.getElementById('percentage').value);
	// calculate tip
	const tipAmount= billAmount*(tipPercentage/100);
	const totalAmount=tipAmount+billAmount;
	//display tip result
	document.getElementById('tipamount').textContent='$' + tipAmount.toFixed(1);
	document.getElementById('totalamount').textContent="$"+totalAmount;

}