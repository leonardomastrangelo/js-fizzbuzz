// variables 
const game = document.getElementById("game")

for (let y = 1; y <= 100; y++) {
    // variables box
    let bg;
    let type;

    // conditions
    if (y % 3 === 0 && y % 5 === 0) {
        type = "Fizz"
        bg = "fizz-bg"
    } else if (y % 5 === 0) {
        type = "Buzz"
        bg = "buzz-bg"
    } else if (y % 3 === 0) {
        type = "FizzBuzz"
        bg = "fizzBuzz-bg"
    } else {
        type = y
        bg = "standard-bg"
    }

    // creation
    const boxEl = document.createElement("div")
    boxEl.className = `square ${bg} d-flex justify-content-center align-items-center`
    boxEl.innerHTML = `${type}`
    game.append(boxEl)
}


