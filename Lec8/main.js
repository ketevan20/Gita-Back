// 1) let arr = [1, [2, 3, [4, 5]], 5, [2, [3, 6]]] დაალაგე ზრდადობით და ამოიღე უნიკალურები გამოიყენე ForLoop
// let arr = [1, [2, 3, [4, 5]], 5, [2, [3, 6]]]
// let newArr = arr.flat(Infinity).sort((a, b) => a - b)
// let uniqueArr = [];

// for (let i = 0; i < newArr.length; i++) {
//     if (!uniqueArr.includes(newArr[i])) {
//         uniqueArr.push(newArr[i]);
//     }
// }

// console.log(uniqueArr);


// 2) იპოვე ყველაზე მაღალი rating-ის მქონე პროდუქტი, მაგრამ ისეთი, რომლის ფასიც < 1000.
// let products = [
//   { name:"Phone", price:1200, rating:4.5 },
//   { name:"Laptop", price:2500, rating:4.8 },
//   { name:"Book", price:30, rating:4.9 },
//   { name:"TV", price:800, rating:4.0 }
// ]
// let newArr = products.filter(el => el.price < 1000).sort((a, b) => a.rating - b.rating)
// let product = newArr[newArr.length - 1]
// console.log(product)

// 3) let sentence = "dog cat dog bird cat dog fish bird"
// რედიუსის დახმარებით დათვალე რომელი რამდენჯერ მეორდება და for ლუპის დახმარებით იპოვე მეტჯერგამეორებული
// let sentence = "dog cat dog bird cat dog fish bird"
// let result = sentence.split(" ").reduce((acc, curr) => {
//     if(acc[curr]) acc[curr] += 1
//     else acc[curr] = 1
//     return acc;
// }, { })

// console.log(result)

// let maxWord = "";
// let maxCount = 0;

// for (let word in result) {
//     if (result[word] > maxCount) {
//         maxCount = result[word];
//         maxWord = word;
//     }
// }
// console.log(`${maxWord}: ${maxCount}`);



// 1)დაწერე ფუნქცია for loop-ის გამოყენებით, რომელიც დაითვლის რამდენჯერ გვხვდება კონკრეტული ასო მოცემულ სტრინგში. 
// let str = "Javascript"
// let letter = 'a'

// function countLetter(str, letter) {
//     let count = 0
//     for(let i=0; i<str.length; i++) {
//         if(str[i] == letter) count++
//     }
//     return count
// }

// console.log(countLetter(str, letter))


// 2) დაწერე ფუნქცია, რომელიც შეამოწმებს არის თუ არა სტრინგი პალინდრომი (ეს სიტყვა თუ იკითხება ერთნაირად ესე იგი პალინდრომია.მაგალითად ana, abba,gig) 
// let word = 'ana'

// function palindrome(word) {
//     let reversedWord = []
//     for(let i=word.length-1; i>=0; i--) {
//         reversedWord.push(word[i])
//     }
//     if(reversedWord.join('') === word) return true
//     else return false
// }

// console.log(palindrome(word))


// 3) შექმენი ფუნქცია, რომელიც მიიღებს ორ რიცხვების მასივს, გააერთიანებს მათ, წაშლის დუბლიკატებს და დაითვლის ჯამს. გამოიყენე მასივის მეთოდები და ლოგიკური ოპერატორები საჭიროებისამებრ.
// function mergeUniqueAndSum(arr1, arr2) {
//     let combined = arr1.concat(arr2)
//     combined = [...new Set(combined)]
//     let sum = combined.reduce((acc, curr) => acc + curr, 0)
//     return sum
// }

// let arr1 = [1, 2, 3, 4]
// let arr2 = [3, 4, 5, 6]
// console.log(mergeUniqueAndSum(arr1, arr2))


// 4) შექმენი ფუნქცია ფაქტორიალის დასათვლელად. 
// function factorial(num){
//     let res = 1;
//     for(let i=1; i<=num; i++){
//         res *= i;
//     }
//     return res
// }

// console.log(factorial(5))

// 5)Two Sum - მოძებნე მასივში ის წყვილები, რომელთა ჯამიც უდრის მოცემულ რიცხვს ანუ [1,2,3,4,5,6,-7,-8] ამ მასივს და -15 თუ გადავცემთ მან უნდა დააბრუნოს [6,7]
function twoSum(arr, sum) {
    for(let i=0; i<arr.length; i++) {
        for(let j=i+1; j<arr.length; j++) {
            if(arr[i] + arr[j] === sum) {
                return [arr[i], arr[j]]
            } 
        }
    }
    return []
}
let arr = [1,2,3,4,5,6,-7,-8]
let sum = -15
console.log(twoSum(arr, sum))