import mongoose from "mongoose";

const url = "mongodb+srv://nicoelias997:nicoelias997@cluster0.qo1exxt.mongodb.net/lista-tareas"

mongoose.connect(url)

const connection = mongoose.connection

connection.once("open", () => {
    console.log("estoy conectado a la database")
})
