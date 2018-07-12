function subTotal(data, diffIn, sumValues){
	var subtotals = {};
	var dataLength = data.length;
	var valuesLength = sumValues.length;
	var i = 0;

	for(i; i < dataLength; i++){
		var currentRow = data[i];

		if(subtotals[currentRow[diffIn]]){
			subtotals[currentRow[diffIn]].data.push(currentRow);
		} else{
			subtotals[currentRow[diffIn]] = {data:[currentRow], totals:{}};
		}

		var j = 0;

		for(j; j < valuesLength; j++){
			var currentKey = sumValues[j];
			var currentValue = subtotals[currentRow[diffIn]].totals[currentKey] || 0;
			subtotals[currentRow[diffIn]].totals[currentKey] = currentValue + parseFloat(currentRow[currentKey]);
		}
	}

	return subtotals;
}
