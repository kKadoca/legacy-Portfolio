function carregar() {
    var bg = window.document.getElementById('bg')
    var data = new Date()
    var hora = data.getHours()
    if (hora >= 4 && hora < 9) {
        // MANHÃ
        bg.src = "img/morning-bg.jpg"
        document.body.style.backgroundColor = "#bfffe9"
    } else if (hora >= 9 && hora < 14) {
        // DIA
        bg.src = "img/day-bg.jpg"
        document.body.style.backgroundColor = "#ffffab"
    } else if (hora >= 14 && hora < 18) {
        // TARDE
        bg.src = "img/afternoon-bg.jpg"
        document.body.style.backgroundColor = "#ffbe5c"
    } else if (hora >= 18 && hora < 22) {
        // NOITE
        bg.src = "img/evening-bg.jpg"
        document.body.style.backgroundColor = "#a8dafc"
    } else {
        // MADRUGADA
        bg.src = "img/night-bg.jpg"
        document.body.style.backgroundColor = "#233039"
    }
}
