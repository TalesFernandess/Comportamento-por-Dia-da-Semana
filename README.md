# Comportamento por Dia da Semana

Programa orientado a objetos que verifica o dia da semana e delega a execução para estratégia específica, utilizando o padrão de projeto **Strategy**.

## Como executar


```bash
# Instalar dependências
npm install

# Executar
npm start
```

## Estrutura das estratégias

O projeto aplica o padrão **Strategy** para isolar o comportamento de cada dia da semana:

- **`EstrategiaDia`** — interface que define o contrato (`executar(infoUsuario)`), retornando mensagem e prioridade.
- **Estratégias concretas** (`EstrategiaSegunda` … `EstrategiaDomingo`) — implementam o comportamento específico de cada dia.
- **`EstrategiaNula`** — implementação segura para dias inválidos ou sem estratégia associada (padrão Null Object).
- **`SeletorEstrategia`** — recebe o nome do dia, normaliza a entrada (remove acentos e "-feira") e retorna a estratégia correta ou a nula.

## Questões de reflexão

**1. Como evitar verificações repetidas de valores nulos no código principal?**

Garantindo que o seletor **nunca retorne `null`**. Sempre que um dia for inválido ou não encontrado, ele retorna a `EstrategiaNula`, que possui o mesmo contrato dos outros. O código principal chama `executar()` sem precisar verificar se o objeto existe.

**2. Qual padrão de projeto representa a ausência de uma estratégia de forma segura?**

O padrão **Null Object**. Em vez de retornar `null`, retorna-se um objeto concreto que implementa a mesma interface, mas sem lancar erros.

**3. Como esse padrão foi incorporado à solução?**

A classe `EstrategiaNula` implementa `EstrategiaDia` e retorna uma mensagem genérica com prioridade `BAIXA`. O `SeletorEstrategia` a usa como valor padrão (`?? ESTRATEGIA_NULA`), tirando checagens de nulo no `main.ts`.

## Exemplos de execução

**Entrada válida:**
```
Ana
quarta-feira
quarta-feira

Usuário: Ana
Dia consultado: quarta-feira
Prioridade: MEDIA
Mensagem: Dia de revisão: verifique o andamento da atividade "Ana".
```

**Entrada inválida:**
```
Carlos
sexta-feira
funday

Usuário: Carlos
Dia consultado: funday
Prioridade: BAIXA
Mensagem: Nenhuma estratégia válida.
```
