function sumOfAbsoluteDifferences(numsArr){
	var resultArr = []
	for (i in numsArr){
		for(j in numsArr){
			resultArr[i] += numsArr[i]-numsArr[i+1]
		}

	}
	return resultArr
}