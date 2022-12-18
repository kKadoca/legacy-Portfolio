function start() {
    setAllForAnimation()
    checkScrollPositionForAnimation()

    window.addEventListener('scroll', function() {
        checkScrollPositionForAnimation() 
    })
}

function setAllForAnimation() {
    setAboutAnimation()
    setProjectsAnimation()
    setSkillsAnimation()
}

function checkScrollPositionForAnimation() {
    if (document.documentElement.scrollTop > 300 ) {
        startAboutAnimation()
    }
    if (document.documentElement.scrollTop > 800 ) {
        startProjectsAnimation()
    }
    if (document.documentElement.scrollTop > 1500 ) {
        startSkillsAnimation()
    }
}

function setAboutAnimation() {
    let aboutText = document.getElementById('aboutText')
    let aboutTextBox = document.getElementById('aboutTextBox')

    aboutText.style.opacity = 0;
    aboutTextBox.style.opacity = 0;
    aboutTextBox.style.transform = "translateX(-70%)"
}

function setProjectsAnimation() {
    let navProjects = document.getElementById('navProjects')
    let cardSlider = document.getElementById('cardSlider')

    navProjects.style.opacity = 0;
    cardSlider.style.opacity = 0;
    navProjects.style.transform = "translateY(140%)"
    cardSlider.style.transform = "translateY(30%)"
}

function setSkillsAnimation() {
    setSkillSubgroupsAnimation()
    setSkillCardsAnimation()
}

function setSkillSubgroupsAnimation() {
    let languageCard = document.getElementById('languageCard')
    let languageGrid = document.getElementById('languageGrid')
    let toolCard = document.getElementById('toolCard')
    let toolGrid = document.getElementById('toolGrid')

    languageGrid.style.opacity = 0;
    languageCard.style.opacity = 0;
    languageGrid.style.transform = "translateX(150%)"
    languageCard.style.transform = "translateX(150%)"
    toolGrid.style.opacity = 0;
    toolCard.style.opacity = 0;
    toolGrid.style.transform = "translateX(150%)"
    toolCard.style.transform = "translateX(150%)"
}

function setSkillCardsAnimation() {
    let skillCards = document.querySelectorAll('.card-habilidade')
    let skillDescription = document.querySelectorAll('.habilidade-descricao')

    skillCards.forEach(element => {
        element.style.width = "70px"
    })
    skillDescription.forEach(element => {
        element.style.opacity = 0;
    })
}

function startAboutAnimation() {
    aboutTextBox.style.animation = "showUp .7s ease-out forwards"
    aboutText.style.animation = "showUp .3s .8s ease-in-out forwards"
}

function startProjectsAnimation() {
    navProjects.style.animation = "showUp 1s ease-out forwards"
    cardSlider.style.animation = "showUp 1s .3s ease-in-out forwards"
}

function startSkillsAnimation() {
    languageCard.style.animation = "showUp .8s ease-out forwards"
    languageGrid.style.animation = "showUp .8s .2s ease-out forwards"
    toolCard.style.animation = "showUp .8s .2s ease-out forwards"
    toolGrid.style.animation = "showUp .8s .4s ease-out forwards"
}

function expandCard(id) {
    let card = document.getElementById(`${id}`)
    card.style.animation = "extend 1s cubic-bezier(.41,-0.3,.6,1.13) forwards"
    showUpText(id)
}

function showUpText(id) {
    let content = document.getElementById(`d${id}`)
    content.style.animation = "showUp .3s .8s linear forwards"
}