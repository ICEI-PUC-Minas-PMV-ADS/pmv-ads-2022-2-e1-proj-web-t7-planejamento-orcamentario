# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Os requisitos e as personas apresentadas têm como base entrevistas e experiência pessoal/ profissional dos integrantes da equipe, tendo em vista se tratar de uma proposta que visa solucionar o problema de uma categoria com tamanha abrangência não foi necessário simular uma situação, todos os requisitos foram listados como necessidade real do dia a dia desses profissionais. Entretanto as personas são apenas representações gráficas.

## Personas
#### 1 - Pedro Paulo
Pedro Paulo tem 26 anos, possui o ensino superior sendo recém-formado em arquitetura e trabalha de forma autônoma. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros.
Ele possui o costume de realizar pagamentos com o cartão de crédito, porém sem realizar parcelas, e só utiliza de bancos digitais.
O seu maior obstáculo é a falta de experiência no mercado de trabalho.

#### 2 - Antônio Gomes
Antônio Gomes tem 50 anos, possui o ensino médio incompleto, é autônomo e trabalha como pedreiro, pintor e gesseiro. É torcedor do flamengo e gosta de fazer um churrasco com a família no final de semana. 
Antônio possui alguns hábitos financeiros considerados obsoleto, como fazer uso de cheque, utilizar apenas de bancos físicos e guardar dinheiro na poupança.
Ele pretende montar uma equipe de trabalho, mas encontra algumas dificuldades como o prejuízo ou pouco lucro nas suas empreitadas.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Antônio Gomes | ter facilidade controlar as receitas e despesas | para não perder o controle do dinheiro |
|Antônio Gomes | ter visão sintética da suas finanças | para uma melhor interpretação das informações |
|Pedro Paulo | Inserir valores padrões em um caderno para consultas posteriores | para uma maior agilidade no dia a dia. |
|Pedro Paulo | disponibilizar documento comprovando o serviço executado | para comprovar a legalidade das vendas e contribuir para uma boa reputação do seu negócio |

## Requisitos

O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades interação dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir.

### Requisitos Funcionais

A tabela a seguir apresenta os requisitos do projeto, identificando a prioridade em que os mesmos devem ser entregues.

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O site deve permitir ao usuário controlar uma receita / despesa  organizados por categorias. | ALTA | 
|RF-002| O site deve permitir ao usuário fazer análises visuais dos orçamentos através de gráficos. | MÉDIA |
|RF-003 | O site deve permitir ao usuário manter seus dados atualizados | ALTA |
|RF-004 | O site deve permitir ao usuário imprimir as informações ou orçamentos. | MÉDIA |


### Requisitos não Funcionais

A tabela a seguir apresenta os requisitos não funcionais ( que não se relacionam ao software) que o projeto deverá atender.

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site deve fornecer segurança de dados (LGPD) | ALTA | 
|RNF-002| O site deverá ser responsivo permitindo a visualização em um celular de forma adequada | ALTA |
|RNF-003 | O site deve ter bom nível de contraste entre os elementos da tela em conformidade | MÉDIA |
|RNF-004 | O site deve poder ser utilizado sem treinamento prévio | ALTA |
|RNF-005 | O site deve considerar a acessibilidade | MÉDIA |
|RNF-006 | O site deve apresentar na página inicial com a possível realização de login ou cadastro | ALTA |

## Restrições

As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|RE-001| O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 11/12/2022. |
|RE-002| O aplicativo deve se restringir às tecnologias básicas da Web no Frontend utilizando as linguagens HTML, CSS e JavaScript. |
|RE-003 | A equipe não pode subcontratar o desenvolvimento do trabalho. |
|RE-004 | Não pode gerar custos |
