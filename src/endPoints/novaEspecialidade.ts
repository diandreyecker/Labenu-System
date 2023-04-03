import { Request, Response } from "express";
import { EspecialidadeDataBase } from "../dataBase/EspecialidadeDataBase";
import { Especialidades } from "../models/Especialidades";
import { generationId } from "../services/idGenerator";

//CRIAR NOVA ESPECIALIDADE
export const novaEspecialidade = async (req: Request, res: Response) => {

    let errorCode = 400

    try {
        const nome = req.body.nome

        if (!nome) {
            throw new Error("Favor inserir o nome da especialidade!");
        }

        const id: string = generationId()

        const novaEspecialidade = new Especialidades(id, nome)
        const especialidadeDataBase = new EspecialidadeDataBase()
        especialidadeDataBase.criar(novaEspecialidade)

        res.status(201).send("Especialidade Criada com Sucesso!")

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
}