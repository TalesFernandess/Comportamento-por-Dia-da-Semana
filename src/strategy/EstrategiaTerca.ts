import { EstrategiaDia, ResultadoEstrategia } from "./EstrategiaDia";  

export class EstrategiaTerca implements EstrategiaDia {
    executar(infoUsuario: String): ResultadoEstrategia {
        return {
         mensagem: `Dia de avançar: continue a tarefa pendente "${infoUsuario}".`,
         prioridade: "ALTA"
        };
    }
}