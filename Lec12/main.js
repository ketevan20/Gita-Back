const fs = require('fs/promises')

// 1)შექმენი 2 ფოლდერი 3 ფაილი, წაშალე მარტო ფოლდერები. შეამომწე lstat-ის მეშვეობით

// async function main() {
//     await fs.mkdir('folder1', {recursive: true})
//     await fs.mkdir('folder2', {recursive: true})
//     await fs.mkdir('folder3', {recursive: true})
//     await fs.writeFile('file1.txt', 'file1')
//     await fs.writeFile('file2.txt', 'file2')
//     await fs.writeFile('file3.txt', 'file3')
//     const info = await fs.readdir(__dirname)
//     for(let item of info) {
//         let infostat = await fs.lstat(item)
//         if (!infostat.isFile()) {
//             await fs.rmdir(item)
//         }
//     }
//     console.log(info)
// }

// main()
// 2)შექმენი  მთავარი ფოლდერი, ფოლდერში აიღე ერთი main.js ამ main.js ით შექმენი (mkdir) ფოლდერი და ამ ფოლდერში ჩაწერე index.js შემდეგ ამ index.js-ით ჩაწერე მთავარფოლდერში message.txt, ამ message.txt-ში რაც გექნება შეატრიალე ეგ სტრინგი და ისევ იგივეში ჩაწერე.
// async function main() {
//     await fs.mkdir('folder', { recursive: true });

//     const mainJS = () => `
//             import fs from "fs/promises"

//             async function CreateInnerFolder() {
//             await fs.mkdir('./inner-folder', { recursive: true });

//             await fs.writeFile('./inner-folder/index.js', \`
//                 const fs = require('fs/promises');
//                 const path = require('path')
                
//                 async function main() {
//                     const pathName = path.join(__dirname, "..", "..", "message.txt")
//                     await fs.writeFile(pathName, "hello");
//                     let readFile = await fs.readFile(pathName, 'utf-8')
//                     let reversed = readFile.split("").reverse().join("");
//                     await fs.writeFile(pathName, reversed);    
//                 }
                
//                 main();
//             \`);
//     }
//             CreateInnerFolder();
//         `;

//     await fs.writeFile('./folder/main.js', mainJS());
// }

// main()

// 3) შექმენი ფოლდერი ამ ფოლდერში გქონდეს 6 ფაილი. 3 ფაილის გაფართოვება უნდა იყოს .txt. 3 ფაილის გაფართოვება უნდა იყოს .js. შენ უნდა იპოვო ,ისეთი ფაილები, რომლის გაფართოვებაცაა .txt და ისინი ჩწერო საერთო all.txt-ში
// async function main() {
//     await fs.mkdir('folder1', {recursive: true})
//     for(let i=1; i<=6; i++) {
//         if(i<=3) await fs.writeFile(`folder1/${i}.txt`, `${i}`)
//         else await fs.writeFile(`folder1/${i}.js`, `${i}`) 
//     }
//     await fs.writeFile('all.txt', "")
//     const info = await fs.readdir('folder1')
//     for(let item of info) {
//         if (item.endsWith('.txt')) {
//             const res = await fs.readFile(`folder1/${item}`, 'utf-8')
//             await fs.appendFile('all.txt', res + '\n')
//         }
//     }
// }
// main()

// 4) დაწერე http სერვერი და გამოდგი 3 ენდფოინითი (/animals,/cars,/motorcycle)
const http = require('http')

const animals = [
    {
        name: "Lion",
        age: 5,
        type: "Mammal"
    },
    {
        name: "Eagle",
        age: 3,
        type: "Bird"
    },
    {
        name: "Shark",
        age: 8,
        type: "Fish"
    }
];

const cars = [
    {
        name: 'car1'
    },
    {
        name: 'car2'
    }
]

const motorcycle = [
    {
        name: 'motorcycle1'
    },
    {
        name: 'motorcycle2'
    }
]

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('hello')
        res.end()
    }
    if(req.url === '/animals') {
        res.writeHead(200, {'content-type': 'application/json'})
        res.write(JSON.stringify(animals))
        res.end()
    }
    if(req.url === '/cars') {
        res.writeHead(200, {'content-type': 'application/json'})
        res.write(JSON.stringify(cars))
        res.end()
    }
    if(req.url === '/motorcycle') {
        res.writeHead(200, {'content-type': 'application/json'})
        res.write(JSON.stringify(motorcycle))
        res.end()
    }
})

server.listen(8080, () => {
    console.log('server running on http://localhost:8080')
})