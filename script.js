
function tamanhoTela(){ //função para definir a área q o 'alvo' deve aparecer
    let altura = window.innerHeight
    let largura = window.innerWidth
    return { altura, largura }
}


let numero  = 1
let pontos = 0

//TENTAR NOVAMENTE
function inicio(){
    window.location.href = 'index.html'
}

//LEVAR PARA FASE 1
function fase1(){
    window.location.href = 'fase1Menu.html'
}

//QUESTIONARIO FASE 1
function lifecontrol1(){
    let botao1 = document.getElementById("botao1")
    let botao2 = document.getElementById("botao2")
    let botao3 = document.getElementById("botao3")
    let botao4 = document.getElementById("botao4")

    botao1.addEventListener("click", function(){
        let pais = Math.floor(Math.random() * 3)
        switch(pais){
            case 0: 
                window.location.href = 'fase1.html'
                break;
            case 1: 
                window.location.href = 'fase1.html'
                break;
            case 2:
                window.location.href = 'fase1PaisDerrota.html'
        } 
    })
    botao2.addEventListener("click", function(){
        let amigo = Math.floor(Math.random() * 3)
        switch(amigo){
            case 0: 
                window.location.href = 'fase1.html'
                break;
            case 1: 
                window.location.href = 'fase1.html'
                break;
            case 2:
                window.location.href = 'fase1AmigoDerrota.html'
        } 
    })
    botao3.addEventListener("click", function(){
        let namorado = Math.floor(Math.random() * 3)
        switch(namorado){
            case 0: 
                window.location.href = 'fase1.html'
                break;
            case 1: 
                window.location.href = 'fase1.html'
                break;
            case 2:
                window.location.href = 'fase1NamoradoDerrota.html'
        } 
    })
    botao4.addEventListener("click", function(){
        let sozinho = Math.floor(Math.random() * 3)
        switch(sozinho){
            case 0: 
                window.location.href = 'fase1.html'
                break;
            case 1: 
                window.location.href = 'fase1.html'
                break;
            case 2:
                window.location.href = 'fase1SozinhoDerrota.html'
        } 
    })
}

