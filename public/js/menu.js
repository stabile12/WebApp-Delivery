class Pedido {
    constructor() {
        this.pedido = [],
        this.preco = null
        
    }
    add() {
        const add = document.querySelector('.lista')
        const lista = document.querySelector('.pedido')
        add.addEventListener('click', (e) => {
            let btn = e.target
            if (btn.classList.contains('nome')) {
                this.pedido.push(btn.innerText)
                console.log(this.pedido)
                lista.innerText = this.pedido
            }
            
        }
    )}

    
    remove() {
        const remove = document.querySelector('.remove')
        const lista = document.querySelector('.pedido')
        remove.addEventListener('click', () => {
            this.pedido = []
            console.log(this.pedido)
            lista.innerText = []
        })
    }

    total() {
        
    }

}
const pedido = new Pedido()
pedido.add()
pedido.remove()


module.exports = Pedido 