export type Prioridade = "ALTA" | "MEDIA" | "BAIXA";

export interface ResultadoEstrategia {
    mensagem: string;
    prioridade: Prioridade;
}

export interface EstrategiaDia {
    executar(infoUsuario: string): ResultadoEstrategia;
}