// 1) გაამრავლე თითოეული ელემენტი 3-ზე. Input: [1,2,3] - Output: [3,6,9]
// let arr = [1, 2, 3]
// let newArr = arr.map(item => item * 3)
// console.log(newArr)

// 2) გაფილტრე ისეთი რიცხვები რომლებიც იყოფა უნაშთოდ 3-ზე
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let newArr = arr.filter(item => item % 3 === 0 )
// console.log(newArr)

// 3)დააბრუნე ყველა დადებითი რიცხვის ჯამი
// let arr = [-1, 2, -3, 4, -5, 6, -7, 8, -9]
// let newArr = arr.reduce((acc, item) => item > 0 ? acc + item : acc, 0)
// console.log(newArr)

// 4) მოცემული სტრინგების მასივიდან წაშალე თითოეული სტრინგის ბოლო სიმბოლო let namesArr = ["giorgi","nika","mariami"]
// let namesArr = ["giorgi","nika","mariami"]
// let newArr = namesArr.map(item => item.slice(0, -1))
// console.log(newArr)

// 5) გაამრავლე ყველა ელემენტი მასივში 2-ზე და შემდეგ ამოიღე რიცხვები, რომლებიც იყოფა 3-ზე
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let newArr = arr.map(item => item * 2).filter(item => item % 3 === 0)
// console.log(newArr)

// 6) დაალაგე რიცხვები ზრდადობით let numsArr = [1,-1,-2,-10,111,3,2,5]
// let numsArr = [1,-1,-2,-10,111,3,2,5]
// let newArr = numsArr.sort((a, b) => a - b)
// console.log(newArr)

// 7) გაამრავლე ყველა ელემენტი 2-ზე და დატოვე მხოლოდ ისინი, რომლებიც 5-ზე მეტია.
// let arr = [5, 2, 7, 1, 3, 4, 6, 8, 9]
// let newArr = arr.map(item => item*2).filter(item => item>5)
// console.log(newArr)

// 8) let arr = [1,1,1,1,2,2,3,3,3] დააბრუნე let unque = [1,2,3]
// let arr = [1,1,1,1,2,2,3,3,3]
// let unique = [...new Set(arr)]
// console.log(unique)

// 9) დააბრუნეთ ორი ყველაზე მცირე რიცხვის ჯამს let arr = [-1,20,90,4,5,111]
let arr = [-1,20,90,4,5,111]
let res = arr.sort((a, b) => a - b).slice(0, 2).reduce((acc, item) => acc + item, 0)
console.log(res)
