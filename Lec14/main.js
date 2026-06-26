#!/usr/bin/env node
// import { convertToUpperCase, longestWord, palindrome } from "./utils/helper.js";

// 1)შექმენი utils/helepr.js. შექმენი ფუნქცია რომელსაც მიიღებს სტრინგს და გადააქცევს capital letter-ად. აუცილებელია გამოიყენო module(package-დან შეცვალე)
// console.log(convertToUpperCase("hello world"))

// 2)დაწერე ფუქნცია რომელიც შეამოწმებს გადმოცემული სტრინგი პალინდრომია თუ არა (ანუ ორივე მხრიდან თუ ერთნაირად იკითხება).აუცილებელია module(package-დან შეცვალე) გამოიყენო
// console.log(palindrome("hello world"))
// console.log(palindrome("ara"))

// 3)დაწერე ფუქნცია რომელიც იპოვის ყველაზე გრძელ სიტყვას როცა გადავცემ (I love JavaScript very much) - უნდა დააბრუნოს JavaScript. აუცილებელია გამოიყენო module.
// console.log(longestWord('I love JavaScript very much'))


// 4)შექმენი სერვერი სადაც გექნება როუტები,"/","/users","/posts".
// აუცილებელია გაუკეთო ორივეს pagination,id-ის მეშვეობით ძებნა და /users ასევე დაამატე name-ით ძებნა
// import http from 'http'
// import url from 'url'
// import queryString from 'querystring'
// import fs from 'fs/promises'

// const PORT = 8080

// const server = http.createServer(async (req, res) => {
//     res.writeHead(200, { "content-type": "application.json" })

//     // query parse
//     const parsedURL = url.parse(req.url)
//     const query = queryString.parse(parsedURL.query)

//     // read users + parse
//     const readUserData = await fs.readFile('users.json', 'utf-8')
//     const parsedUsers = JSON.parse(readUserData)

//     // read posts + parse
//     const readPostsData = await fs.readFile('posts.json', 'utf-8')
//     const parsedPosts = JSON.parse(readPostsData)

//     if (parsedURL.pathname === '/') {
//         return res.end('hello world')
//     } else if (parsedURL.pathname === '/users') {
//         if (query.id) {
//             const findUser = parsedUsers.find(el => el.id === Number(query.id))
//             if (!findUser) {
//                 return res.end("user not found")
//             }
//             return res.end(JSON.stringify(findUser))
//         }
//         if (query.name) {
//             const findUser = parsedUsers.find(el => el.name === query.name)
//             if (!findUser) {
//                 return res.end("user not found")
//             }
//             return res.end(JSON.stringify(findUser))
//         }
//         let { page = 1, take = 10 } = query
//         if (take > 10) {
//             take = 10
//         }
//         const result = parsedUsers.slice((page - 1) * take, page * take)
//         return res.end(JSON.stringify(result))
//     } else if (parsedURL.pathname === '/posts') {
//         if (query.id) {
//             const findPost = parsedPosts.find(el => el.id === Number(query.id))
//             if (!findPost) {
//                 return res.end("post not found")
//             }
//             return res.end(JSON.stringify(findPost))
//         }
//         let { page = 1, take = 10 } = query
//         if (take > 10) {
//             take = 10
//         }
//         const result = parsedPosts.slice((page - 1) * take, page * take)
//         return res.end(JSON.stringify(result))
//     }
// })

// server.listen(PORT, () => {
//     console.log("server running on http://localhost:8080")
// })



// 5) შექმენი products-cli,რომელსაც ექნება დამატება,წაკითხვა,id-ის მიხედვით წაკითხვა, წაშლა და აფდეითი.fields(name,description,date,category) + მე თუ გავატან option ის მიხედვით --isexpire. უნდა შეამოწმოს თარიღი და დაამატოს ვადა აქვს გასული თუ არა
import { Command } from "commander";
import fs from "fs/promises";

const program = new Command();

program
    .command("add")
    .description("Add product")
    .argument("name")
    .argument("description")
    .argument("date")
    .argument("category")
    .action(async (name, description, date, category) => {
        const data = await fs.readFile("products.json", "utf-8");
        const products = JSON.parse(data);

        const lastId = products[products.length - 1]?.id || 0;

        products.push({
            id: lastId + 1,
            name,
            description,
            date,
            category,
        });

        await fs.writeFile("products.json", JSON.stringify(products));
    });

program
    .command("read")
    .description("Read products")
    .option("--isexpire")
    .action(async (options) => {
        const data = await fs.readFile("products.json", "utf-8");
        const products = JSON.parse(data);

        if (options.isexpire) {
            const today = new Date();

            const result = products.map((product) => ({
                ...product,
                isExpired: new Date(product.date) < today,
            }));

            console.log(result);
        } else {
            console.log(products);
        }
    });

program
    .command("readById")
    .description("Read product by id")
    .argument("id")
    .action(async (id) => {
        const data = await fs.readFile("products.json", "utf-8");
        const products = JSON.parse(data);

        const product = products.find(el => el.id === Number(id));

        console.log(product);
    });

program
    .command("delete")
    .description("Delete product")
    .argument("id")
    .action(async (id) => {
        const data = await fs.readFile("products.json", "utf-8");
        const products = JSON.parse(data);

        const filtered = products.filter(el => el.id !== Number(id));

        await fs.writeFile("products.json", JSON.stringify(filtered));

        console.log("Product deleted.");
    });

program
    .command("update")
    .description("Update product")
    .argument("id")
    .argument("name")
    .argument("description")
    .argument("date")
    .argument("category")
    .action(async (id, name, description, date, category) => {
        const data = await fs.readFile("products.json", "utf-8");
        const products = JSON.parse(data);

        const index = products.findIndex(el => el.id === Number(id));

        if (index === -1) {
            console.log("Product not found");
            return;
        }

        products[index] = {
            ...products[index],
            name,
            description,
            date,
            category,
        };

        await fs.writeFile("products.json", JSON.stringify(products));

        console.log("Product updated.");
    });

program.parse();