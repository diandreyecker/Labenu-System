import { Request, Response } from "express";
import { TurmaDataBase } from "../dataBase/TurmaDataBase";

//MUDAR TURMA DE MODULO
export const alterarModulo = async (req: Request, res: Response) => {
    let errorCode = 400

    try {
        const novoModulo = req.query.novoModulo.toString()
        const turmaId = req.query.turmaId.toString()

        if (!novoModulo || !turmaId) {
            throw new Error("Favor preencher todos os campos");
        }

        const turmaDataBase = new TurmaDataBase()
        const buscaTurma = await turmaDataBase.buscarPorId(turmaId)

        if (buscaTurma.length === 0) {
            errorCode = 404
            throw new Error("Turma não encontrada");
        }

        await turmaDataBase.alterarModuloTurma(turmaId, novoModulo)
        res.status(200).send("Modulo da turma alterado com sucesso!")

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
}