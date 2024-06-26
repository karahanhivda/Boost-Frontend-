// If we list all the natural numbers below that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is23. Find the sum of all the multiples of 3 or 5 below 1000. 

let sum = 0;
for (let index = 0; index < 1000; index++) {    
    if(index%5==0 || index%3==0){
        sum+=index;
    }
}
console.log(sum);


// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed n, find the sum of the even-valued terms.

