const action = document.querySelector('body')
let item = document.querySelector('.input')
const remove = document.querySelector('.remove')
const totalInput = document.querySelector('.total')
const address = document.querySelector('.address')


action.addEventListener('click', (e) => {
    btn = e.target
    cont = 1  
    if (btn.classList.contains('nome')) {
        item.value += ` ${btn.innerText}`
        while (true) {
            if (btn.classList.contains('nome' && `${cont}`)) {
                let preco = document.querySelector(`.preco${cont}`)
                let valor = Number(preco.innerText)
                totalInput.value = Number(totalInput.value) + valor
                return
                } else {
                    cont += 1
                }
        }
    }
            
    if (btn.classList.contains('remove')) {
        item.value = null
        totalInput.value = null
    }

    if (btn.classList.contains('endereco')) {
        address.value = e.target.innerText
    }
})

    
