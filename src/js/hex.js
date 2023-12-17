// criando uma constante para a formação de um hexadeximal
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'F']
// pegando o button do html e a tag span que contém a classe color
const btn = document.querySelector('#btn')
const color = document.querySelector('.color')

// criando o evento de mudar a cor
btn.addEventListener('click', () => {
    // variável para criar o inicio de um cor hex
    let hexColor = '#'
    // for para incrementar a variável hexColor com num ou letras aléatorias geradas 
    for(let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()]
    }
    // colocando o nome da cor no elemento span  
    color.textContent = hexColor
    // pegando o body e adicionando o background gerado
    document.body.style.backgroundColor = hexColor
})

// function para gerar um aleatório do array hex
const getRandomNumber = () => {
    return Math.floor(Math.random() * hex.length)
}