const answer = []

// Write your code below this line
for (let i = 1; i <= 15; i++) {
  if (i % 15 === 0) {
    answer.push('FizzBuzz')
  } else if (i % 3 === 0) {
    answer.push('Fizz')
  } else if (i % 5 === 0) {
    answer.push('Buzz')
  }
  answer.push(i)
}
console.log('answ', answer)
// Don't touch the code below this line, we'll cover it later
module.exports = answer
