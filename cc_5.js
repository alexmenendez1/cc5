let employees = 
[ 
{name: "Bruno Mars", hourlyRate: 17, hoursWorked: 40},
{name: "Ferris Bueller", hourlyRate: 20,hoursWorked: 45},
{name:"Ron Swanson", hourlyRate: 24, hoursWorked: 50}
];


 function calculateBasePay(hourlyRate,hoursWorked){
    console.log(`Hourly Rate is ${hourlyRate}`);
    return hourlyRate * Math.max(hoursWorked,40)
}
function calculateOvertimePay(hourlyRate,hoursWorked){
return 1.5 * hourlyRate * Math.min(hoursWorked,40);
}
