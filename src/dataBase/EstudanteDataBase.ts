import { Usuario } from "../models/Usuario";
import { BaseDataBase } from "./BaseDataBase";

export class EstudanteDataBase extends BaseDataBase {

    private estudanteTable = "IWFS_Estudante"
    TABLE_NAME = "IWFS_Estudante"

    //CRIAR ESTUDANTE
    public async criar(estudante: Usuario) {
        await super.criar(estudante)
    }

    //BUSCAR ESTUDANTE POR ID
    public async buscarPorId(id: string) {
        return super.buscarPorId(id)
    }

    //BUSCAR ESTUDANTES PELO NOME
    public buscarEstudanteNome = async (nomeEstudante: string) => {
        try {
            const estudanteNome = await EstudanteDataBase
                .connection(this.estudanteTable)
                .select('*')
                .where('nome', 'like', `%${nomeEstudante}%`)
            return estudanteNome

        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    //MUDAR ESTUDANTE DE TURMA
    public alterarTurmaEstudante = async (estudanteId: string, novaTurma: string) => {
        try {
            await EstudanteDataBase
                .connection(this.estudanteTable)
                .where({ id: estudanteId })
                .update({ turma_id: novaTurma })

        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}