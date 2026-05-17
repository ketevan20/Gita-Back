// 1) გაქვს ლეპტოპების მასივი, იპოვე ყველაზე ძვირი და გამოიტანე კონსოლში
// const laptops = [
//  { model: "Dell XPS 13", price: 1800 },
//  { model: "MacBook Pro 14", price: 2499 },
//  { model: "Lenovo ThinkPad X1", price: 2100 },
//  { model: "Asus Zephyrus G14", price: 1999 },
// ];

// let res = laptops.sort((a, b) => b.price - a.price)[0];
// console.log(res);


// 2) შექმენი ობიექტი, რომელსაც ექნება width, height და getArea() მეთოდი, რომელიც დააბრუნებს ფართობს.
// let obj = {
//     width: 10,
//     height: 20,
//     getArea: function() {
//         return this.width * this.height;
//     }
// }
// console.log(obj.getArea());

// 3) დაბეჭდე მხოლოდ იმ სტუდენტების სახელები, რომელთაც passed === true.
// const students = [
//   { name: "Giorgi", score: 85, passed: true },
//   { name: "Nika", score: 50, passed: false },
//   { name: "Mariam", score: 92, passed: true },
//   { name: "Luka", score: 60, passed: false }
// ];

// let res = students.filter(student => student.passed === true);
// for(let student in res) {
//     console.log(res[student].name);
// }


// 4) გაფილტრე ისეთი პროდუქტები, რომლებიც 10$-ზე იაფია და დააბრუნე მხოლოდ მათი სათაურების მასივი.
// const products = [
//   { title: "Pencil", price: 2 },
//   { title: "Notebook", price: 5 },
//   { title: "Backpack", price: 35 },
//   { title: "Ruler", price: 3 },
//   { title: "Calculator", price: 40 }
// ];

// let res = products.filter(product => product.price < 10).map(product => product.title);
// console.log(res);

// 5) დაალაგე ზრდადობით rating-ის მიხედვით
// const movies = [
//   { title: "Inception", rating: 9 },
//   { title: "Avatar", rating: 7.5 },
//   { title: "Joker", rating: 8.2 },
//   { title: "Tenet", rating: 6.9 }
// ];

// let newArr = movies.sort((a, b) => a.rating - b.rating);
// console.log(newArr);

// 6) იპოვე ყველაზე იაფი ტელეფონი და გამოიტანე მხოლოდ მისი model
// const phones = [
//   { model: "iPhone 15", price: 1200 },
//   { model: "Samsung Galaxy S24", price: 950 },
//   { model: "Xiaomi Redmi 13", price: 250 },
//   { model: "Pixel 8", price: 800 }
// ];

// let res = phones.sort((a, b) => a.price - b.price)[0].model;
// console.log(res);

// 7) დაბეჭდე 300- გვერდიანზე მეტი 
// const books = [
//   { title: "Harry Potter", pages: 500 },
//   { title: "The Little Prince", pages: 120 },
//   { title: "Lord of the Rings", pages: 700 },
//   { title: "Animal Farm", pages: 250 },
// ];

// let res = books.filter(book => book.pages > 300)
// for(let book in res) {
//     console.log(res[book].title)
// }

// 8) დაალაგე ზრდადობით და შეკრიბე ფასი
const phones = [
  { model: "iPhone 15", price: 1200 },
  { model: "Samsung Galaxy S24", price: 950 },
  { model: "Xiaomi Redmi 13", price: 250 },
  { model: "Pixel 8", price: 800 }
];

let res = phones.sort((a, b) => a.price - b.price).reduce((acc, curr) => acc + curr.price, 0)
console.log(res);