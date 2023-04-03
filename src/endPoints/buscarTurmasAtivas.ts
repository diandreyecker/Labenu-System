import { Request, Response } from "express";
import { TurmaDataBase } from "../dataBase/TurmaDataBase";

//BUSCAR TURMAS ATIVAS
export const buscarTurmasAtivas = async (req: Request, res: Response) => {

    let errorCode = 400
    
    try {
        const turmaDataBase = new TurmaDataBase()
        const turmasAtivas = await turmaDataBase.buscarTurmasAtivas()

        res.status(200).send(turmasAtivas)

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
}