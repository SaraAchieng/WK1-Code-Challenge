const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter your grossSalary: ', (grossSalary) => {
    const personalRelief = 2400;

// Function to calculate the Nhif deduction from the grossSalary
function calculateNhifDeduction(grossSalary){
  if(grossSalary <= 5999){
    console.log("Your NHIF deduction is: 150")
    return grossSalary - 150;
  }
  else if(grossSalary >= 6000 && grossSalary <= 7999){
    console.log("Your NHIF deduction is: 300")
    return grossSalary - 300;
  }
  else if(grossSalary >= 8000 && grossSalary <= 11999){
    console.log("Your NHIF deduction is: 400")
    return grossSalary - 400;
  }
  else if(grossSalary >= 12000 && grossSalary <= 14999){
    console.log("Your NHIF deduction is: 500")
    return grossSalary - 500;
  }
  else if(grossSalary >= 15000 && grossSalary <= 19999){
    console.log("Your NHIF deduction is: 600")
    return grossSalary - 600;
  }
  else if(grossSalary >= 20000 && grossSalary <= 24999){
    console.log("Your NHIF deduction is: 750")
    return grossSalary - 750;
  }
  else if(grossSalary >= 25000 && grossSalary <= 29999){
    console.log("Your NHIF deduction is: 850")
    return grossSalary - 850;
  }
  else if(grossSalary >= 30000 && grossSalary <= 34999){
    console.log("Your NHIF deduction is: 900")
    return grossSalary - 900;
  }
  else if(grossSalary >= 35000 && grossSalary <= 39999){
    console.log("Your NHIF deduction is: 950")
    return grossSalary - 950;
  }
  else if(grossSalary >= 40000 && grossSalary <= 44999){
    console.log("Your NHIF deduction is: 1000")
    return grossSalary - 1000;
  }
  else if(grossSalary >= 45000 && grossSalary <= 49999){
    console.log("Your NHIF deduction is: 1100")
    return grossSalary - 1100;
  }
  else if(grossSalary >= 50000 && grossSalary <= 59999){
    console.log("Your NHIF deduction is: 1200")
    return grossSalary - 1200;
  }
  else if(grossSalary >= 60000 && grossSalary <= 69999){
    console.log("Your NHIF deduction is: 1300")
    return grossSalary - 1300;
  }
  else if(grossSalary >= 70000 && grossSalary <= 79999){
    console.log("Your NHIF deduction is: 1400")
    return grossSalary - 1400;
  }
  else if(grossSalary >= 80000 && grossSalary <= 89999){
    console.log("Your NHIF deduction is: 1500")
    return grossSalary - 1500;
  }
  else if(grossSalary >= 90000 && grossSalary <= 99999){
    console.log("Your NHIF deduction is: 1600")
    return grossSalary - 1600;
  }
  else if(grossSalary >100000){
    console.log("Your NHIF deduction is: 1700")
    return grossSalary - 1700;
  }
}
// function returns the Nssf deduction
function calculateNssfDeduction(grossSalary){
  return grossSalary * 0.06;
};
// function calculates the total housing levy
function calculateHousingLevy(grossSalary){
  return grossSalary * 0.015;
}
// function calculates the total deduction
function calculateTotalDeduction(foo1,foo2){
  
  return foo1 + foo2;
}


// A variable to hold the total deduction
const totalDeduction = calculateTotalDeduction(calculateNssfDeduction(grossSalary),calculateHousingLevy(grossSalary));
console.log("Total Deduction: ", totalDeduction)
// shows the taxable income after total deductions
let taxableIncome = calculateNhifDeduction(grossSalary) - totalDeduction;
console.log("Your taxable income is: ", taxableIncome);

//  function that calculates the PAYE
function calculateGrossTax(taxableIncome){
    if(taxableIncome > 24000) {        
    
        if(taxableIncome <= 24000){
        return taxableIncome  * 0.1;
        }
        else if(taxableIncome  > 24000 && taxableIncome  <= 32334){
        return (taxableIncome - 24000)  * 0.25 + 2400;
        }
        else if(taxableIncome  > 32334 && taxableIncome  <= 500000){
        return (taxableIncome - 32334)  * 0.3 + (taxableIncome - 24000)  * 0.25 + 2400;
        }
        else if (taxableIncome  > 500000 && taxableIncome  <= 800000){
        return (taxableIncome - 500000)  * 0.325 + 20700;
        }
        else if(taxableIncome  > 800000){
        return (taxableIncome - 800000)  * 0.35 + 59700;
        }
    
    }
    else{
        netSalary = taxableIncome
        console.log("Your netSalary is: ", netSalary);
    }
    let grossTax = calculateGrossTax(taxableIncome);
    let netTax = grossTax - personalRelief;
    let netSalary = grossSalary - netTax;

    console.log("Your P.A.Y.E is: ", netTax);
    console.log("You grossTax is: ", grossTax);
    console.log("Your netSalary is: ", netSalary);
} 



})
