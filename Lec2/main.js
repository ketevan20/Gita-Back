// 1) შექმენი ცარიელი მასივი და შეავსე მასში რიცხვები 5-დან 15-მდე
// let arr = []
// for(let i=5; i<15; i++){
//     arr.push(i);
// }
// console.log(arr);

// 2) დაბეჭდე მასივის ელემენტები უკუღმა let arr = [1,2,3,4,5]
// let arr = [1,2,3,4,5]
// for(let i=arr.length-1; i>=0; i--){
//     console.log(arr[i]);
// }

// 3) იპოვე მასივში მინიმალური რიცხვი let arr = [100,2,3,9]
// let arr = [100,2,3,9]
// let min = arr[0];
// for(let i=0; i<arr.length; i++){
//     if(arr[i]<min){
//         min = arr[i];
//     }
// }
// console.log(min);

// 4) ამოიღე შუა 3 ელემენტი slice-ით.let arr = [1,2,3,4,5,6,7]
// let arr = [1,2,3,4,5,6,7]
// let middle = arr.slice(2, 5);
// console.log(middle);

// 5) გააერთიანე ორი მასივი let arr1 = [1,2] let arr2=[3,4]
// let arr1 = [1,2]
// let arr2=[3,4]
// let combined = arr1.concat(arr2)
// console.log(combined); 

// 6) წაშალე დუბლირებული ელემენტები let arr = [1,2,3,4,5,6,6,7,7]
// let arr = [1,2,3,4,5,6,6,7,7]
// let uniqueArr = [...new Set(arr)];
// console.log(uniqueArr);

// 7) გაყავი მასივი ორ ცალკე მასივად (ლუწი და კენტი). მინიშნება: გამოიყენე % 2 === 0  let arr = [1,2,3,4,5,6,7]
// let arr = [1,2,3,4,5,6,7]
// let evenArr = [];
// let oddArr = [];
// for(let i=0; i<arr.length; i++){
//     if(arr[i] % 2 === 0){
//         evenArr.push(arr[i]);
//     } else {
//         oddArr.push(arr[i]);
//     }
// }
// console.log("Even array", evenArr);
// console.log("Odd array", oddArr);

// 8) დაითვალე დადებითი რიცხვების რაოდენობა და უარყოფითი რიცხვების ჯამი.
// let arr = [1, 2, 3, 4, 5, 6, 7, -1, -2, -3, -4];
// let count = 0;
// let sum = 0;
// for(let i=0; i<arr.length; i++){
//     if(arr[i]>0){
//         count++;
//     }
//     else {
//         sum+=arr[i];
//     }
// }
// console.log("Positive numbers:", count);
// console.log("Sum of negative numbers:", sum);

// 9)დააბრუნე მასივის თითოეული ელემენტის ინვერსი (ანუ [1,-2] მაგივრად [-1,2]). მინიშნება: გამოიყენე push(-arr[i])
// let arr = [1, -2, 3, -4, 5];
// let invertedArr = [];
// for(let i=0 ;i<arr.length; i++){
//     invertedArr.push(-arr[i]);
// }
// console.log(invertedArr);

// 10) let arr = [1,[2,[3]],[4] შენი მიზანია მიიღო [1,2,3,4]
// let arr = [1,[2,[3]],[4]];
// let res = arr.flat(Infinity);
// console.log(res);

// 11)
let fruits = ["apple", "banana", "orange", "kiwi"]
fruits.splice(1, 1, "mango")
console.log(fruits);