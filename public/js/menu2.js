const action = document.querySelector('body')
let item = document.querySelector('.input')
const remove = document.querySelector('.remove')
const totalInput = document.querySelector('.total')
const address = document.querySelector('.address')
const pedidoLista = document.querySelector('.pedidoLista')
const totalLista = document.querySelector('.totalLista')


action.addEventListener('click', (e) => {
    btn = e.target
    cont = 1  
    if (btn.classList.contains('nome')) {
        item.value += ` ${btn.innerText}`
        pedidoLista.innerText += ` ${btn.innerText}`
        while (true) {
            if (btn.classList.contains('nome' && `${cont}`)) {
                let preco = document.querySelector(`.preco${cont}`)
                let valor = Number(preco.innerText)
                totalInput.value = Number(totalInput.value) + valor
                totalLista.innerText = Number(totalInput.value)
                return
                } else {
                    cont += 1
                }
        }
    }
            
    if (btn.classList.contains('remove')) {
        item.value = null
        totalInput.value = null
        pedidoLista.innerText = 'Itens:'
    }

    if (btn.classList.contains('endereco')) {
        address.value = e.target.innerText
    }
})

    
