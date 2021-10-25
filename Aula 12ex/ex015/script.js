function verificar(){
    var data = new Date()
    var ano =   data.getFullYear()
    var fAno= document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fAno.value.length == 0 || fAno.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
       var fSex = document.getElementsByName('radsex')
       var idade = ano - Number(fAno.value)
       res.innerHTML = `Idade calculada: ${idade}`
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id','foto')
       if(fSex[0].checked){
           genero = 'Homem'
           if( idade >= 0 && idade < 12){
           //criança
           img.setAttribute('src', 'crianca-m.png')
        }else if(idade < 21){
            //Adolecente
            img.setAttribute('src', 'adolecente-m.png')
        }else if(idade < 60){
            //adulto
            img.setAttribute('src', 'adulto-m.png')
        }else{
            //Idoso
            img.setAttribute('src', 'idoso-m.png')
        }
       }else if (fSex[1].checked){
           genero = 'Mulher'
           if( idade >= 0 && idade < 12){
            //criança
            img.setAttribute('src', 'crianca-f.png')
         }else if(idade < 21){
             //Adolecente
             img.setAttribute('src', 'adolecente-f.png')
         }else if(idade < 60){
             //adulto
             img.setAttribute('src', 'adulto-f.png')
         }else{
             //Idoso
             img.setAttribute('src', 'idoso-f.png')
         }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img)
    }
}