import mongoose, {Schema} from "mongoose";

const tareaSchema = new Schema({
    nombreTarea: {
        type: String,
        required: true
    }
})

export const Tarea = mongoose.model("tarea", tareaSchema)