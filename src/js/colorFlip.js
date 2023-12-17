// array de cores 
// const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025']
const colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "gray", "black", "white", "cyan", "magenta", "lime", "olive", "maroon", "navy", "teal", "silver", "gold", "indigo", "violet", "coral", "turquoise", "salmon", "sienna", "tomato", "thistle", "peru", "plum"
];
// pegando o button do html
const btn = document.querySelector('#btn')
// pegando a tag span que contém a classe color
const color = document.querySelector('.color')

// criando o evento de mudar a cor
btn.addEventListener('click', () => {
    // criando um random para pegar cores aleatórias do array de cores
    const corAleatoria = Math.floor(Math.random() * colors.length)
    // pegando o body e adicionando o background gerado
    document.body.style.backgroundColor = colors[corAleatoria]
    // colocando o nome da cor no elemento span 
    color.textContent = colors[corAleatoria].toLocaleUpperCase()

})