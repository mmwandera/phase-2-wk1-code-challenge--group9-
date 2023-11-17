// Take 1
function solution(A) {
    // an empty object to store the counts
    let counts = {};

    // Iterate over the array
    for (let i = 0; i < A.length; i++) {
        // If the number is already in the object, increment its count
        if (counts[A[i]]) {
            counts[A[i]]++;
        } 
        // Otherwise, add the number to the object with a count of 1
        else {
            counts[A[i]] = 1;
        }
    }

for (var num in counts) {
        // If the count of a number is odd, return that number
        if (counts[num] % 2 !== 0) {
            return Number(num);
        }
    }
}