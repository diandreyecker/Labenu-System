import { Request, Response } from "express";
import { EstudanteDataBase } from "../dataBase/EstudanteDataBase";
import { TurmaDataBase } from "../dataBase/TurmaDataBase";
import { generationId } from "../services/idGenerator";
import { Usuario } from "../models/Usuario";

//CRIAR ESTUDANTE
export const novoEstudante = async (req: Request, res: Response) => {
    
    let errorCode = 400

    try {
        const nome = req.body.nome
        const email = req.body.email
        const dataNasc = req.body.dataNasc
        const turmaId = req.body.turmaId

        if (!nome || !email || !dataNasc || !turmaId) {
            throw new Error("Favor inserir todas as informações");
        }

        const turmaDataBase = new TurmaDataBase()
        const buscaTurma = await turmaDataBase.buscarPorId(turmaId)

        if (buscaTurma.length === 0) {
            errorCode = 404
            throw new Error("Turma não encontrada!")
        }

        const id: string = generationId()

        const novoEstudante = new Usuario(id, nome, email, dataNasc, turmaId)
        const estudanteDataBase = new EstudanteDataBase()
        estudanteDataBase.criar(novoEstudante)

        res.status(201).send("Estudante Criado com Sucesso!")

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
}