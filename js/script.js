// variables 
const game = document.getElementById("game")

for(let x = 1; x <= 10; x++) {
    for(let y = 1; y <= 8; y++){
        // variables box
        let bg;
        let type;

        // conditions
        if(y % 3 === 0){
            type = "fizz"
            bg = "fizz-bg"
        } else if(y % 5 === 0){
            type = "buzz"
            bg = "buzz-bg"
        } else if(y % 3 === 0 && y % 5 === 0){
            type = "fizzBuzz"
            bg = "fizzBuzz-bg"
        } else {
            type = y
            bg = "standard-bg"
        }

        // creation
        const boxEl = document.createElement("div")
        boxEl.className = `square ${bg} d-flex justify-content-center align-items-center`
        boxEl.innerHTML = `${type}`
        console.log(boxEl)
    }
}

