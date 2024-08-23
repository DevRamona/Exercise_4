const recursiveSum = (numbersArray) => {
    return (numbersArray.length === 0) ? 0 : numbersArray[0] + recursiveSum(numbersArray.slice(1))
}