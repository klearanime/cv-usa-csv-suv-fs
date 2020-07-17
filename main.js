const fs = require('fs');
const cvData = fs.readFileSync('./owid-covid-usa-data.csv', {encoding:'utf-8'});
const rows = require('./get-rows.js');
const newCases = require('./get-new-cases-by-day.js');
const total = require('./get-total-cases-by-day.js');
const getNewCasesByDay = require('./get-new-cases-by-day.js');

const userInput = process.argv[2];
const searchDate = process.argv[3];
const total = process.argv[4];

//const searchDate = function (lookup) {
//    let(i = 0; lookup.length; i++) {
        if (userInput === 'total') {
            console.log(newCases)
        
    (otherwise)   else {
        
        throw error('Something failed. Please try again.')
            }
        
//const inquiry2 = function (newNumber, totalCases) {
//    for (const items of newNumber) {
} 
        if (searchDate === 'cases for today') {
console.log('Cases for ' + (newCases(searchDate, cvData)) 
        else if (userInput === searchDate || userInput === 'total') {
            console.log(newCases[3], total[5])
     //    then go ahead and get the sum 
        }   else if (userInput === getNewCasesByDay) {
            console.log(total[6])
        } else {
            throw error('type date in YYYY-MM-DD format')
        }