//FASE 1
if(window.location.pathname.includes('fase1.html')){
    mostrarPontos()
    function frutas(){
        let {altura, largura} = tamanhoTela()

        //VERIFICA SE O ELEMENTO JÁ EXISTE NA TELA
        if(document.getElementById('fruta')){
            document.getElementById('fruta').remove()
            if(numero>3){
                window.location.href = "derrota.html"
            }
            else{
                document.getElementById("vida" + numero).src = "imagens/coracao_vazio.png"
                numero++
            }
        }

        //CRIA O ELEMENTO
        let fruta = document.createElement('img')
        document.body.appendChild(fruta)
        switch(Math.floor(Math.random() * 4 )){ 
            case 0:
                fruta.src = "imagens/fase1/1.png" //banana
                break
            case 1:
                fruta.src = "imagens/fase1/2.png" //uva
                break
            case 2:
                fruta.src = "imagens/fase1/3.png" //morango
                break
            case 3:
                fruta.src = "imagens/fase1/4.png" //melancia
                break           
        }

        //ADICIONA UMA POSIÇÃO ALEATÓRIA AO ELEMENTO
        let posicaoX = Math.round(Math.random() * largura) - 200
        let posicaoY = Math.round(Math.random() * altura) - 200
        if(posicaoX < 0){ // impede que a imagem vá para uma área em que não pode ser clicada
            posicaoX = 0
        }
        if(posicaoY < 0){ 
            posicaoY = 0
        }
        fruta.style.position = 'absolute'
        fruta.style.left = posicaoX + 'px'
        fruta.style.top = posicaoY + 'px'
        fruta.id = 'fruta'

        //ADICIONANDO TAMANHOS ALEATÓRIOS
        if(largura<768){
            let tamanho = (Math.random()*100)

            if(tamanho > 100){ //controla o tamanho máximo do elemento
                tamanho = 100
            }
            if(tamanho < 60){ //controla o tamanho minimo do elemento
                tamanho = 60
            }
            fruta.style.height = tamanho + 'px'
            fruta.style.width = tamanho + 'px'
        }
        if(largura>=768){
            let tamanho = (Math.random()*100) 

            if(tamanho > 250){ //controla o tamanho máximo do elemento
                tamanho = 250
            }
            if(tamanho < 150){ //controla o tamanho minimo do elemento
                tamanho = 150
            }
            fruta.style.height = tamanho + 'px'
            fruta.style.width = tamanho + 'px'
        }

        //CONFIGURANDO LADO DA IMAGEM (ESQUERDA/DIREITA)
        let classe = Math.floor(Math.random() * 2)
        switch(classe){
            case 0: 
                fruta.className = 'esquerda'
                break;
            case 1: 
                fruta.className = 'direita'
                break;
        }

        //CLIQUE NO ELEMENTO 
        fruta.onclick = function(){
            this.remove()
            pontos++
            mostrarPontos()
            if(pontos === 5){
                window.location.href = "vitoria1.html"
            }
        } 
    }

    function fastFood(){
        let {altura, largura} = tamanhoTela()


        //VERIFICA SE O ELEMENTO JÁ EXISTE NA TELA
        if(document.getElementById('food')){
            document.getElementById('food').remove()
        }

        //CRIA O ELEMENTO
        let food = document.createElement('img')
        document.body.appendChild(food)
        switch(Math.floor(Math.random() * 3)){ 
            case 0:
                food.src = "imagens/fase1/n1.png" //hotdog
                break
            case 1:
                food.src = "imagens/fase1/n2.png" //batata frita
                break
            case 2:
                food.src = "imagens/fase1/n3.png" //pizza
                break          
        }

        //ADICIONA UMA POSIÇÃO ALEATÓRIA AO ELEMENTO
        let posicaoX = Math.round(Math.random() * largura) - 200
        let posicaoY = Math.round(Math.random() * altura) - 200
        if(posicaoX < 0){ // impede que a imagem vá para uma área em que não pode ser clicada
            posicaoX = 50
        }
        if(posicaoY < 0){ 
            posicaoY = 50
        }
        food.style.position = 'absolute'
        food.style.left = posicaoX + 'px'
        food.style.top = posicaoY + 'px'
        food.id = 'food'

        //ADICIONANDO TAMANHOS ALEATÓRIOS
        if(largura<768){
            let tamanho = (Math.random()*100)

            if(tamanho > 100){ //controla o tamanho máximo do elemento
                tamanho = 100
            }
            if(tamanho < 60){ //controla o tamanho minimo do elemento
                tamanho = 60
            }
            food.style.height = tamanho + 'px'
            food.style.width = tamanho + 'px'
        }
        if(largura>=768){
            let tamanho = (Math.random()*100) 

            if(tamanho > 250){ //controla o tamanho máximo do elemento
                tamanho = 250
            }
            if(tamanho < 150){ //controla o tamanho minimo do elemento
                tamanho = 150
            }
            food.style.height = tamanho + 'px'
            food.style.width = tamanho + 'px'
        }

        //CONFIGURANDO LADO DA IMAGEM (ESQUERDA/DIREITA)
        let classe = Math.floor(Math.random() * 2)
        switch(classe){
            case 0: 
                food.className = 'esquerda'
                break;
            case 1: 
                food.className = 'direita'
                break;
        } 
        //CLIQUE NO ELEMENTO (redução de vidas)
        food.onclick = function(){
            this.remove()
            //caso ele seja clicado, perde vida
            //alterando para coração vazio
            if(numero > 3){
                window.location.href = "derrota.html"
            }
            else{
                document.getElementById('vida' + numero).src = "imagens/coracao_vazio.png"
                numero++
            }
        }
    }
    setInterval(function(){frutas()}, 2000)
    setInterval(function(){fastFood()}, 3000)
}

