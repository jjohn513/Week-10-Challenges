let newArray = new Array()

newArray.push(2, 4, 7, 11, 13, 15)

function averageNumbers (inputArray) {

    let inputSum = 0

    for(i = 0; i < inputArray.length; i++) {

        inputSum = inputArray[i] + inputSum
    }

    newAverage = inputSum/inputArray.length

    return "The average of the number is " + newAverage
}

console.log(averageNumbers(newArray))