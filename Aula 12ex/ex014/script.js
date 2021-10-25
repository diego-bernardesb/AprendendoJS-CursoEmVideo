function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var saud = document.getElementById('saudação')
    var hora = data.getHours()    
    msg.innerHTML = `Agora são ${hora} horas. ` 
    if (hora >= 0 && hora < 12){
        //BOM DIA !!
        img.src = 'fotomanha.png'
        document.body.style.background = '#dcd38f'
        msg.innerHTML += `<strong>Bom dia!</strong>`
    }else if (hora >= 12 && hora < 18){
        //BOA TARDE !!
        img.src = 'fototarde.png'
        document.body.style.background = '#cc785d'
        msg.innerHTML +=`<strong>Boa Tarde!</strong>`
    }else{
        //BOA NOITE !!
        img.src = 'fotonoite.png'
        document.body.style.background = '#4d4a54'
        msg.innerHTML += `<strong>Boa Noite!</strong>`
    }

    
}