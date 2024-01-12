function carregar(){
    var msg = document.querySelector("#msg")
    var img = document.querySelector("#imagem")
    var data = new Date()
    var hora = data.getHours()
    // var hora = 17 , essa
    
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        img.src = "./src/manha.jpg"
        document.body.style.background = '#FFD700'
    }else if(hora >= 12 && hora <= 18){
        img.src = "./src/tarde.jpg"
        document.body.style.background = '#A52A2A'
    }else{
        img.src = "./src/noite.jpg"
        document.body.style.background = '#BA55d3'
    }
}




