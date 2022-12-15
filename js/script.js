function expandCard(id) {
    let card = document.getElementById(`${id}`)
    card.style.animation = "extend 500ms ease-out forwards"
    showUpText(id)
}

function showUpText(id) {
    let content = document.getElementById(`d${id}`)
    content.style.animation = "showUp 300ms 500ms linear forwards"
}