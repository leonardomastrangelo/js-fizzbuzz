let template = 
`<div class="col-2 p-2">
<div class="square d-flex justify-content-center align-items-center">prova</div>
</div>
`
const game = document.getElementById("game")
const divEl = document.createElement("div");
divEl.innerHTML = template;
game.append(divEl)
console.log(template, game, divEl)
