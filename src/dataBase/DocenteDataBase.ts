import { Usuario } from "../models/Usuario";
import { BaseDataBase } from "./BaseDataBase";

export class DocenteDataBase extends BaseDataBase {

    TABLE_NAME = "IWFS_Docente"

    //CRIAR NOVO DOCENTE
    public async criar(docente: Usuario) {
        await super.criar(docente)
    }
}