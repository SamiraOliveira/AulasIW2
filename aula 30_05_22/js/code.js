
        document.getElementById("button").onclick = function(){
            var radios =  document.getElementsByName("sexo")
            var ano = (documentgetElementById('ano')).value
            for (var i = 0; i < radios.length; i++){
                var escolha = radios[i].value
                console.log("Escolheu: " + escolha)
                resultado (escolha,ano)
            }
        }


        var texto = documentgetElementById('txt')
        var imagem = documentgetElementById('img')
