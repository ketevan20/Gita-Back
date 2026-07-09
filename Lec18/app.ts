// 2)შექმენი პროგრამა, რომელიც ამატებს მომხმარებლის სახელს და ასაკს და აბრუნებს ტექსტს User Nika is 22 years old.
// const createUser = (user: IUser) => {
//     return `User ${user.name} is ${user.age} years old.`;
// }

// interface IUser {
//     name: string;
//     age: number;
// }

// const user: IUser = {
//     name: "nika",
//     age: 23
// }

// console.log(createUser(user));

// 3)აღწერე პროდუქტები ინტერფეისით და გამოითვალე საერთო ფასი.
// თუ ფასი მეტია 100-ზე, დაბეჭდე "Discount available!"

// interface IProduct {
//     name: string;
//     price: number;
// }

// const calculateTotalPrice = (products: IProduct[]) => {
//     const total = products.reduce((acc, curr) => curr.price+acc, 0)
//     if(total > 100) {
//         console.log("discount available!")
//     }
// }

// const products: IProduct[] = [
//   {
//     name: "Laptop",
//     price: 2499,
//   },
//   {
//     name: "Mechanical Keyboard",
//     price: 299,
//   },
//   {
//     name: "Wireless Mouse",
//     price: 149,
//   },
//   {
//     name: "27-inch Monitor",
//     price: 899,
//   },
//   {
//     name: "USB-C Hub",
//     price: 89,
//   }
// ];

// calculateTotalPrice(products);

// 4)
// interface IHero {
//     name: string;
//     age: number;
// }

// interface ISuperHero extends IHero {
//     power: string;
//     level?: string;
// }

// function levelUp(hero: ISuperHero): void {
//     if(hero.age > 30) {
//         hero.level = "Pro";
//     } else {
//         hero.level = "Newbie"
//     }
//     console.log(`Hero ${hero.name} is now at level ${hero.level}.`);
// }

// const hero1: ISuperHero = {
//   name: "Batman",
//   age: 35,
//   power: "Stealth",
// };

// levelUp(hero1);

// 5) დაწერე generic ფუნქცია, რომელიც აბრუნებს მასივის პირველ ელემენტს.
function firstElement<T>(arr: T[]): T {
    return arr[0];
}

const arr1 = [1, 2, 3];
const arr2 = ["a", "b", "c"];

console.log(firstElement(arr1)); 
console.log(firstElement(arr2)); 