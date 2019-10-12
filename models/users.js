const mongoose = require("mongoose")
const Schema = mongoose.Schema
/**
 * 
 */
mongoose.connect("mongodb://localhost/test", { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex : true
})
/**
 * 
 */
var email_match = [/^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Ingresa un email valido"]
/**
 * 
 */
var user_schema = new Schema({
    name : String,
    email : { 
		type : String, 
		required : "El correo es obligatorio",
        match : email_match,
        unique: true
	},
    password : {
        type: String,
		minlength : [
			8 , "El password es muy corto"
        ]/*,
		validate : {
			validator : ( pass ) => {
				return this.password_confirmation == pass
			},
			message : "Las contraseñas no coinciden"
		}*/
    }
})
/**
 * 
 */
user_schema.virtual('password_confirmation')
    .get( () => {
        return this.p_c;
    })
    .set( ( password ) => {
        this.p_c = password
    })
/**
 * 
 */
var User = mongoose.model("User", user_schema)
/**
 * 
 */
module.exports = User