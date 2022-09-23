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

    async readAddress() {
        const address = await AddressModel.find({user: session.user})
        return address;
    }

    async show(id) {
        const address = await AddressModel.findById(id)
        return address
    }   

    async editar(id) {
         this.address = await AddressModel.findByIdAndUpdate(id , this.body, {new: true})
    }
}

module.exports = Endereco