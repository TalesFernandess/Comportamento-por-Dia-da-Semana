import { EstrategiaDia, ResultadoEstrategia } from "./EstrategiaDia";  

export class EstrategiaDomingo implements EstrategiaDia {
    executar(infoUsuario: String): ResultadoEstrategia {
        return {
         mensagem: `Dia de planejamento: organize a meta "${infoUsuario}" da próxima semana.`,
         prioridade: "BAIXA"
        };
    }
}