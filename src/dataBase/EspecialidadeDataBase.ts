import { EspecialidadeDocente, Especialidades } from "../models/Especialidades";
import { BaseDataBase } from "./BaseDataBase";

export class EspecialidadeDataBase extends BaseDataBase {

    private especialidadeDocenteTable = "IWFS_Docente_Especialidade"
    TABLE_NAME = "IWFS_Especialidade"

    //CRIAR NOVA ESPECIALIDADE
    public async criar(especialidade: Especialidades) {
        return super.criar(especialidade)
    }

    //BUSCAR ESPECIALIDADE POR ID
    public async buscarPorId(id: string) {
        return super.buscarPorId(id)
    }

    //INSERIR NOVA ESPECIALIDADE PARA UM DOCENTE
    public novaEspecialidadeDocente = async (novaEspecialidade: EspecialidadeDocente): Promise<void> => {

        try {
            await EspecialidadeDataBase
            .connection(this.especialidadeDocenteTable)
            .insert(novaEspecialidade)

        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}