// 1)წაიკითხე ყველა რიცხვი ფაილიდან, გამოთვალე მათი ჯამი და ჩაწერე სხვა ფაილში
const fs = require('fs/promises')

// async function main() {
//     const nums = [1, 2, 3, 4]
//     await fs.writeFile('nums.json', JSON.stringify(nums))
//     const res = await fs.readFile('nums.json', 'utf-8')
//     const numsArr = JSON.parse(res)
//     const sum = numsArr.reduce((acc, num) => acc + num, 0)
//     await fs.writeFile('sum.txt', sum.toString())
// }

// main()

// 2)ერთი ფაილიდან წაიკითხე ტექსტი, გადაატრიალე (reverse) და ჩაწერე სხვა ფაილში

// async function main() {
//     await fs.writeFile('text.txt', 'Hello World')
//     const res = await fs.readFile('text.txt', 'utf-8')
//     const reversed = res.split('').reverse().join('')
//     await fs.writeFile('reversed.txt', reversed)
// }

// main()

// 3)შექმენი მომხმარებლების მასივი შემდეგი თვისებებით: name, age, email — შემდეგ ეს მონაცემები ჩაწერე data.json ფაილში
// async function main() {
//     const users = [
//         { name: 'Nini', age: 25, email: 'nini@gmail.com' },
//         { name: 'Nika', age: 30, email: 'nika@example.com' },
//         { name: 'Mariami', age: 28, email: 'mariami@example.com' }
//     ]
//     await fs.writeFile('data.json', JSON.stringify(users))
// }

// main()

// 4)წაიკითხე მონაცემები ორ სხვადასხვა ფაილიდან და ჩაწერე ერთ ფაილში
// async function main() {
//     const res1 = await fs.readFile('text.txt', 'utf-8')
//     const res2 = await fs.readFile('reversed.txt', 'utf-8')
//     const [data1, data2] = await Promise.all([res1, res2])
//     const combinedData = data1.concat(" ", data2)
//     await fs.writeFile('combined.txt', combinedData)
// }

// main()

// 5)ჩაწერე ფაილში ტექსტი, შემდეგ წაიკითხე ეს მონაცემები და დათვალე რამდენი სიტყვაა
// async function main() {
//     await fs.writeFile('text.txt', 'Hello World')
//     const res = await fs.readFile('text.txt', 'utf-8')
//     const count = res.split(' ').length
//     console.log(count)
// }

// main()

// 6)წაიკითხე მომხმარებლების JSON მონაცემები, გაფილტრე ისინი (ის ვინც 18 წელზე უფროსია) და თავიდან ჩაწერე
// async function main() {
//     const res = await fs.readFile('data.json', 'utf-8')
//     const data = JSON.parse(res)
//     const filteredData = data.filter(el => el.age > 18)
//     // console.log(filteredData)
//     await fs.writeFile('filteredData.json', JSON.stringify(data))
// }

// main()

// 7)შექმენი სტუდენტების მასივი (name, score, passed), ჩაწერე students.json-ში.
// შემდეგ წაიკითხე და გაფილტრე ისინი, ვისი score 50-ზე მეტია, და ჩაწერე ახალ "passed.json" - ში
// async function main() {
//     const students = [
//         {name: 'Nika', score: 90, passed: true},
//         {name: 'Nini', score: 49, passed: false},
//         {name: 'Mariami', score: 100, passed: true}
//     ]
//     await fs.writeFile('students.json', JSON.stringify(students))
//     const res = await fs.readFile('students.json', 'utf-8')
//     const data = JSON.parse(res)
//     const filteredData = data.filter(el => el.score>50)
//     await fs.writeFile('passed.json', JSON.stringify(filteredData))
// }

// main()

// 8)წაიკითხე "users.json", და ყველას, ვისაც არ აქვს "@" ელფოსტაში, წაშალე
async function main() {
    await fs.writeFile('users.json', JSON.stringify([
        { "name": "Gio", "email": "gio@gmail.com" },
        { "name": "Nika", "email": "nikaexample.com" },
        { "name": "Mariam", "email": "mariam@reeducate.ge" },
        { "name": "Lasha", "email": "lashareeducate.ge" },
        { "name": "Ana", "email": "ana@mail.com" }
    ]))
    const res = await fs.readFile('users.json', 'utf-8')
    const data = JSON.parse(res)
    const filtered = data.filter(el => el.email.includes('@'))
    await fs.writeFile('users.json', JSON.stringify(filtered))
}

main()