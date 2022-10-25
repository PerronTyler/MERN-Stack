const isPrime = num => {
    for(let i = 2, j = Math.sqrt(num); i <= j; i++)
        if(num % i === 0) return false; 
    return num > 1;
    }

const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime
while( primeCount < 1e4 ) {
    if( isPrime(num) ) {
        primeCount++;
    }
    num++;
}
// console.log(`The 10,000th prime number is ${num-1}`);
// console.log(`This took ${performance.now() - start} milliseconds to run`);
// The 10,000th prime number is 104729
// This took 14.617200016975403 milliseconds to run
// 
// The 10,000th prime number is 179424673
// This took 306688.64730000496 milliseconds to run



// recursive
function rFib( n ) {
        if ( n < 2 ) {
            return n;
        }
        return rFib( n-1 ) + rFib( n-2 );
    }
    rFib(20);
    // iterative
    function iFib( n ) {
        const vals = [ 0, 1 ];
        while(vals.length-1 < n) {
            let len = vals.length;
            vals.push( vals[len-1] + vals[len-2] );
        }
        return vals[n];
    }
    iFib(20);
    
    // iterative function should take less time, the recursive is O(n^2)


const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed1 = story.split("").reverse().join("");
function reverseString (str) {
    return [...str].reverse().join('')
}
function reverseString2 (str) {
    let reversed = '';
    for (const character of str) {
        reversed = character + reversed
    }
    return reversed
}
console.log(reversed1);
// 0.101
console.log(reverseString(story));
// 0.102
console.log(reverseString2(story));
// 0.1
