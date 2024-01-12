function carregar(){
    var msg = document.querySelector("#msg")
    var img = document.querySelector("#imagem")
    var data = new Date()
    var hora = data.getHours()
    // var hora = 17 , essa é uma variável de teste para forçar a mudança da imagem
    
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){        // dentro deste intervalo de horas aparecerá uma igamen de bom dia
        img.src = "./src/manha.jpg"
        document.body.style.background = '#FFD700'
    }else if(hora >= 12 && hora <= 18){ 
        img.src = "./src/tarde.jpg"  // dentro deste intervalo de horas aparecerá uma igamen de boa tarde
        document.body.style.background = '#A52A2A'
    }else{
        img.src = "./src/noite.jpg"  // e aqui aparecerá uma ibagem de boa noite
        document.body.style.background = '#BA55d3'
    }
}




