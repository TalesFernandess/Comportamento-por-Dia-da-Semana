import { EstrategiaDia, ResultadoEstrategia } from "./EstrategiaDia";  

export class EstrategiaSexta implements EstrategiaDia {
    executar(infoUsuario: String): ResultadoEstrategia {
        return {
         mensagem: `Dia de registro: documente a conclusão de "${infoUsuario}".`,
         prioridade: "MEDIA"
        };
    }
}