//LEVAR PARA FASE 2
function fase2(){
    window.location.href = "fase2Menu.html"
}

//RESULTADO DO QUESTIONARIO FASE 2
function lifecontrol2(){
    let botao1 = document.getElementById("botao1")
    let botao2 = document.getElementById("botao2")
    let botao3 = document.getElementById("botao3")

    botao1.addEventListener("click", function(){
        let esquerda = Math.floor(Math.random() * 3)
        switch(esquerda){
            case 0: 
                window.location.href = 'fase2.html'
                break;
            case 1: 
                window.location.href = 'fase2.html'
                break;
            case 2:
                window.location.href = 'fase2Esquerda.html'
        } 
    })
    botao2.addEventListener("click", function(){
        let direita = Math.floor(Math.random() * 3)
        switch(direita){
            case 0: 
                window.location.href = 'fase2.html'
                break;
            case 1: 
                window.location.href = 'fase2.html'
                break;
            case 2:
                window.location.href = 'fase2Direita.html'
        } 
    })
    botao3.addEventListener("click", function(){
        let emFrente = Math.floor(Math.random() * 3)
        switch(emFrente){
            case 0: 
                window.location.href = 'fase2.html'
                break;
            case 1: 
                window.location.href = 'fase2.html'
                break;
            case 2:
                window.location.href = 'fase2EmFrente.html'
        } 
    })

}

