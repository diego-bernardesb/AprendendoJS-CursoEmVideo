let num = document.getElementById('txtn')
let list = document.getElementById('txtl')
let res = document.querySelector('div#res')
let valores = []

function isNumb(n) {
    if(Number(n) > 0 && Number(n) <= 100){  //só aceitar valores entre 1 e 100
        return true
    }else{
        return false
    }
}

function inList(n, l) {  //assegurar que a lista não adicionara o msm numero
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar() {
    if(isNumb(num.value) && !inList(num.value, valores)){
        valores.push(Number(num.value)) //valor adicionado ao vetor 
        let item = document.createElement('option') //opition criada para adicionar o item na lista de forma visual
        item.text = `O valor ${num.value} adicionado.` //A mensagem mostrada dentro do select com o valor adicionado
        list.appendChild(item)
        res.innerHTML = ''
    }
    else{
        alert('Número invalido, ou já existente!')
    }
    num.value = '' //Limpa o campo para receber um novo valor
    num.focus() //já deixa a caixa selecionada para receber o novo texto
} 

function finalizar(){
    if(valores.length == 0){ //Se os valores da lista for igual a 0 ele dispara a mensagem
        alert('Adicione valores antes de continuar!')
    }else{
        let total = valores.length //contar o tamanho da lista(ARRAY)
        let maior = valores[0] //determinar o maior valor
        let menor = valores[0] //determinar o menor valor
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos] //soma todos os valores encontrados na lista

            media = soma/total //faz a media com a soma total dividido pela quantidade de valores adicionados a lista

            if(valores[pos] > maior)//Se o maior valor for menor que valores[pos] ele passa a ser o novo maior
            maior = valores[pos]
            
            if(valores[pos] < menor)//Se o menor valor for menor que valores[pos] ele passa a ser o novo menor
            menor = valores[pos]
        }

        res.innerHTML = ''
        res.innerHTML +=`<p>Você tem um total de ${total} itens adicionados.</p>`
        res.innerHTML += `<p>O maior valor adicionado é ${maior}.</p>`
        res.innerHTML += `<p>O menor valor adicionado é ${menor}.</p>`
        res.innerHTML += `<p>A soma de todos os itens adicionado é de ${soma}</p>`
        res.innerHTML += `<p>A média de todos os itens adicionados é de ${media} </p>`
    }
}