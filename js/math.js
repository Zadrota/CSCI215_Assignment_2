window.onload = prompt();

function prompt() {
    alert('Please input positive numbers into the box one at a time!');
}
var newSet= [];

function gather(){
    var incoming = document.getElementsByName("incomingtext")[0].value;
    int = parseInt(incoming);
    if (int === -1){
        alert('goodbye!');
    }else{
        newSet.push(int);
        document.getElementById("output").innerHTML=calculate(newSet);
    }
}
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
function squares(nums) {

    return nums*nums;
}
function evenOdd(nums){
    if ((nums % 2) == 0) {
            return true;
        } else {
            return false;
        }
}
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
