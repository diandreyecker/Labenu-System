import { Request, Response } from "express";
import { TurmaDataBase } from '../dataBase/TurmaDataBase';
import { DocenteDataBase } from "../dataBase/DocenteDataBase";
import { EspecialidadeDataBase } from "../dataBase/EspecialidadeDataBase";
import { generationId } from "../services/idGenerator";
import { EspecialidadeDocente } from "../models/Especialidades";
import { Usuario } from "../models/Usuario";

//CRIAR NOVO DOCENTE
export const novoDocente = async (req: Request, res: Response) => {
    
    let errorCode = 400

    try {
        const { nome, email, dataNasc, turmaId, especialidadeId } = req.body

        if (!nome || !email || !dataNasc || !turmaId || !especialidadeId) {
            throw new Error("Favor inserir todos os dados")
        }

        const turmaDataBase = new TurmaDataBase()
        const buscaTurma = await turmaDataBase.buscarPorId(turmaId)

        if (buscaTurma.length === 0) {
            errorCode = 400
            throw new Error("Turma não encontrada");
        }
        const especialidadeDataBase = new EspecialidadeDataBase()
        const buscaEspecialidade = await especialidadeDataBase.buscarPorId(especialidadeId)

        if (buscaEspecialidade.length === 0) {
            errorCode = 404
            throw new Error("Especialidade não encontrada!");
        }
        const idDocente: string = generationId()
        const idEspecialidade = generationId()

        const novoDocente = new Usuario(idDocente, nome, email, dataNasc, turmaId)
        const docenteDataBase = new DocenteDataBase()
        docenteDataBase.criar(novoDocente)

        const novoEspecialidadeDocente = new EspecialidadeDocente(idEspecialidade, idDocente, especialidadeId)
        especialidadeDataBase.novaEspecialidadeDocente(novoEspecialidadeDocente)

        res.status(201).send("Docente criado com sucesso!")

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
}