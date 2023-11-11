const arr1 = ['Amit', 'Binod', 'Chaman', 'Deepak', 'Eisha', 'Firoz', 'Govinda', 'Harsh', 'Iequbal', 'Jatin', 'Kamal', 'Lalit', 'Manish', 'Nitin', 'Omkar', 'Prakash', 'Qamar', 'Rajesh', 'Suresh', 'Tarun', 'Umesh', 'Vikas', 'Waseem', 'Xavier', 'Yogesh', 'Zahir'];

const arr2 = ['Astronaut', 'BasketBall', 'Carrom', 'Disc-throw', 'E-sports', 'Football', 'Gun-man', 'Horse-riding', 'Iron-man']

const arr3 = ['Apple', 'Banana', 'Cherry', 'Dates', 'Egg', 'Fish', 'Grapes', 'Faluda', 'Grapes', 'Heem-cream', 'ienda']

// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
//   }

// function shuffleArray(array) {
//     let i = array.length;
//     while (i > 0) {
//         const j = Math.floor(Math.random() * i);
//         i--;
//         if (array[i] !== array[j]) {
//             [array[i], array[j]] = [array[j], array[i]];
//         } else {
//             i++; // If the values are the same, increment i to reshuffle
//         }
//     }
//     return array;
// }

function shuffleArray(array) {
    let i = array.length;
    while (i > 0) {
        const j = Math.floor(Math.random() * i);
        let attempts = 0;
        while (array[i] === array[j] && attempts < array.length) {
            attempts++;
            i = Math.floor(Math.random() * array.length);
        }
        if (attempts === array.length) {
            break; // Break the loop if it's not possible to find a different value
        }
        [array[i], array[j]] = [array[j], array[i]];
        i--;
    }
    return array;
}
const combinedArray = [...arr2, ...arr3];
const shuffledCombinedArray = shuffleArray(combinedArray);

// const result = [];
// let index = 0;

// for (let i = 0; i < arr1.length; i++) {
//     result.push(arr1[i]);
//     result.push(shuffledArr2[index]);
//     result.push(shuffledArr3[index]);
//     index++;
// }

// console.log(result);

// const result = []; 
// /// working

// for (let i = 0; i < arr1.length; i++) {
//     result.push(arr1[i]);
//     if (shuffledCombinedArray[i % shuffledCombinedArray.length] !== undefined) {
//         result.push(shuffledCombinedArray[i % shuffledCombinedArray.length]);
//     }
// }

// console.log(result);

const result = [];

for (let i = 0; i < arr1.length; i++) {
    if (shuffledCombinedArray[i % shuffledCombinedArray.length] !== undefined) {
        result.push(arr1[i]);
        result.push(shuffledCombinedArray[i % shuffledCombinedArray.length]);
    }
}

console.log(result);

// const result = [];

// for (let i = 0; i < arr1.length; i++) {
//     result.push(arr1[i]);
//     if (shuffledArr2[i % shuffledArr2.length]) {
//         result.push(shuffledArr2[i % shuffledArr2.length]);
//     }
//     if (shuffledArr3[i % shuffledArr3.length]) {
//         result.push(shuffledArr3[i % shuffledArr3.length]);
//     }
// }

// console.log(result);