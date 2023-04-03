import { Request, Response } from "express";
import { TurmaDataBase } from "../dataBase/TurmaDataBase";

export const buscarTurmas = async (req: Request, res: Response) => {

    let errorCode = 400
    
    try {
        const turmaDB = new TurmaDataBase()
        const allTurmas = await turmaDB.buscarTudo()

        res.status(200).send(allTurmas)

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
}