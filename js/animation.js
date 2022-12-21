function start() {
    setAllForAnimation()
    setTimeout(function(){
        startHomeAnimation()
    }, 2000);

    checkScrollPositionForAnimation()

    window.addEventListener('scroll', function() {
        checkScrollPositionForAnimation() 
    })
}

function setAllForAnimation() {
    setHomeAnimation()
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

function setHomeAnimation() {
    let container = document.getElementById('container')

    container.style.opacity = 1;
}

function setAboutAnimation() {
    let aboutText = document.getElementById('aboutText')
    let aboutTextBox = document.getElementById('aboutTextBox')
    let aboutTitle = document.getElementById('aboutTitle')

    aboutTitle.style.opacity = 0
    aboutTitle.style.color = "white"
    aboutText.style.opacity = 0
    aboutTextBox.style.opacity = 0
    aboutTextBox.style.transform = "translateX(-70%)"
}

function setProjectsAnimation() {
    let navProjects = document.getElementById('navProjects')
    let cardSlider = document.getElementById('cardSlider')
    let projectsTitle = document.getElementById('projectsTitle')

    projectsTitle.style.opacity = 0
    projectsTitle.style.color = "white"
    navProjects.style.opacity = 0
    cardSlider.style.opacity = 0
    navProjects.style.transform = "translateY(140%)"
    cardSlider.style.transform = "translateY(30%)"
}

function setSkillsAnimation() {
    let skillsTitle = document.getElementById('skillsTitle')

    skillsTitle.style.opacity = 0
    skillsTitle.style.color = "white"
    setSkillSubgroupsAnimation()
    setSkillCardsAnimation()
}

function setSkillSubgroupsAnimation() {
    let languageCard = document.getElementById('languageCard')
    let languageGrid = document.getElementById('languageGrid')
    let toolCard = document.getElementById('toolCard')
    let toolGrid = document.getElementById('toolGrid')

    languageGrid.style.opacity = 0
    languageCard.style.opacity = 0
    languageGrid.style.transform = "translateX(150%)"
    languageCard.style.transform = "translateX(150%)"
    toolGrid.style.opacity = 0
    toolCard.style.opacity = 0
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
        element.style.opacity = 0
    })
}

function startHomeAnimation() {
    let homeBg = document.getElementById('inicio')
    let gif = document.getElementById('gifInicio')

    homeBg.style.animation = "bg .1s .9s ease-in-out forwards"
    gif.style.animation = "fire 1s backwards"
    container.style.animation = "goUp .3s .4s linear forwards"
}

function startAboutAnimation() {
    aboutTitle.style.animation = "showUp 1.5s ease-out forwards"
    aboutTextBox.style.animation = "showUp .7s ease-out forwards"
    aboutText.style.animation = "showUp .3s .8s ease-in-out forwards"
}

function startProjectsAnimation() {
    projectsTitle.style.animation = "showUp 1.5s ease-out forwards"
    navProjects.style.animation = "showUp 1s ease-out forwards"
    cardSlider.style.animation = "showUp 1s .3s ease-in-out forwards"
}

function startSkillsAnimation() {
    skillsTitle.style.animation = "showUp 1.5s ease-out forwards"
    languageCard.style.animation = "showUp .8s ease-out forwards"
    languageGrid.style.animation = "showUp .8s .2s ease-out forwards"
    toolCard.style.animation = "showUp .8s .2s ease-out forwards"
    toolGrid.style.animation = "showUp .8s .4s ease-out forwards"
}
