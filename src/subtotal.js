const subtotal = (data, diffIn, sumValues) => {
	const subtotals = {};

	for(let i = 0; i < data.length; i++){
		const  currentRow = data[i];

		if(subtotals[currentRow[diffIn]]){
			subtotals[currentRow[diffIn]].data.push(currentRow);
		} else {
			subtotals[currentRow[diffIn]] = {data:[currentRow], totals:{}};
		}

		for(let j = 0; j < sumValues.length; j++){
			const currentKey = sumValues[j];
			const currentValue = subtotals[currentRow[diffIn]].totals[currentKey] || 0;
			subtotals[currentRow[diffIn]].totals[currentKey] = currentValue + parseFloat(currentRow[currentKey]);
		}
	}

	return subtotals;
}

module.exports = subtotal;
