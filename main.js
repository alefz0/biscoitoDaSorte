//variaveis
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const cookieClick = document.querySelector('#cookieClick')
const btnReset = document.querySelector('#btnReset')
const phrases = ['Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
'A vida trará coisas boas se tiver paciência.',
'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
'Não compense na ira o que lhe falta na razão.',
'Defeitos e virtudes são apenas dois lados da mesma moeda.',
'A maior de todas as torres começa no solo.',
'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
'Siga os bons e aprenda com eles.',
'Quem quer colher rosas tem de estar preparado para suportar os espinhos.',
'Uma bela flor é incompleta sem as suas folhas.'
]
let randomPhrase = getPhrase(phrases)

//eventos
cookieClick.addEventListener('click', function(event) {
    event.preventDefault()
    toggleScreen()
    sendPhrase(getPhrase(phrases))
})
btnReset.addEventListener('click', function(event) {
    event.preventDefault()
    toggleScreen(event)
})
 
//funções
function getPhrase(phrases) {
    const randomIndex = Math.floor(Math.random() * phrases.length)
    return phrases[randomIndex]
}

function sendPhrase(randomPhrase) {
    if(screen1.classList.contains('hide')) {
        screen2.querySelector('p').innerText = randomPhrase
    }
}

function toggleScreen(event) {
    if(event) {
        event.preventDefault()
    }

    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}