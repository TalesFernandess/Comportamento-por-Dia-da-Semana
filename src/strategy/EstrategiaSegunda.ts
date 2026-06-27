import { EstrategiaDia, ResultadoEstrategia } from "./EstrategiaDia";  

export class EstrategiaSegunda implements EstrategiaDia {
    executar(infoUsuario: String): ResultadoEstrategia {
        return {
         mensagem: `Dia de organização: defina suas prioridades para a meta "${infoUsuario}".`,
         prioridade: "ALTA"
        };
    }
}