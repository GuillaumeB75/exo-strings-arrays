let array = [1, 2, 67, 45, 22, 56, 89, 100, 3]

let oddNumber = []

for (let elem of array) {
  if (elem % 2 !== 0) {
    oddNumber.push(elem)
  }
}

console.log(oddNumber)


const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

animals[2] = 'cat'

const subAnimals = animals.slice(0, 4)

console.log('animals: ' + animals)

console.log('subAnimals: ' + subAnimals)


