import { Request, Response } from "express";
import { EstudanteDataBase } from "../dataBase/EstudanteDataBase";

//BUSCAR ESTUDANTES PELO NOME
export const buscarEstudanteNome = async (req: Request, res: Response) => {

    let errorCode = 400
    
    try {
        const nome = req.params.nome

        if (!nome) {
            throw new Error("Favor preencher o nome!");
        }

        const estudanteDataBase = new EstudanteDataBase()
        const findEstudante = await estudanteDataBase.buscarEstudanteNome(nome)

        res.status(200).send(findEstudante)

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
}