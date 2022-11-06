import {Router} from "express"
import { check } from "express-validator"
import { crearTarea, listarTareas, eliminarTarea, obtenerTarea, editarTarea } from "../controllers/tareas.controllers"

const router = Router()

router.route("/tareas")
.get(listarTareas)
.post(
    [
        check("nombreTarea", "El nombre de la tarea es obligatoria.")
        .notEmpty()
        .trim()
        .isLength({
            min: 1
        })
        .withMessage("La tarea debe tener al menos 1 caracter.")
    ],
    crearTarea
)

router.route("/tareas/:id")
.get(obtenerTarea)
.put(
    [
        check("nombreTarea", "El nombre de la tarea es obligatoria.")
        .notEmpty()
        .trim()
        .isLength({
            min: 1
        })
        .withMessage("La tarea debe tener al menos 1 caracter.")
    ],
    editarTarea
)
.delete(eliminarTarea)










export default router