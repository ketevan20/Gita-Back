#!/usr/bin/env node

// 1) შექმენი utils/helper.js სადაც გექნება ფუქნციები read(უნდა პარსავდეს true-ს გადაწოდების შემდეგ) და write(ანალოგიურად stringify-უნდა გაუკეთოს).
// შექმენი ამ ფუქნციებით 2 ფაილი და ჩაწერე შიგნით ნებისმიერი რამ. ასევე ჰელფერებში დაამატე ჯამის დათვლა და სტრინგის შეტრიალების ფუქნცია.
// const { write, read, reverse, sum } = require("./utils/helper")

// async function main() {
//     await write('file1', 'hello world')
//     console.log(await read('file1', true))
//     console.log(reverse('hello world'))
//     console.log(sum([1, 2, 3, 4, 5]))
// }

// main()

// 2)წამოიღე ინფორმაცია ამ ორი api-დან
// let api = https://jsonplaceholder.typicode.com/users
// let api2 = https://jsonplaceholder.typicode.com/posts
// 1)გამოიყენე axios და ერთდროულად გაუშვი 2 API.
// 2)გაუშვი ორივე ერთად და რომელიც პირველი მოვა ის დააკონსოლე.
// 3)გაუშვი ორივე ერთად და დააბრუნე ინფრომაცია რომელი დარესოლვდა დარეჯექთდა და ა.შ.
// const axios = require('axios')

// let api = 'https://jsonplaceholder.typicode.com/users'
// let api2 = 'https://jsonplaceholder.typicode.com/posts'

// async function fetch(apiUrl) {
//     const res = await axios.get(apiUrl)
//     const data = await res.data
//     return data
// }

// // Promise.all([fetch(api), fetch(api2)]).then(res => console.log(res))
// // Promise.race([fetch(api), fetch(api2)]).then(res => console.log(res))
// Promise.allSettled([fetch(api), fetch(api2)]).then(res => console.log(res))


// 3)commander-ით შექმენი phone-cli, რომელსაც ექნება დამატება,წაშლა,id-ის მიხედვით კონკრეტული ობიექტის ამოღება, და option-ის მიხედვით(--america)- ამ ოფშენს თუ გადავცემთ ნომერს წინ უნდა დაუამტოს 011 (ანუ phone-cli add giorgi 574221355 --america)- ასე თუ გადავცემთ უნდა დაამტოს 011574221355
const { Command } = require('commander')
const { write, read } = require("./utils/helper")
const fs = require('fs/promises')
const program = new Command()

program
    .command("create")
    .description('create contact')
    .argument("name")
    .argument("phone")
    .option("--america")
    .action(async (name, phone, options) => {
        let readDataJson = await read('data.json', true)
        let lastId = readDataJson[readDataJson.length - 1]?.id + 1 || 0

        if (options.america) {
            phone = "011" + phone
        }

        let user = {
            id: lastId,
            name,
            phone
        }

        readDataJson.push(user)
        await write("data.json", readDataJson)
    })

program
    .command("delete")
    .description('delete desc')
    .argument("id")
    .action(async (id) => {
        let readDataJson = await read('data.json', true)
        const filterdData = readDataJson.filter(el => el.id !== +id)
        await write('data.json', filterdData)
    })

program
    .command("get")
    .description('get desc')
    .argument("id")
    .action(async (id) => {
        let readDataJson = await read('data.json', true)
        const user = readDataJson.find(el => el.id === +id)
        console.log(user)
    })


program.parse()