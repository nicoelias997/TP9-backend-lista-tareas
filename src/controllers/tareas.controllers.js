import { validationResult } from "express-validator"
import { Tarea } from "../models/tarea"

export const listarTareas = async (req, res) => {
    try{
        const tareas = await Tarea.find()
        res.status(200).json(tareas)
    } catch(e){
        res.status(404).json({
            message: "No encontramos ninguna tarea."
        })
    }

}

export const crearTarea = async (req, res) => {
    try{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({
                message: "Hay un error, no pudimos crear la tarea."
            })
        }

    const nuevaTarea = new Tarea(req.body)
    await nuevaTarea.save()
    res.status(201).json({
        message: "Creamos la tarea con exito"
    })

    } catch(e){
        res.status(404).json({
            message: "Hubo un error, intentelo mas tarde."
        })
    }

}