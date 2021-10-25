let array = [5 ,3 ,6  ]
array.push(9,2,1,0,4,7,8)
/*console.log (`A array é: ${array}`)
console.log (`A array é composta de ${array.length} posições.`)
console.log (`A array em ordem decresente fica: ${array.sort((a,b)=> a-b)}`)
console.log (`A posição [0] do array é ${array[0]} e a posição [8] do array é ${array[6]}`)

for(let a = 0; a < array.length; a++){
    console.log(`A possição ${a} tem o valor ${array[a]}`)
}

console.log('Forma original')
for(let a in array){
  console.log(`A possição ${a} tem o valor ${array[a]}`)
}

console.log('Forma crescente')
array.sort((a,b)=>a-b)
for(let a in array){
    console.log(`A possição ${a} tem o valor ${array[a]}`)
}*/
array.sort((a,b)=>a-b)
let pos = array.indexOf(11)
if (pos == -1){
    console.log('Valor não encontrado, tente novamente!')
}else{
    console.log(`O valor está na posição ${pos}`)
}
 