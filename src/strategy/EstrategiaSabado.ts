import { EstrategiaDia, ResultadoEstrategia } from "./EstrategiaDia";  

export class EstrategiaSabado implements EstrategiaDia {
    executar(infoUsuario: String): ResultadoEstrategia {
        return {
         mensagem: `Dia de estudo livre ou descando: aproveite para se dedicar a "${infoUsuario}" ou descansar.`,
         prioridade: "BAIXA"
        };
    }
}