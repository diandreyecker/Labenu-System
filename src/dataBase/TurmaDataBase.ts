import { Turma } from "../models/Turma";
import { BaseDataBase } from "./BaseDataBase";

export class TurmaDataBase extends BaseDataBase {

    TABLE_NAME = "IWFS_Turma"
    private turmaTable = "IWFS_Turma"

    //CRIAR NOVA TURMA
    public async criar(turma: Turma) {
        await super.criar(turma)
    }

    //BUSCAR TODAS AS TURMAS
    public async buscarTudo() {
        return super.buscarTudo()
    }

    //BUSCAR TURMA POR ID
    public async buscarPorId(id: string) {
        return super.buscarPorId(id)
    }

    //BUSCAR TURMAS ATIVAS
    public buscarTurmasAtivas = async () => {
        try {
            const turmaAtiva = await TurmaDataBase
                .connection(this.turmaTable)
                .select("*")
                .where("modulo", "<>", "0");

            return turmaAtiva

        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    //MUDAR TURMA DE MODULO
    public alterarModuloTurma = async (turmaId: string, novoModulo: string) => {
        try {
            await TurmaDataBase
                .connection(this.turmaTable)
                .where({ id: turmaId })
                .update({ modulo: novoModulo })

        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}