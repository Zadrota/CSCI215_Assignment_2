/* Still missing the mean, median, etc. However the main issue is that I cannot put
multiple numbers in, since it freezes the page (infinite loop somewhere I think).
 */




window.onload = prompt();

//alert for initial page arrival.
function prompt() {
    alert('Please input positive numbers into the box one at a time!');
}

//Accumulates the numbers. I believe this is where it is hanging.
function gather() {
    var incoming = document.getElementsByName("incomingtext")[0].value;
    inclst = incoming.split(' ');
    int = [];

    //converting each item in the list to ints.
    for (i = 0; i < inclst.length; i++) {

        //how to stop entering more numbers.
        if (int[i] == -1) {
            alert('goodbye!');
        } else {
            int.push(parseInt(inclst[i]));
        }
    }
    int.sort();
    primelst = new Array(isPrime(int));
    squarelst = new Array(squares(int));
    evenlst = even(int);
    oddlst = odd(int);
    meanlst = mean(int);
    maxlst = max(int);
    minlst = min(int);
    medianlst = median(int);
    out = 'The minimum value of the numbers is ' + maxlst + ' and the maximum value is ' + minlst + '. The median of the numbers is: ' + medianlst + '. The mean of the numbers is: ' + meanlst + '. The prime numbers are: ' + primelst + '. The squares of the list are: ' + squarelst + '. There are ' + evenlst + ' even numbers and ' + oddlst + ' odd numbers!';
    document.getElementById("output").innerHTML = out;
}

function min(nums){
    minimum = Math.min.apply(null,nums);
    return minimum;
}

function max(nums){
 maximum = Math.max.apply(null,nums);
 return maximum;
}

function median(nums){
    mid = 0;
    bot = Math.floor((nums.length - 1) / 2);
    console.log(bot);
    top = Math.ceil((nums.length - 1) / 2);
    console.log(top);
    mid = (nums[bot] + nums[top]) / 2;
    console.log(mid);
    return mid;
    Math.
}

function mean(nums){
    sum = 0;
    newMean = 0;
    for(i=0;i<nums.length;i++){
        sum += nums[i];
    }
    newMean = sum/nums.length;
    return newMean;
}

//Determines if the number is prime.
function isPrime(nums){
    primes = [];


    for(i=0;i<nums.length;i++) {
        if (nums[i] == 2 || nums[i] == 3 || nums[i] == 5 || nums[i] == 7 || nums[i] == 11 || nums[i] == 13 || nums[i] == 17 || nums[i] == 19 || nums[i] == 23 || nums[i] == 29 || nums[i] == 31 || nums[i] == 37 || nums[i] == 41 || nums[i] == 43 || nums[i] == 47 || nums[i] == 53){
         primes.push(nums[i]);
        }
    }
        /*couldn't get this working, so we go to plan B...
            for (j = 2; i < nums.length; j++) {
                if (nums[i] % 1 == 0) {
                    primes.push(nums[i]);
                }
            }
        }*/
    return primes;
}

//Should return the square of each number
function squares(nums) {
    squres = [];
    for(i=0; i<nums.length;i++) {
        squres.push(nums[i]* nums[i]);
    }
    return squres;
}

//Determines if the # is even or odd
function even(nums){
    numEven = 0;
    for(i=0;i<nums.length;i++) {
        if ((nums[i] % 2) == 0) {
            numEven += 1;
        }
    }
    return numEven;
}

//Determines if the # is even or odd
function odd(nums){
    numOdd = 0;
    for(i=0;i<nums.length;i++) {
        if ((nums[i] % 2) != 0) {
            numOdd += 1;
        }
    }
    return numOdd;
}

