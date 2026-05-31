// 1) შექმენი Triangle (სამკუთხედი) კლასი, რომელიც იღებს სამ გვერდს (a, b, c) და დაამატე მეთოდები: getPerimeter(), getArea() , isRightTriangle().
// class Triangle {
//     constructor(a, b, c) {
//         this.a = a;
//         this.b = b;
//         this.c = c;
//     }
//     getPerimeter() {
//         console.log(this.a + this.b + this.c);
//     }
//     getArea() {
//         console.log((this.a + this.b + this.c) / 2)
//     }
//     isRightTriangle() {
//         if(this.a + this.c > this.b && this.a + this.b > this.c && this.b + this.c > this.a)
//             console.log("is right triangle")
//         else 
//             console.log("is not right triangle");
//     }
// }

// const triangle = new Triangle(2, 3, 4)
// triangle.getPerimeter()
// triangle.getArea()
// triangle.isRightTriangle()

// 2) შექმენი Smartphone (სმარტფონი) კლასი property-ებით: brand, model, releaseYear. გააკეთე ექსტენშენი GamingPhone, რომელსაც დაემატება gpuScore და batteryCapacity, და დაამატე მეთოდი performanceIndex().
// class Smartphone {
//     constructor(brand, model, releaseYear){
//         this.brand = brand;
//         this.model = model;
//         this.releaseYear = releaseYear;
//     }
// }

// class GamingPhone extends Smartphone {
//     constructor(brand, model, releaseYear, gpuScore, batteryCapacity) {
//         super(brand, model, releaseYear)
//         this.gpuScore = gpuScore;
//         this.batteryCapacity = batteryCapacity;
//     }
//     performanceIndex() {
//         return this.gpuScore + this.batteryCapacity;
//     }
// }

// const phone = new GamingPhone(
//     "Asus",
//     "ROG Phone 9",
//     2025,
//     9500,
//     6000
// );

// console.log(phone.performanceIndex());

// 3)შექმენი CryptoWallet (კრიპტო საფულე) კლასი, მეთოდებით: deposit(), withdraw(), transfer(), getHistory(),
// class CryptoWallet {
//     constructor(owner) {
//         this.owner = owner;
//         this.balance = 0;
//         this.history = [];
//     }

//     deposit(amount) {
//         this.balance += amount;
//         this.history.push(`Deposited ${amount}`);
//     }

//     withdraw(amount) {
//         if (amount > this.balance) {
//             console.log("error");
//             return;
//         }

//         this.balance -= amount;
//         this.history.push(`Withdrawn ${amount}`);
//     }

//     transfer(amount, receiver) {
//         if (amount > this.balance) {
//             console.log("error");
//             return;
//         }

//         this.balance -= amount;
//         this.history.push(`Transferred ${amount} to ${receiver}`);
//     }

//     getHistory() {
//         return this.history;
//     }
// }

// const wallet = new CryptoWallet("Ketevani");

// wallet.deposit(1000);
// wallet.withdraw(200);
// wallet.transfer(300, "Mariami");

// console.log(wallet.balance);      
// console.log(wallet.getHistory());

// 4) შექმენი Wishlist (სურვილების სია) კლასი, რომელიც ინახავს ნივთებს. მეთოდები: addItem(), deleteItem(id), updateItem()
// class Wishlist {
//     constructor(items) {
//         this.items = items;
//     }
//     addItem(item) {
//         this.items.push(item);
//     }
//     deleteItem(id) {
//         this.items = this.items.filter((_, index) => index !== id)
//     }
//     updateItem(id, item) {
//         this.items[id] = item;
//     }
//     getItems() {
//         return this.items;
//     }
// }

// const wishlist = new Wishlist(["samsaxuri", "xelfasi"])
// wishlist.addItem('money')
// wishlist.deleteItem(2)
// wishlist.updateItem(1, 'magali xelfasi')
// console.log(wishlist.getItems())

// 5)შექმენი Freelancer (ფრილანსერი) კლასი მეთოდით calculateEarnings(), რომელიც დათვლის შემოსავალს შესრულებული საათებისა და საათობრივი ტარიფის მიხედვით, დამატებით optional bonus-ს გადამეტებულ საათებზე (მაგ >160 სთ).
class Freelancer {
    constructor(hours, hourlyRate) {
        this.hours = hours;
        this.hourlyRate = hourlyRate
    }
    calculateEarnings() {
        if (this.hours > 160) {
            console.log(`income: ${this.hours * this.hourlyRate + 500}`)
        }
        else {
            console.log(`income: ${this.hours*this.hourlyRate}`)
        }
    }
}

const freelancer = new Freelancer(2, 370);
freelancer.calculateEarnings()