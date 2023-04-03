import { Request, Response } from "express"
import { EspecialidadeDataBase } from "../dataBase/EspecialidadeDataBase"

//BUSCAR ESPECIALIDADE POR ID
export const buscarEspecialidadeId = async (req: Request, res: Response) => {
    let errorCode = 400

    try {
        const especialidadeId = req.params.especialidadeId

        const especialidadeDataBase = new EspecialidadeDataBase()
        const buscaespecialidadeId = await especialidadeDataBase.buscarPorId(especialidadeId)

        res.status(200).send(buscaespecialidadeId)

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
}