function carregar() {
    var msg = window.document.getElementById('msg')
    var saud = window.document.getElementById('saud')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = "images/bomdia250.png"
        document.body.style.backgroundColor = "#faeb97"
        saud.innerHTML = ('Bom dia!')
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = "images/boatarde250.png"
        document.body.style.backgroundColor = "#a09084"
        saud.innerHTML = ('Boa tarde!')
    } else {
        // BOA NOITE!
        img.src = "images/boanoite250.png"
        document.body.style.backgroundColor = "#1e3138"
        saud.innerHTML = ('Boa noite!')
    }
    msg.innerHTML += (`Agora são ${hora} horas.`)
}
