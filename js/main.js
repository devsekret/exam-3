var elList = document.querySelector(".list");
var elbtn = document.querySelector(".btn")

function renderPokemon(_pokemons) {
    
    for(var i = 0; i < _pokemons.length; i++) {


        var newLi = document.createElement('li')
        var newImg = document.createElement('img')
        var newHr = document.createElement('hr')
        var newHeading = document.createElement('h3')
        var newBtn = document.createElement('button')
        var newText = document.createElement('p')
        var newSpan = document.createElement('span')
        var newSpan1 = document.createElement('span')



        newLi.setAttribute("class", "item")
        newImg.setAttribute("class", "img")
        newImg.setAttribute("src", _pokemons[i].img)
        newImg.setAttribute("alt", _pokemons[i].name + ", poster")
        newHr.setAttribute("class", "hr")
        newImg.setAttribute("width", 157)
        newImg.setAttribute("height", 157)
        newHeading.setAttribute("class", "heading")
        newBtn.setAttribute('class', 'btn')
        newBtn.setAttribute("type", "button")
        newBtn.setAttribute("data-uuid", "close")
        newText.setAttribute("class", "text")
        newSpan.setAttribute("class", "span")
        newSpan1.setAttribute("class", "span1")


        newHeading.textContent = _pokemons[i].name;
        newText.textContent = _pokemons[i].type;
        newSpan.textContent = _pokemons[i].weight;
        newSpan1.textContent = _pokemons[i].height;
        newBtn.textContent = "❤️"


        newLi.appendChild(newImg);
        newLi.appendChild(newHr);
        newLi.appendChild(newHeading);
        newLi.appendChild(newBtn)
        newLi.appendChild(newText);
        newLi.appendChild(newSpan);
        newLi.appendChild(newSpan1);
        elList.appendChild(newLi);
    }
}

renderPokemon(pokemons)    

var buttonLike = document.querySelectorAll(".btn")
var counds = document.querySelector(".cound")
var cound = 0;


setInterval(function add() {
    counds.textContent = cound
},1)

for(var i = 0; i < buttonLike.length; i++) {
    buttonLike[i].addEventListener("click", (evt) => {
        if(evt.target.dataset.uuid == "close") {
            cound += 1;
            evt.target.dataset.uuid = "open";

        }else if(evt.target.dataset.uuid == "open") {
            cound -= 1
            evt.target.dataset.uuid = "close";
        }
    })
}