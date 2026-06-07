// 1) დაწერე ფუქნცია რომელიც გაფილტრავს ლუწებზე და იპოვი მათ საშუალოს [1,2,3,4,5,6]
// function filterArr(arr) {
//     let newArr = arr.filter(item => item % 2 == 0)
//     let average = newArr.reduce((acc, curr) => acc+curr, 0) / newArr.length
//     console.log(average)
// }

// let arr = [1,2,3,4,5,6]
// filterArr(arr)

// 2) დაწერე ფუნქცია, რომელიც დათვლის სიტყვების რაოდენობას წინადადებაში.
// function countWords(sentence) {
//     let words = sentence.split(" ").length
//     console.log(words)
// }

// let sentence = "I love JavaScript"
// countWords(sentence)

// 3) დაწერე ფუნქიცა რომელიც დააბრუნებს true თუ რიცხვი მარტივია თუ არადა false.
// function primeNumber(num) {
//     if (num < 2) {
//         return false;
//     }

//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }

// console.log(primeNumber(6)); 


// 4) იპოვე ყველაზე გრძელი ისტყვა
// let words = ["dog", "elephant", "cat", "hippopotamus"]

// let max = words[0].length
// let word = words[0]

// for(let i of words) {
//     if(i.length > max) {
//         max = i.length
//         word = i
//     }
// }

// console.log(word, max)

// 5) დააბრუნე ისეთი რიცხვი რომელიც მეორდება უფრო მეტჯერ
// let arr = [3, 5, 3, 2, 5, 5, 3, 5];

// const counts = arr.reduce((acc, curr) => {
//     acc[curr] = (acc[curr] || 0) + 1;
//     return acc;
// }, {});

// const mostFrequent = Object.keys(counts).reduce((max, curr) => {
//     return counts[curr] > counts[max] ? curr : max;
// });

// console.log(mostFrequent);

// 6) let nums = [1, 2, 3, 4, 5, 6, 7, 8] დაწერე ფუქნცია რომელიც დაითვლის რამდენი ლუწი და რამდენი კენტი რიცხვია
// let nums = [1, 2, 3, 4, 5, 6, 7, 8]

// function countOddAndEven(arr) {
//     let count = arr.reduce((acc, curr) => {
//         if(curr % 2 === 0) acc.even ++
//         else acc.odd ++
//         return acc
//     }, { odd: 0, even: 0} )
//     return count;
// }

// console.log(countOddAndEven(nums))


// 7) let nums = [10, 2, 33, 5, 7] დაწერე ფუქნცია როემლიც დააბრუენბს ყველაზე პატარა რიცხვს
let nums = [10, 2, 33, 5, 7];

function findMin(arr) {
    return arr.reduce((min, curr) => {
        return curr < min ? curr : min;
    });
}

console.log(findMin(nums));


