let longStr = "Hello"
let longStr2 = "Good morning sir"
console.log(`${longStr} wish you ${longStr2}`)
// console.log(longStr.__proto__)

const gameName = new String("Lucky-the-best-developer")
// console.log(gameName[0])
// console.log(gameName.__proto__)

console.log(gameName.toUpperCase())
console.log(gameName.toLowerCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = "  Prabuddha  "
console.log(anotherString);
console.log(anotherString.trim())

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));