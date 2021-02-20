function tabuada(){
    let tab = document.getElementById('seltab')
    let num = document.getElementById('txtn')
    if(num.value.length == 0){
        window.alert('[ERRO] Nenhum número foi informado')
    }else{
        tab.innerHTML = ''
        for(let c = 1;c <= 10;c += 1){
            let opt = document.createElement('option')
            let r = 0
            r = (num.value * c)
            opt.text =  `${num.value} x ${c} = ${r}  `
            tab.appendChild(opt)
        }

    }
}