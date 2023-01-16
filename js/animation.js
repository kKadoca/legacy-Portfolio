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

const checkScrollPositionForAnimation = () => {
    const animatedElements = Array.from(document.querySelectorAll('.js-play'))
    let windowTop = window.pageYOffset + (window.innerHeight * 0.75 || document.body.clientHeight * 0.75 || document.documentElement.clientHeight * 0.75);

    animatedElements.forEach(el => {
        if (windowTop > el.offsetTop) {
            el.style.animationPlayState = 'running'
        }
    })
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
    aboutTitle.style.animation = "showUp 1.5s ease-out forwards paused"
    aboutTextBox.style.animation = "showUp .7s ease-out forwards paused"
    aboutText.style.animation = "showUp .3s .8s ease-in-out forwards paused"
}

function setProjectsAnimation() {
    let sectionProjects = document.getElementById('sectionProjects')

    sectionProjects.style.opacity = 0
    sectionProjects.style.transform = "translateY(70%)"
    sectionProjects.style.animation = "showUp .8s ease-in-out forwards paused"
}

function setSkillsAnimation() {
    let skillsTitle = document.getElementById('skillsTitle')

    skillsTitle.style.opacity = 0
    skillsTitle.style.color = "white"
    skillsTitle.style.animation = "showUp 1.5s ease-out forwards paused"
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
    languageCard.style.animation = "showUp .8s ease-out forwards paused"
    languageGrid.style.animation = "showUp .8s .2s ease-out forwards paused"
    toolCard.style.animation = "showUp .8s .2s ease-out forwards paused"
    toolGrid.style.animation = "showUp .8s .4s ease-out forwards paused"
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
