const mongoose = require("mongoose")


const connectDB = async () => {

    try {
        // mongoose.set("strictQuery", false); desactiva el modo de consulta estricta de mongo
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log("Base de datos conectada")

    } catch (error) {
        console.log(error)
        process.exit(1) // DETIENE LA APP COMPLETAMENTE

    }

}

module.exports = connectDB