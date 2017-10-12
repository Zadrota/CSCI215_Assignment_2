/* Still missing the mean, median, etc. However the main issue is that I cannot put
multiple numbers in, since it freezes the page (infinite loop somewhere I think).
 */




window.onload = prompt();

//alert for initial page arrival.
function prompt() {
    alert('Please input positive numbers into the box one at a time!');
}

//Designed to hold the numbers as they accumulate.
var newSet= [];

//Accumulates the numbers. I believe this is where it is hanging.
function gather(){
    var incoming = document.getElementsByName("incomingtext")[0].value;
    int = parseInt(incoming);
    //how to stop entering more numbers.
    if (int === -1){
        alert('goodbye!');
    }else{
        newSet.push(int);
        document.getElementById("output").innerHTML=calculate(newSet);
    }
}

//Determines if the number is prime.
function isPrime(nums){
    primes = [];
    for(i=0;i<nums.length;i++) {
        for (i = 2; i < nums; i++) {
            if (nums % 1 == 0) {
                primes.push(nums[i]);
            }
        }
    }
    return primes;
}

//Should return the square of each number
function squares(nums) {

    return nums*nums;
}

//Determines if the # is even or odd
function evenOdd(nums){
    if ((nums % 2) == 0) {
            return true;
        } else {
            return false;
        }
}

//combining all the previous functions for final output.
function calculate(nums) {
    primes = [];
    sqrs = [];
    evens = 0;
    odds = 0;
    fin = [];
     for(i=0;i<nums.length;i++){
        primes = isPrime(nums[i]);
        sqrs = squares(nums[i]);
        if (evenOdd(nums[i])){
            evens++;
        }else{
            odds++;
        }
    }
    return ('The prime numbers are: ' + primes + '\n' + 'The squares of the list are: ' + sqrs + '\n' + 'There are ' + evens + ' even numbers and ' + odds + ' odd numbers!');
}
