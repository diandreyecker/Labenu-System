import express from "express";
import cors from 'cors';
import { ping } from "./endPoints/ping";
import { novaTurma } from "./endPoints/novaTurma";
import { buscarTurmas } from "./endPoints/buscarTurmas";
import { novoEstudante } from "./endPoints/novoEstudante";
import { buscarTurmasId } from "./endPoints/buscarTurmasId";
import { novaEspecialidade } from "./endPoints/novaEspecialidade";
import { novoDocente } from "./endPoints/novoDocente";
import { buscarTurmasAtivas } from "./endPoints/buscarTurmasAtivas";
import { alterarModulo } from "./endPoints/alterarModuloTurma";
import { buscarEstudanteNome } from "./endPoints/buscarEstudanteNome";
import { alterarTurmaEstudante } from "./endPoints/alterarTurmaEstudante";
import { AddressInfo } from "net";

const app = express();

app.use(express.json());
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`)
    }
})


app.get("/ping", ping)
//----------------------------------------------------------------

app.post("/turma", novaTurma) //CRIAR NOVA TURMA

app.get('/turmasAtivas', buscarTurmasAtivas) //BUSCAR TURMAS ATIVAS

app.patch("/turma", alterarModulo) //MUDAR TURMA DE MODULO


app.post("/estudante", novoEstudante) //CRIAR ESTUDANTE

app.get('/estudante/:nome', buscarEstudanteNome) //BUSCAR ESTUDANTES PELO NOME

app.patch("/estudante", alterarTurmaEstudante) //MUDAR ESTUDANTE DE TURMA


app.post("/docente", novoDocente) //CRIAR NOVO DOCENTE

app.post("/especialidade", novaEspecialidade) //CRIAR NOVA ESPECIALIDADE