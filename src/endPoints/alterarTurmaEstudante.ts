import { Request, Response } from 'express';
import { TurmaDataBase } from '../dataBase/TurmaDataBase';
import { EstudanteDataBase } from '../dataBase/EstudanteDataBase';

export const alterarTurmaEstudante = async (req: Request, res: Response) => {
    let errorCode = 400

    try {
        const estudanteId = req.query.estudanteId.toString()
        const novaTurma = req.query.novaTurma.toString()

        if (!estudanteId || !novaTurma) {
            throw new Error("Favor preencher todos os campos")
        }

        const estudanteDataBase = new EstudanteDataBase()
        const buscaEstudante = await estudanteDataBase.buscarPorId(estudanteId)

        if (buscaEstudante.length === 0) {
            errorCode = 404
            throw new Error("Estudante não encontrado");
        }

        const turmaDataBase = new TurmaDataBase()
        const buscaTurma = await turmaDataBase.buscarPorId(novaTurma)

        if (buscaTurma.length === 0) {
            errorCode = 404
            throw new Error("Turma não encontrada");
        }

        estudanteDataBase.alterarTurmaEstudante(estudanteId, novaTurma)
        res.status(200).send("Alteção da turma do estudante efetuada com sucesso!")

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
}