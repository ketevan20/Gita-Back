const fs = require('fs/promises')

async function read(filePath, parse) {
    let readParse = await fs.readFile(filePath)
    // console.log(parse ? JSON.parse(readParse) : readParse)
    const data = parse ? await JSON.parse(readParse) : readParse
    return data
}

async function write(filePath, data) {
    await fs.writeFile(filePath, JSON.stringify(data))
}

function sum(nums) {
    const sumOfNums = nums.reduce((acc, curr) => curr+acc, 0)
    return sumOfNums
}

function reverse(data) {
    return data.split('').reverse().join()
}

module.exports = { read, write, reverse, sum }