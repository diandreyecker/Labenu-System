import { Request, Response } from "express"
import { EstudanteDataBase } from "../dataBase/EstudanteDataBase"

//BUSCAR ESTUDANTE POR ID
export const getEstudanteById = async (req: Request, res: Response) => {
    
    let errorCode = 400

    try {
        const estudanteId = req.params.estudanteId
        const estudanteDataBase = new EstudanteDataBase()
        const buscaEstudanteId = await estudanteDataBase.buscarPorId(estudanteId)

        res.status(200).send(buscaEstudanteId)

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
}