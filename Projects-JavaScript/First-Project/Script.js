
const button = document.getElementById('bnt')
const ColorFont = document.getElementById('color')
const ColorFund = document.getElementById('fundo')
const click = ()=>{
   
    const randomColor = '#' + Math.floor(Math.random()* 16777215).toString(16)

    ColorFund.style.backgroundColor = randomColor

    ColorFont.textContent = randomColor
    

    if(!button.matches(':hover')){
        button.style.backgroundColor = randomColor
    }
}
button.addEventListener("click", click)