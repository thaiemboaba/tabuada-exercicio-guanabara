
    // let n = document.getElementById('txtn')
    // let res = document.getElementById('res')

    // let n1 = String (n.value)
    
    // if (!txtn.value.length) {
    //     alert('[ERRO] Faltam dados!')
    //     res.innerHTML = 'Impossível gerar!'
    // } else (txtn == 0) {
    //     res.innerHTML = '0 x 0 = 0 <br> 0 x 1 = 0 <br> 0 x 2 = 0 <br> 0 x 3 = 0 <br> 0 x 4 = 0 <br> 0 x 5 = 0 <br> 0 x 6 = 0 <br> 0 x 7 = 0 <br> 0 x 8 = 0 <br> 0 x 9 = 0 <br> 0 x 10 = 0'
    // }

function gerar() {

    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
        
}

