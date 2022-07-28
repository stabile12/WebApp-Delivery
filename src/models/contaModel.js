const mongoose = require('mongoose')
const session = require('express-session')

const AddressSchema = new mongoose.Schema({
    user: {type: String, required: true },
    rua: {type: String ,required: true},
    numero: {type: String ,required: true},
    bairro: {type: String ,required: true},
}, {collection: 'endereco'})

const AddressModel = mongoose.model('Endereco', AddressSchema)

class Endereco {
    constructor(body){
        this.body = body,
        this.address = null
    }

    async registro() {
        this.address = await AddressModel.create(this.body)
    }
}

module.exports = Endereco