export function convertToUpperCase(str) {
    return str.toUpperCase()
}

export function palindrome(str) {
    if(str.split('').reverse().join('') === str) {
        return true
    } else {
        return false
    }
}

export function longestWord(sentence) {
    const reduced = sentence.split(" ").reduce((acc, curr) => {
        if (!acc[curr]) {
            acc[curr] = curr.length
        } 
        return acc
    }, { })
    const newArr = Object.entries(reduced)
    let max = newArr[0]
    for(let item of newArr) {
        if(item[1] > max[1]) max = item
    }
    return max;
}