import mongoose from "mongoose";

const url = "mongodb://localhost:27017/lista-tareas"

mongoose.connect(url)

const connection = mongoose.connection

connection.once("open", () => {
    console.log("estoy conectado a la database")
})