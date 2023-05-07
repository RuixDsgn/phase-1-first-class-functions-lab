const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers)  {
    return drivers.slice(2, 4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
  return function(num2) {
    return num * num2
  }
}
  
const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

// const fareQuintupler = createFareMultiplier(num1);

function selectDifferentDrivers (drivers, selectingDrivers) {
  return selectingDrivers(drivers)
}
