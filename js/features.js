// dragoes
function spitFire(id) {
    let dragon = document.getElementById(`${id}`)

    dragon.src = `gifs/spitfire-${id}.gif`
    setTimeout(function() {
        dragon.src = `icons/${id}.png`
    }, 1000);
}

// cards de habilidades
function expandCard(id) {
    let card = document.getElementById(`${id}`)
    card.style.animation = "extend 1s cubic-bezier(.41,-0.3,.6,1.13) forwards"
    showUpText(id)
}

function showUpText(id) {
    let content = document.getElementById(`d${id}`)
    content.style.animation = "showUp .3s .8s linear forwards"
}
