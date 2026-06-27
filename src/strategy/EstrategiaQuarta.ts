import { EstrategiaDia, ResultadoEstrategia } from "./EstrategiaDia";  

export class EstrategiaQuarta implements EstrategiaDia {
    executar(infoUsuario: String): ResultadoEstrategia {
        return {
         mensagem: `Dia de revisão: verifique o andamento da atividade "${infoUsuario}".`,
         prioridade: "MEDIA"
        };
    }
}