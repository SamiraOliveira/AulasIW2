var botao = document.getElementById('botao')
var lamp  = document.getElementById('lampada')

//console.log(botao)

botao.onclick = function(){
    //alert('clicado!')
        if(botao.value == 'acender'){
            lamp.src = './img/acesa.jpg'
            botao.value = 'apagar'
            botao.innerHTML = 'apagar'
        } 
        else{
            lamp.src = './img/apagada.jpg'
            botao.value = 'acender'
            botao.innerHTML = 'acender'
        } 
}

