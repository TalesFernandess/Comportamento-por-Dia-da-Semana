import * as readline from "readline";
import { selecionarEstrategia } from "./strategy/SeletorEstrategia";

const DIAS_SEMANA = ["domingo", "segunda-feira", "terca-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sabado"];

function diaDaSemanaAtual(): string {
    return DIAS_SEMANA[new Date().getDay()];
}

function perguntar(rl: readline.Interface, pergunta: string): Promise<string> {
    return new Promise((resolve) => rl.question(pergunta, resolve));
}

async function main() {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

    const nome = await perguntar(rl, "Informe seu nome (ou tarefa/meta): ");

    const diaAtual = diaDaSemanaAtual();
    console.log(`\nDia atual detectado: ${diaAtual}`);

    const diaManual = await perguntar(rl, "Consultar outro dia? (deixe em branco para usar o dia atual): ");
    rl.close();

    const diaConsultado = diaManual.trim() || diaAtual;
    const estrategia = selecionarEstrategia(diaConsultado);
    const resultado = estrategia.executar(nome);

    console.log(`\nUsuário: ${nome}`);
    console.log(`Dia consultado: ${diaConsultado}`);
    console.log(`Prioridade: ${resultado.prioridade}`);
    console.log(`Mensagem: ${resultado.mensagem}`);
}

main();
