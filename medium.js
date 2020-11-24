let vals = [5, 4, 9, 2, 1]

let userNum = parseInt(prompt("Enter the number you would like to search for in the array"))

let test = vals.length

function match(inputArray){

    let error = -1
    
    
    for(i = 0; i < vals.length; i++) {

        if(inputArray[i] == userNum) {
            error = 1
        }
    }
    

        if (error == 1){

            return 'Match! ' + userNum +  ' is in the Array! \n' +
            'located at the index of: ' + i +
            '.\nNot sure what to do with that though....'
        } else if (error == -1){

            return 'Oh no! ' + userNum + ' can not be found... (Error: -1)'
        }
    

}

console.log(match(vals))