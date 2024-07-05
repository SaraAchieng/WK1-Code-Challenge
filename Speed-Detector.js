// Function to create a prompt
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// Function to check the speed
rl.question('Please enter your speed: ', (speed) => {
    const speedLimit = 70;
    const kmPerSec = 5;
    let demeritPoints = 0;


    if(speed < 70) {
        console.log('OK')
    }
    else if( speed > speedLimit){
        demeritPoints = Math.floor((speed - speedLimit) / kmPerSec);
        if(demeritPoints > 12) {
            console.log('License suspended')
        }
        else{
            console.log('Points: ' + demeritPoints)
        }
    }
  rl.close();
});