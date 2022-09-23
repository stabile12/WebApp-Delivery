const mongoose = require('mongoose')
const session = require('express-session')

const PedidoSchema = new mongoose.Schema({
    user: {type: String, required: true },
    pedido: {type: String ,required: true},
    total: {type: Number ,required: true},
    endereço: {type: String ,required: true}
})

const PedidoModel = mongoose.model('Pedido', PedidoSchema)

class Pedido { 
    constructor(body){
        this.body = body,
        this.pedido = null
        this.adrress = null
    }

    async finaliza() {
        this.pedido = await PedidoModel.create(this.body)
    }
}

module.exports = Pedido