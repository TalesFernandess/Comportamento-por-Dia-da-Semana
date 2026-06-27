import { EstrategiaDia, ResultadoEstrategia } from "./EstrategiaDia";

export class EstrategiaNula implements EstrategiaDia {
    executar(infoUsuario: string): ResultadoEstrategia {
        return {
         mensagem: "Nenhuma estratégia válida.",
         prioridade: "BAIXA"
        };
    }
}