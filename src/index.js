import express from "express" //haremos que nuestro proyecto se apodere de un puerto
import cors from "cors"
import morgan from "morgan"
import path from "path"

import "./database" 


const app = express() //instanciamos

app.set("port", process.env.PORT || 4000) //config un puerto

app.listen(app.get("port"), () => {
    console.log("estoy en el puerto " + app.get("port"))
}) //leera en el puerto en el que estamos y nos lo dira

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.use(morgan("dev"))

app.use(express.static(path.join(__dirname, "../public")))
