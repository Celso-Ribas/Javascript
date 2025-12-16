
function contar() {
    let inicio = document.getElementById('txti')
    let final = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'IMPOSSIVEL CONTAR'
        window.alert('[ERRO] Faltam dados para fazer a contagem')
        
    }
    else {
        res.innerHTML = 'Contando : <br> '

        let i = Number(inicio.value)
        let f = Number(final.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('[ERRO] Passo Invalido Considerando PASSO 1')
            p = 1

        }

        // contagem crescente

        if (1 < f) {

            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1f449} `
            }

        }
        // contagem decrescente
        else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1f449} `

            }

        }
        res.innerHTML += ` \u{1f3C1} `
    }

}







