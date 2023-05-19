let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

//the 'for loop':
//for (let i = 1; i <= answer; i++) {
//    console.log(i);
//}
// i is the variable declared and the initial value is 1 (most of the time it is 0, but for FizzBuzz it must be one)
//i <= answer is the condition, looping until i is greater than answer
// i++ tells our loop to increment i by 1 every iteration (if the user inputs 10 this loop would print numbers 1-10)

for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else {
    console.log(i);
    }
}