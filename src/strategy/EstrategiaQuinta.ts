import { EstrategiaDia, ResultadoEstrategia } from "./EstrategiaDia";  

export class EstrategiaQuinta implements EstrategiaDia {
    executar(infoUsuario: String): ResultadoEstrategia {
        return {
         mensagem: `Dia de colaboração: entre em contato com "${infoUsuario}".`,
         prioridade: "MEDIA"
        };
    }
}