// 1
let fullName = 'Lika Mamaladze';
fullName = fullName.split(' ');

let firstLatter = fullName[0][0];
let lastLetter = fullName[1][0];

let result = firstLatter.toUpperCase() + '.' + lastLetter.toUpperCase();
console.log(result);

// // 2
let email = " EXAMPLE@MAIL.COM "
email = email.trim().toLowerCase();
console.log(email);
console.log(email.includes('@'));

// // 3
let str = "luka"
let lastLetter = str[str.length - 1].toUpperCase();
console.log(lastLetter);

// 4
for (let i = 1; i < 100; i++) {
    if (i % 3 === 0) {
        return 'Foo';
    }
    if (i % 5 === 0) {
        return 'Bar';
    }
    if (i % 3 === 0 && i % 5 === 0) {
        return 'FooBar';
    } else {
        return i;
    }
}

// 5
let text = "JS is stupid but sometimes cool";
text = text.replace('stupid', 's****d');
console.log(text);

// თეორია
// 1) გვაქვს სამი ცვლადი: let, var, const, var(აღარ გამოიყენება)
// 2) ტიპები: string, number, boolean, null, undefined, object, array
// 3) split() - აქცევს სტრინგს მასივად
// 4) string - პრიმიტიული ტიპია;
// 5) მეთოდეი: toUpperCase(), toLowerCase(), trim(), includes(), slice(), concat(), replace(), split(), length, charAt(), includes()