//FASE 2
if(window.location.pathname.includes('fase2.html')){
    mostrarPontos()
    function VidaOceano(){
        let {altura, largura} = tamanhoTela()

        //VERIFICA SE O ELEMENTO JÁ EXISTE NA TELA
        if(document.getElementById('vidaOceano')){
            document.getElementById('vidaOceano').remove()
            if(numero>3){
                //window.location.href = "derrota.html"
            }
            else{
                document.getElementById("vida" + numero).src = "imagens/coracao_vazio.png"
                numero++
            }
        }

        //CRIA O ELEMENTO
        let vidaOceano = document.createElement('img')
        document.body.appendChild(vidaOceano)
        switch(Math.floor(Math.random() * 5 )){ 
            case 0:
                vidaOceano.src = "imagens/fase2/1.png" //agua-viva
                break
            case 1:
                vidaOceano.src = "imagens/fase2/2.png" //golfinho
                break
            case 2:
                vidaOceano.src = "imagens/fase2/3.png" //cavalo-marinho
                break
            case 3:
                vidaOceano.src = "imagens/fase2/4.png" //estrela-do-mar
                break   
            case 4:
                vidaOceano.src = "imagens/fase2/5.png" //arraia
                break         
        }

        //ADICIONA UMA POSIÇÃO ALEATÓRIA AO ELEMENTO
        let posicaoX = Math.round(Math.random() * largura) - 200
        let posicaoY = Math.round(Math.random() * altura) - 200
        if(posicaoX < 0){ // impede que a imagem vá para uma área em que não pode ser clicada
            posicaoX = 0
        }
        if(posicaoY < 0){ 
            posicaoY = 0
        }
        vidaOceano.style.position = 'absolute'
        vidaOceano.style.left = posicaoX + 'px'
        vidaOceano.style.top = posicaoY + 'px'
        vidaOceano.id = 'vidaOceano'

        //ADICIONANDO TAMANHOS ALEATÓRIOS
        if(largura<768){
            let tamanho = (Math.random()*100)

            if(tamanho > 100){ //controla o tamanho máximo do elemento
                tamanho = 100
            }
            if(tamanho < 60){ //controla o tamanho minimo do elemento
                tamanho = 60
            }
            vidaOceano.style.height = tamanho + 'px'
            vidaOceano.style.width = tamanho + 'px'
        }
        if(largura>=768){
            let tamanho = (Math.random()*100) 

            if(tamanho > 250){ //controla o tamanho máximo do elemento
                tamanho = 250
            }
            if(tamanho < 150){ //controla o tamanho minimo do elemento
                tamanho = 150
            }
            vidaOceano.style.height = tamanho + 'px'
            vidaOceano.style.width = tamanho + 'px'
        }

        //CONFIGURANDO LADO DA IMAGEM (ESQUERDA/DIREITA)
        let classe = Math.floor(Math.random() * 2)
        switch(classe){
            case 0: 
                vidaOceano.className = 'esquerda'
                break;
            case 1: 
                vidaOceano.className = 'direita'
                break;
        }

        //CLIQUE NO ELEMENTO 
        vidaOceano.onclick = function(){
            this.remove()
            pontos++
            mostrarPontos()
            if(pontos === 10){
                window.location.href = "vitoria2.html"
            }
        } 
    }

    function VidaTerreste(){
        let {altura, largura} = tamanhoTela()


        //VERIFICA SE O ELEMENTO JÁ EXISTE NA TELA
        if(document.getElementById('vidaTerreste')){
            document.getElementById('vidaTerreste').remove()
        }

        //CRIA O ELEMENTO
        let vidaTerreste = document.createElement('img')
        document.body.appendChild(vidaTerreste)
        switch(Math.floor(Math.random() * 3)){ 
            case 0:
                vidaTerreste.src = "imagens/fase2/n1.png" //morcego
                break
            case 1:
                vidaTerreste.src = "imagens/fase2/n2.png" //passaro
                break
            case 2:
                vidaTerreste.src = "imagens/fase2/n3.png" //urso
                break  
            case 3:
                vidaTerreste.src = "imagens/fase2/n4.png" //tigre
                break        
        }

        //ADICIONA UMA POSIÇÃO ALEATÓRIA AO ELEMENTO
        let posicaoX = Math.round(Math.random() * largura) - 200
        let posicaoY = Math.round(Math.random() * altura) - 200
        if(posicaoX < 0){ // impede que a imagem vá para uma área em que não pode ser clicada
            posicaoX = 50
        }
        if(posicaoY < 0){ 
            posicaoY = 50
        }
        vidaTerreste.style.position = 'absolute'
        vidaTerreste.style.left = posicaoX + 'px'
        vidaTerreste.style.top = posicaoY + 'px'
        vidaTerreste.id = 'vidaTerreste'

        //ADICIONANDO TAMANHOS ALEATÓRIOS
        if(largura<768){
            let tamanho = (Math.random()*100)

            if(tamanho > 100){ //controla o tamanho máximo do elemento
                tamanho = 100
            }
            if(tamanho < 60){ //controla o tamanho minimo do elemento
                tamanho = 60
            }
            vidaTerreste.style.height = tamanho + 'px'
            vidaTerreste.style.width = tamanho + 'px'
        }
        if(largura>=768){
            let tamanho = (Math.random()*100) 

            if(tamanho > 250){ //controla o tamanho máximo do elemento
                tamanho = 250
            }
            if(tamanho < 150){ //controla o tamanho minimo do elemento
                tamanho = 150
            }
            vidaTerreste.style.height = tamanho + 'px'
            vidaTerreste.style.width = tamanho + 'px'
        }

        //CONFIGURANDO LADO DA IMAGEM (ESQUERDA/DIREITA)
        let classe = Math.floor(Math.random() * 2)
        switch(classe){
            case 0: 
                vidaTerreste.className = 'esquerda'
                break;
            case 1: 
                vidaTerreste.className = 'direita'
                break;
        } 
        //CLIQUE NO ELEMENTO (redução de vidas)
        vidaTerreste.onclick = function(){
            this.remove()
            //caso ele seja clicado, perde vida
            //alterando para coração vazio
            if(numero > 3){
                window.location.href = "derrota.html"
            }
            else{
                document.getElementById('vida' + numero).src = "imagens/coracao_vazio.png"
                numero++
            }
        }
    }
    setInterval(function(){VidaOceano()}, 1500)
    setInterval(function(){VidaTerreste()}, 2000)
}

//LEVAR PARA FASE 3
function fase3(){
    window.location.href = "fase3Menu.html"
}

