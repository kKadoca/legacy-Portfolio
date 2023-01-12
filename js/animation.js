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
    let contentWidth = document.documentElement.clientWidth
    let contentHeight = document.documentElement.clientHeight
    let scrollPosition = document.documentElement.scrollTop
    
    if (scrollPosition > (contentHeight / 2.2)) {
        startAboutAnimation()
    }
    if (scrollPosition > (contentHeight / 0.8)) {
        startProjectsAnimation()
    }
    if (scrollPosition > (contentHeight / 0.5)) {
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
    let sectionProjects = document.getElementById('sectionProjects')

    sectionProjects.style.opacity = 0
    sectionProjects.style.transform = "translateY(70%)"
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
    let gif = document.getElementById('gifInicio')

    gif.style.animation = "fire 1s backwards"
    container.style.animation = "goUp .3s .4s linear forwards"
}

function startAboutAnimation() {
    aboutTitle.style.animation = "showUp 1.5s ease-out forwards"
    aboutTextBox.style.animation = "showUp .7s ease-out forwards"
    aboutText.style.animation = "showUp .3s .8s ease-in-out forwards"
}

function startProjectsAnimation() {
    sectionProjects.style.animation = "showUp .8s ease-in-out forwards"
}

function startSkillsAnimation() {
    skillsTitle.style.animation = "showUp 1.5s ease-out forwards"
    languageCard.style.animation = "showUp .8s ease-out forwards"
    languageGrid.style.animation = "showUp .8s .2s ease-out forwards"
    toolCard.style.animation = "showUp .8s .2s ease-out forwards"
    toolGrid.style.animation = "showUp .8s .4s ease-out forwards"
}
