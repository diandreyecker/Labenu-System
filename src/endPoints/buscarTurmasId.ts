import { Request, Response } from "express"
import { TurmaDataBase } from "../dataBase/TurmaDataBase"

//BUSCAR TURMA POR ID
export const buscarTurmasId = async (req: Request, res: Response) => {
    
    let errorCode = 400

    try {
        const turmaId = req.params.turmaId

        const turmaDataBase = new TurmaDataBase()
        const buscaTurmaId = await turmaDataBase.buscarPorId(turmaId)

        res.status(200).send(buscaTurmaId)

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
}