//Step 2

let employees = 
[ 
{name: "Bruno Mars", hourlyRate: 17, hoursWorked: 40},
{name: "Ferris Bueller", hourlyRate: 20,hoursWorked: 45},
{name:"Ron Swanson", hourlyRate: 24, hoursWorked: 50}
];


//Step 3

function calculateBasePay(rate,hours){
    return rate * Math.min(hours,40);
}

//Step 4

function calculateOvertimePay(rate, hours) {
return  Math.max(hours - 40, 0) * rate * 1.5;
} 
//Step 5
function calculateTaxes(grossPay) {
return grossPay * .15
}

//Step 6

function processPayroll(employee){
    const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked)
    const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked)
    const grossPay = basePay + overtimePay
    const netPay = grossPay - calculateTaxes(grossPay)

return {
    name: employee.name,
    basePay: basePay.toFixed(2),
    overtimePay: overtimePay.toFixed(2),
    grossPay: grossPay.toFixed(2),
    netPay: netPay.toFixed(2)
}
}

//Step 7 
employees.forEach(employee => console.log(processPayroll(employee)));

// for (const employee of employees) {
//     console.log(processPayroll(employee))
// }




