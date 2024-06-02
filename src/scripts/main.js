import {charsModule, tipsModule} from './personagens.js';

const btnS = document.querySelector('#btnS')
btnS.addEventListener('click', start)

let rodadas = 0
let vazios = 0
let erros = 0
const acertos = []

function start(){
    const btnAll = document.querySelectorAll('.btn')
    const interfaceBox = document.querySelector('#interface_box')
    interfaceBox.classList.remove('interface_box_none')
    btnAll.forEach((btn) => {btn.classList.toggle('btnH')})

    const chars = [...charsModule]
    let nome = ''
    let tips = []
    let randomN = 0


    const btn1 = document.querySelector('#btn1')
    const imgChar = document.querySelector('#img_personagens')
    const textTip = document.querySelector('#text_tip')
    const inputV = document.querySelector('#userInput')
    const form = document.querySelector('#form')

    btn1.addEventListener('click', rodada)
    form.addEventListener('submit', analisar)

    function rodada(){
        const number = Math.floor(Math.random() * chars.length)
        randomN = number

        if(rodadas < 25){    
            nome = chars[randomN]
            imgChar.src = 'src/imgs/1placeholder_akira_360x360.jpg'
            tips = [...tipsModule[randomN]]

            randomTip()
            rodadas++
        }
        else{
            textTip.innerText = `Você acertou ${acertos.length} personagens, errou ${erros} e pulou ${25-(acertos.length+erros)}`
        }
    }

    function randomTip(){
        const randomT = Math.floor(Math.random() * tips.length)
        textTip.innerText = `${tips[randomT]}`
    }

    function analisar(e){
        e.preventDefault()
        const inputUp = inputV.value.toUpperCase()

        if(inputUp != ''){
            if(inputUp == nome){
                imgChar.src = `src/imgs/${nome}_360x360.jpg`
                textTip.innerText = `Isso aí, você acertou!`
                acertos.push(inputUp)
            }
            else{
                textTip.innerText = `Que pena, você errou`
                erros++
            }
        }
        inputV.value = ''
        nome = ''
    }
}

// 2. buscar imagem de placeholder para o momento de adivinhação
// 3. inserir os sources das imagens para cada personagem
// 4. construir tela final pós 25 rodadas
// 5. na tela final trazer botão para reiniciar o jogo ou recarregar pagina

// recortando e redimensionando imagens e, melhorando lógica de exibição por acerto