//RESULTADO DO QUESTIONARIO FASE 3
function lifecontrol3(){
    let botao1 = document.getElementById("botao1")
    let botao2 = document.getElementById("botao2")
    let botao3 = document.getElementById("botao3")
    let botao4 = document.getElementById("botao4")

    botao1.addEventListener("click", function(){
        let treze = Math.floor(Math.random() * 3)
        switch(treze){
            case 0: 
                window.location.href = 'fase3.html'
                break;
            case 1: 
                window.location.href = 'fase3.html'
                break;
            case 2:
                window.location.href = 'fase3Treze.html'
        } 
    })
    botao2.addEventListener("click", function(){
        let quinze = Math.floor(Math.random() * 3)
        switch(quinze){
            case 0: 
                window.location.href = 'fase3.html'
                break;
            case 1: 
                window.location.href = 'fase3.html'
                break;
            case 2:
                window.location.href = 'fase3Quinze.html'
        } 
    })
    botao3.addEventListener("click", function(){
        let dezenove = Math.floor(Math.random() * 3)
        switch(dezenove){
            case 0: 
                window.location.href = 'fase3.html'
                break;
            case 1: 
                window.location.href = 'fase3.html'
                break;
            case 2:
                window.location.href = 'fase3Dezenove.html'
        } 
    })
    botao4.addEventListener("click", function(){
        let vinteDois = Math.floor(Math.random() * 3)
        switch(vinteDois){
            case 0: 
                window.location.href = 'fase3.html'
                break;
            case 1: 
                window.location.href = 'fase3.html'
                break;
            case 2:
                window.location.href = 'fase3VinteDois.html'
        } 
    })
}

