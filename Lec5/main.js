// 1) დაწერე ფუნქცია , რომელიც არგუმენტად იღებს sec-ს და ითვლის უკუსვლით იქმადე სანამ 0-მდე არ მივა
// function func(sec) {
//     let interval = setInterval(() => {
//         console.log(sec);
//         sec--;
//         if(sec < 0) clearInterval(interval);
//     }, 1000);
// }

// func(5);

// 2) დაწერე ფუქნცია ფუქნციას გადააწოდე რიცხვი  და ასევე ლოგე რენდომული რიცხვი იქამდე სანამ ეს გადაცემული და რენდომ რიცხვი არ. დაემთხვევა ერთმამენთს
// function func(num) {
//     let intercal = setInterval(() => {
//         let random = Math.floor(Math.random() * 10);
//         console.log(random);
//         if(random === num) {
//             clearInterval(intercal);
//         }
//     }, 1000);
// }
// func(6);


// 3) და წერე ფუქნცია რომელიც მიიღებს n და callback-ს როცა n > 27-ზე გაუშვი ეს callback-ი რომელიც დააკონსოლებს რომ ეს ნამდვილად მეტია 27-ზე სხვა შემთხვევაში დააკონსოლე რომ n ნაკლებია
// function func(n, callBackFN) {
//     if(n > 27) callBackFN(n);
//     else console.log(`${n} is less than 27`);
// }

// func(18, (n) => console.log(`${n} is greater than 27`));

// 4) დაწერე ფუქნცია რომელიც პარამეტრად მიიღებს API და დააბრუნებს ამ API-ში მყოფ  4 - users. https://jsonplaceholder.typicode.com/users დაწერე ორივენაირად than/catch & async/await
// 1:
// async function func(API) {
//     res = await fetch(API);
//     data = await res.json();
//     data = data.slice(0, 4);
//     console.log(data);
// }

// func("https://jsonplaceholder.typicode.com/users");

// 2:
// function func(API) {
//     fetch(API)
//     .then(res => res.json())
//     .then(data => {
//         data = data.slice(0, 4);
//         console.log(data);
//     })
//     .catch(err => console.log(err));
// }

// func("https://jsonplaceholder.typicode.com/users");

// 5) დააწყვილე reduce-თი ცალკე ვისი ასაკიც მეტია 10 ზე და ვისი ასაკიც ნაკლებია 20
// let people = [
//   { name: "Giorgi", age: 25 },
//   { name: "Nika", age: 15 },
//   { name: "Mariam", age: 30 },
//   { name: "Luka", age: 18 }
// ];

// let result = people.reduce((acc, person) => {
//     if(person.age > 10) {
//         acc["meti 10-ze"] ? acc["meti 10-ze"].push(person.name) : acc["meti 10-ze"] = [person.name];
//     } 
//     if(person.age < 20) {
//         acc["naklebi 20-ze"] ? acc["naklebi 20-ze"].push(person.name) : acc["naklebi 20-ze"] = [person.name];
//     }
//     return acc;
// }, {});

// console.log(result);

// 6)  დაწერე ფუნქცია რომელიც მიიღებს ორ რიცხვს და callback-ს. თუ პირველი მეტია მეორეზე გაუშვი callback და დაუბეჭდე "მეტია", სხვა შემთხვევაში "ნაკლები ან ტოლია".
// function func(a, b, callBackFN) {
//     if(a > b) callBackFN();
//     else console.log("ნაკლები ან ტოლია")
// }

// func(12, 37, () => console.log("მეტია"));

// 7) დაწერე reduce, რომელიც დააჯგუფებს - ცალკე 20-ზე მეტ ფასიან რიცხვებს და ცალკე 20-ზე ნაკლები ან ტოლი ფასიანი ნივთები
let products = [
    { name: "Mouse", price: 15 },
    { name: "Keyboard", price: 45 },
    { name: "USB Cable", price: 7 },
    { name: "Headphones", price: 29.9 },
    { name: "Webcam", price: 52 }
];

let res = products.reduce((acc, curr) => {
    if(curr.price > 20) {
        acc["20-ze meti"].push(curr.name);
    } else {
        acc["20-ze naklebi"].push(curr.name);
    }
    return acc;
}, { "20-ze meti": [], "20-ze naklebi": [] });

console.log(res);