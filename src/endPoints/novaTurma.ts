import { Request, Response } from "express"
import { Turma } from "../models/Turma"
import { TurmaDataBase } from '../dataBase/TurmaDataBase';
import { generationId } from "../services/idGenerator";

//CRIAR NOVA TURMA
export const novaTurma = async (req: Request, res: Response) => {

    let errorCode = 400

    try {
        const nome = req.body.nome
        const modulo = req.body.modulo || "0"

        if (!nome) {
            throw new Error("Favor inserir o nome da turma!");
        }
        if (modulo > "6") {
            throw new Error("Os módulos vão de 1 a 6!");
        }
        const id: string = generationId()

        const novaTurma = new Turma(id, nome, modulo)
        const turmaDB = new TurmaDataBase()
        turmaDB.criar(novaTurma)

        res.status(201).send("Turma Criada com sucesso!")

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
}