//FASE 2
if(window.location.pathname.includes('fase3.html')){
    mostrarPontos()
    function Cinema(){
        let {altura, largura} = tamanhoTela()

        //VERIFICA SE O ELEMENTO JÁ EXISTE NA TELA
        if(document.getElementById('cinema')){
            document.getElementById('cinema').remove()
            if(numero>3){
                //window.location.href = "derrota.html"
            }
            else{
                document.getElementById("vida" + numero).src = "imagens/coracao_vazio.png"
                numero++
            }
        }

        //CRIA O ELEMENTO
        let cinema = document.createElement('img')
        document.body.appendChild(cinema)
        switch(Math.floor(Math.random() * 3 )){ 
            case 0:
                cinema.src = "imagens/fase3/1.png" //oculos 3d
                break
            case 1:
                cinema.src = "imagens/fase3/2.png" //pipoca
                break
            case 2:
                cinema.src = "imagens/fase3/3.png" //ingresso
                break       
        }

        //ADICIONA UMA POSIÇÃO ALEATÓRIA AO ELEMENTO
        let posicaoX = Math.round(Math.random() * largura) - 200
        let posicaoY = Math.round(Math.random() * altura) - 200
        if(posicaoX < 0){ // impede que a imagem vá para uma área em que não pode ser clicada
            posicaoX = 0
        }
        if(posicaoY < 0){ 
            posicaoY = 0
        }
        cinema.style.position = 'absolute'
        cinema.style.left = posicaoX + 'px'
        cinema.style.top = posicaoY + 'px'
        cinema.id = 'cinema'

        //ADICIONANDO TAMANHOS ALEATÓRIOS
        if(largura<768){
            let tamanho = (Math.random()*100)

            if(tamanho > 100){ //controla o tamanho máximo do elemento
                tamanho = 100
            }
            if(tamanho < 60){ //controla o tamanho minimo do elemento
                tamanho = 60
            }
            cinema.style.height = tamanho + 'px'
            cinema.style.width = tamanho + 'px'
        }
        if(largura>=768){
            let tamanho = (Math.random()*100) 

            if(tamanho > 250){ //controla o tamanho máximo do elemento
                tamanho = 250
            }
            if(tamanho < 150){ //controla o tamanho minimo do elemento
                tamanho = 150
            }
            cinema.style.height = tamanho + 'px'
            cinema.style.width = tamanho + 'px'
        }

        //CLIQUE NO ELEMENTO 
        cinema.onclick = function(){
            this.remove()
            pontos++
            mostrarPontos()
            if(pontos === 15){
                window.location.href = "vitoria3.html"
            }
        } 
    }
////////////////////////////////////////////////////////////////////////////////////
    function Outros(){
        let {altura, largura} = tamanhoTela()


        //VERIFICA SE O ELEMENTO JÁ EXISTE NA TELA
        if(document.getElementById('vidaTerreste')){
            document.getElementById('vidaTerreste').remove()
        }

        //CRIA O ELEMENTO
        let vidaTerreste = document.createElement('img')
        document.body.appendChild(vidaTerreste)
        switch(Math.floor(Math.random() * 3)){ 
            case 0:
                vidaTerreste.src = "imagens/fase2/n1.png" //morcego
                break
            case 1:
                vidaTerreste.src = "imagens/fase2/n2.png" //passaro
                break
            case 2:
                vidaTerreste.src = "imagens/fase2/n3.png" //urso
                break  
            case 3:
                vidaTerreste.src = "imagens/fase2/n4.png" //tigre
                break        
        }

        //ADICIONA UMA POSIÇÃO ALEATÓRIA AO ELEMENTO
        let posicaoX = Math.round(Math.random() * largura) - 200
        let posicaoY = Math.round(Math.random() * altura) - 200
        if(posicaoX < 0){ // impede que a imagem vá para uma área em que não pode ser clicada
            posicaoX = 50
        }
        if(posicaoY < 0){ 
            posicaoY = 50
        }
        vidaTerreste.style.position = 'absolute'
        vidaTerreste.style.left = posicaoX + 'px'
        vidaTerreste.style.top = posicaoY + 'px'
        vidaTerreste.id = 'vidaTerreste'

        //ADICIONANDO TAMANHOS ALEATÓRIOS
        if(largura<768){
            let tamanho = (Math.random()*100)

            if(tamanho > 100){ //controla o tamanho máximo do elemento
                tamanho = 100
            }
            if(tamanho < 60){ //controla o tamanho minimo do elemento
                tamanho = 60
            }
            vidaTerreste.style.height = tamanho + 'px'
            vidaTerreste.style.width = tamanho + 'px'
        }
        if(largura>=768){
            let tamanho = (Math.random()*100) 

            if(tamanho > 250){ //controla o tamanho máximo do elemento
                tamanho = 250
            }
            if(tamanho < 150){ //controla o tamanho minimo do elemento
                tamanho = 150
            }
            vidaTerreste.style.height = tamanho + 'px'
            vidaTerreste.style.width = tamanho + 'px'
        }

        //CONFIGURANDO LADO DA IMAGEM (ESQUERDA/DIREITA)
        let classe = Math.floor(Math.random() * 2)
        switch(classe){
            case 0: 
                vidaTerreste.className = 'esquerda'
                break;
            case 1: 
                vidaTerreste.className = 'direita'
                break;
        } 
        //CLIQUE NO ELEMENTO (redução de vidas)
        vidaTerreste.onclick = function(){
            this.remove()
            //caso ele seja clicado, perde vida
            //alterando para coração vazio
            if(numero > 3){
                window.location.href = "derrota.html"
            }
            else{
                document.getElementById('vida' + numero).src = "imagens/coracao_vazio.png"
                numero++
            }
        }
    }
    setInterval(function(){Cinema()}, 1500)
    setInterval(function(){Outros()}, 2000)
}














