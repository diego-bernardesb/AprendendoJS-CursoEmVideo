function tabuada(){
    let ent = document.getElementById('txtn')
    let tab = document.getElementById('tab')
    if(ent.value.length == 0){
        alert('Por favor, digite um numero!')
    }else{
        let e = Number(ent.value)
        let c = 1
        tab.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${e} x ${c} = ${e*c}`
            tab.appendChild(item)
            c++
        }
    }
}