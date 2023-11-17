// Cyclic Rotation Codility

function solution(A, K) {
    const N = A.length;

    // Check if the array is empty or if K is zero
    if (N === 0 || K % N === 0) {
        return A;
    }

    // Calculate the effective number of rotations
    const rotations = K % N;

    // Perform the rotations using loops
    for (let i = 0; i < rotations; i++) {
        // Take out the last element
        const lastElement = A.pop();
        // Insert the last element at the beginning of the array
        A.unshift(lastElement);
    }

    return A;
}

// The condition (N === 0 || K % N === 0) is used to check two cases:

// 1. If the array A is empty (N === 0), in which case there is nothing to rotate, and the function should return the array as is.
// 2. If the number of rotations K is a multiple of the length of the array N (K % N === 0), this means that after rotating the array K times, the array will be in its original state. Therefore, there is no need to perform any rotations, and the function should return the array as is.