//RECUPERAÇÃO DE VIDAS DAS 3 FASES
if(window.location.pathname.includes('fase1.html') || window.location.pathname.includes('fase2.html') || window.location.pathname.includes('fase3.html')){
    function vida(){
        let {altura, largura} = tamanhoTela()


        //VERIFICA SE O ELEMENTO JÁ EXISTE NA TELA
        if(document.getElementById('vida')){
            document.getElementById('vida').remove()
        }

        //CRIA O ELEMENTO
        let vida = document.createElement('img')
        document.body.appendChild(vida)
        vida.src = "imagens/fase1/gif.gif" 
        if(window.location.pathname.includes('fase1.html')){
            vida.className = 'background1'
        }
        if(window.location.pathname.includes('fase2.html')){
            vida.className = 'background2'
        }
        if(window.location.pathname.includes('fase3.html')){
            vida.className = 'background3'
        }
        

        //ADICIONA UMA POSIÇÃO ALEATÓRIA AO ELEMENTO
        let posicaoX = Math.round(Math.random() * largura) - 100
        let posicaoY = Math.round(Math.random() * altura) - 100
        if(posicaoX < 0){ // impede que a imagem vá para uma área em que não pode ser clicada
            posicaoX = 0
        }
        if(posicaoY < 0){ 
            posicaoY = 0
        }
        vida.style.position = 'absolute'
        vida.style.left = posicaoX + 'px'
        vida.style.top = posicaoY + 'px'
        vida.id = 'vida'

        //ADICIONANDO TAMANHOS ALEATÓRIOS
        if(largura<768){
            let tamanho = (Math.random()*100)

            if(tamanho > 100){ //controla o tamanho máximo do elemento
                tamanho = 100
            }
            if(tamanho < 60){ //controla o tamanho minimo do elemento
                tamanho = 60
            }
            vida.style.height = tamanho + 'px'
            vida.style.width = tamanho + 'px'
        }
        if(largura>=768){
            let tamanho = (Math.random()*100) 

            if(tamanho > 150){ //controla o tamanho máximo do elemento
                tamanho = 150
            }
            if(tamanho < 100){ //controla o tamanho minimo do elemento
                tamanho = 100
            }
            vida.style.height = tamanho + 'px'
            vida.style.width = tamanho + 'px'
        }


        //CLIQUE NO ELEMENTO (redução de vidas)
        vida.onclick = function(){
            this.remove()
            numero = 1
            document.getElementById("vida1").src = "imagens/coracao_cheio.png"
            document.getElementById("vida2").src = "imagens/coracao_cheio.png"
            document.getElementById("vida3").src = "imagens/coracao_cheio.png"
        }

        //FUNÇÃO PRA REMOVER A VIDA A CADA 1.5 SEGUNDOS
        setTimeout(function(){
            if(document.getElementById('vida')){
                document.getElementById('vida').remove()
            }
        }, 1500)

    }
    setInterval(function(){vida()}, 10000)
}



function mostrarPontos(){
    //caso exista, remove o placar do valor anterior
   let resultadoAnterior = document.getElementById('resultadoID')
   if(resultadoAnterior){
        resultadoAnterior.remove()
   }

    //adiciona um novo valor para o placar
    let resultado = document.createElement('span') 
    resultado.textContent = pontos
    resultado.id = 'resultadoID'
    document.body.appendChild(resultado)

    //estilo da pontuação
    resultado.className = 'pontos'  
}

//GUIAR PARA O QUESTIONARIO
function questionario(){
    if(window.location.pathname.includes('fase1Menu.html')){
        window.location.href = 'fase1Quest.html'
    }
    else if(window.location.pathname.includes('fase2Menu.html')){
        window.location.href = 'fase2Quest.html'
    }
    else if(window.location.pathname.includes('fase3Menu.html')){
        window.location.href = 'fase3Quest.html'
    }
}

//GUIAR PARA O INSTRUÇÕES
function instrucoes(){
    if(window.location.pathname.includes('fase1Menu.html')){
        window.location.href = 'fase1Instrucoes.html'
    }
    else if(window.location.pathname.includes('fase2Menu.html')){
        window.location.href = 'fase2Instrucoes.html'
    }
    else if(window.location.pathname.includes('fase3Menu.html')){
        window.location.href = 'fase3Instrucoes.html'
    }
}

