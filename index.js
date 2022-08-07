// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0, 2);
}


const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

let createFareMultiplier = function(multiValue){
    return function (value) {
        return value * multiValue;
    }
}


let fareDoubler = createFareMultiplier(2);
let fareTripler = createFareMultiplier(3);

let selectDifferentDrivers = function(drivers, returnDriver) {
    return returnDriver(drivers);
    }


   
