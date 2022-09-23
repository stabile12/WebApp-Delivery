const mongoose = require('mongoose') 

const loginSchema = new mongoose.Schema({
    email: {type: String ,required: true},
    password: {type: String , required: true}
}, {
    collection: 'userdata'
})

const LoginModel = mongoose.model('Login', loginSchema); 
 
class Login {
    constructor(body) {
        this.body = body,
        this.errors = []
        this.user = null
    }
    async login() {
        if (this.errors.lenght > 0) return;
        this.user = await LoginModel.findOne({ email: this.body.email });

        if(!this.user) {
            this.errors.push('usuário não existe.')
            return
        }
        if ((this.body.password != this.user.password)) {
            this.errors.push('senha inválida')
            this.user = null
            return;
        }
    }
    
    async register() {
        this.valida()
        //if (this.errors.length > 0) return;
        await this.userExist() 
        if (this.errors.length > 0) return;
        
        this.user = await LoginModel.create(this.body) 
        

    }

    async userExist() {
        this.user = await LoginModel.findOne({ email: this.body.email });
        if (this.user) {
            this.errors.push(' Usuário já existe ')
            console.log('usuário achado')
        } 
    }

    valida() {
        if (this.body.password.length < 3 || this.body.password.length > 50) {
            this.errors.push(' A senha precisa ter entre 3 e 50 caracteres ')
        }
        if (this.body.password != this.body.repeat) {
            this.errors.push(' As senhas precisam ser iguais! ')
        }
        
    }
}

module.exports = Login