const mongoose = require('mongoose')

before( done => {
    mongoose.connect("mongodb://localhost/test")
    mongoose.connection
    .once("open", () => {
        console.log("Conexión éxitosa con base de datos")
        done()
    })
    .on("error", err => {
        console.warn("Warning", err)
    })
})