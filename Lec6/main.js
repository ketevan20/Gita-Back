// 1) იპოვე გამოსავალი როგორ შეიძლება გაეშვას ჯერ  console.log("one") console.log("two") შემდეგ ფუნქცია აუცილებელია გამოიყენო ფრომისი
// let promise = new Promise((res, rej) => {
//     res();
// })

// function block(){
//     for(let i = 1 ;i <10000000000;i++){}
// }

// console.log("one")
// promise.then(res => block())
// console.log("two")

// 2) ორი პრომისი შექმენი (ერთმა დაარესოლვოს, ერთმა დაარეჯექთოს) და ორივე შემთხვევა დაამუშავე then/catch-ით  ცალცალკეც და “ჯგუფურადაც”  - ჯგუფურად Allsetteld გამოიყენე.
// let promise1 = new Promise((res, rej) => {
//     res("res");
// })
// let promise2 = new Promise((res, rej) => {
//     rej("rej")
// })

// promise1.then(res => console.log(res)).catch(err => console.log(err))
// promise2.then(res => console.log(res)).catch(err => console.log(err))

// Promise.allSettled([promise1, promise2]).then(res => console.log(res))

// 3) შექენი 4 პრომისი (ზოგი resolve, ზოგი reject). დააბრუნე მარტო პირველი დარესოლვებული
// let promise1 = new Promise((res, rej) => {
//     res("promise1");
// })

// let promise2 = new Promise((res, rej) => {
//     rej("promise2")
// })

// let promise3 = new Promise((res, rej) => {
//     res("promise3")
// })

// let promise4 = new Promise((res, rej) => {
//     rej("promise4")
// })

// Promise.any([promise1, promise2, promise3, promise4]).then(res => console.log(res))

// 4) შექმენი 4 ფრომისი  და რედიუსით დაითვალე რამდენია წარმატებული და რამდენი წარუმატებელი
// let promise1 = new Promise((res, rej) => {
//     res("promise1");
// })

// let promise2 = new Promise((res, rej) => {
//     rej("promise2")
// })

// let promise3 = new Promise((res, rej) => {
//     res("promise3")
// })

// let promise4 = new Promise((res, rej) => {
//     res("promise4")
// })

// Promise.allSettled([promise1, promise2, promise3, promise4]).then(res => {
//     let reduced = res.reduce((acc, curr) => {
//         curr.status==='fulfilled' ? acc.warmatebuli++ : acc.warumatebeli++;
//         return acc;
//     }, {warmatebuli: 0, warumatebeli: 0})
//     return reduced
// }).then((res) => console.log(res))

// 5) შექმენი 5 ფრომისი და გაფილტრე ეს ფრომისები დააბრუნე ამრტო წარუმატებლები
// let promise1 = new Promise((res, rej) => {
//     res("promise1");
// })

// let promise2 = new Promise((res, rej) => {
//     rej("promise2")
// })

// let promise3 = new Promise((res, rej) => {
//     res("promise3")
// })

// let promise4 = new Promise((res, rej) => {
//     res("promise4")
// })

// let promise5 = new Promise((res, rej) => {
//     rej("promise5")
// })

// Promise.allSettled([promise1, promise2, promise3, promise4, promise5]).then(res => {
//     console.log(res.filter(el => el.status==='rejected'))
// })

// 6) გაუშვი ეს ორი API ერთდროულად
let api1 = "https://jsonplaceholder.typicode.com/users"
let api2 = "https://jsonplaceholder.typicode.com/posts"

let promise1 = new Promise((res, rej) => {
    fetch(api1).then(result => result.json()).then(result => res(result))  
})

let promise2 = new Promise((res, rej) => {
    fetch(api2).then(result => result.json()).then(result => res(result))
})

Promise.all([promise1, promise2]).then(res => console.log(res))