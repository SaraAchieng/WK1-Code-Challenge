// Function to create a prompt
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// Function to check the marks
rl.question('Please enter your marks: ', (marks) => {
  
    if(marks > 79 && marks <= 100){
        console.log('A')
    }
    else if(marks >= 60 && marks <= 79) {
        console.log('B')
    }
    else if(marks > 49 && marks <= 59){
        console.log('C')
    }
    else if(marks >= 40 && marks <= 49){
        console.log('D')
    }
    else if(marks >= 0 && marks < 40) {
        console.log('E')
    }
    else{
        console.log("Please enter a number between 0 and 100.")
    }
    
  rl.close();
});