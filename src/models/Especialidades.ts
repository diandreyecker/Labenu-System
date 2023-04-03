
export class Especialidades {
    constructor(
        private id: string,
        private nome: string,
    ) {
        this.id = id;
        this.nome = nome;
    }
}

export class EspecialidadeDocente {
    constructor(
        private id: string,
        private docente_id: string,
        private especialidade_id: string
    ) {
        this.id = id;
        this.docente_id = docente_id;
        this.especialidade_id = especialidade_id
    }
}