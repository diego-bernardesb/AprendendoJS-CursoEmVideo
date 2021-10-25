function contar(){
    let inicio = document.getElementById('start')
    let fim = document.getElementById('end')
    let passo = document.getElementById('step')
    let res = document.querySelector('div#res')
    
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        //alert('[ERRO] Preenchar os campos acima!')
        res.innerHTML = 'Impossivel contar, confira os dado!'
    }else{
        res.innerHTML = `Contando: `
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            alert('Passo invalido, passo terá o intervado de 1')
            p = 1
        }
        if( i < f){  
            for (let c = i; c <= f; c += p){ //contagem cresente
                res.innerHTML += ` ${c} \u{1F449}`
        }       
        }else {
            for(let c = i; c >= f; c -= p){ //contagem regressiva
            res.innerHTML += ` ${c} \u{1F449}`
        }
        
    } res.innerHTML += ` \u{1F3C1}` 
    }
    
}
