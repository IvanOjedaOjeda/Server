const mongoose = require("mongoose")


const connectDB = async () => {

    try {
        // mongoose.set("strictQuery", false); desactiva el modo de consulta estricta de mongo
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log("Conectado a la Base de Datos")

    } catch (error) {
        console.log(error)
        process.exit(1) // DETIENE LA APP COMPLETAMENTE

    }

}

module.exports = connectDB