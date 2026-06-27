import { EstrategiaDia } from "./EstrategiaDia";
import { EstrategiaSegunda } from "./EstrategiaSegunda";
import { EstrategiaTerca } from "./EstrategiaTerca";
import { EstrategiaQuarta } from "./EstrategiaQuarta";
import { EstrategiaQuinta } from "./EstrategiaQuinta";
import { EstrategiaSexta } from "./EstrategiaSexta";
import { EstrategiaSabado } from "./EstrategiaSabado";
import { EstrategiaDomingo } from "./EstrategiaDomingo";
import { EstrategiaNula } from "./EstrategiaNula";

function normalizar(dia: string): string {
    return dia
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") 
    .toLowerCase()
    .trim()
    .replace(/-feira$/, "");
}

const ESTRATEGIAS: Record<string, EstrategiaDia> = {
    segunda: new EstrategiaSegunda(),
    terca: new EstrategiaTerca(),
    quarta: new EstrategiaQuarta(),
    quinta: new EstrategiaQuinta(),
    sexta: new EstrategiaSexta(),
    sabado: new EstrategiaSabado(),
    domingo: new EstrategiaDomingo(),
};

const ESTRATEGIA_NULA = new EstrategiaNula();

export function selecionarEstrategia(dia: string): EstrategiaDia {
    if(!dia){
        return ESTRATEGIA_NULA;
    }

    const chave = normalizar(dia);
    return ESTRATEGIAS[chave] ?? ESTRATEGIA_NULA;
}