// Code your solution here



function findMatching(arr, string){
    return arr.filter(driver => string.toLowerCase() === driver.toLowerCase())
}


function fuzzyMatch(arr, string){
    return arr.filter(driver => driver.startsWith(string))
}

function matchName(arr, string){
    return arr.filter(driver => driver.name === string)
}