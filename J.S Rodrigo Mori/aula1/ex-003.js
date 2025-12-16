/*Nessa parte vamos ver sobre 

TRUE  - FALSE - OBJECTE

verdadeiro ou falso, e os Objetos

Vamos supor que eu queira os dados de uma pessoa , e vou agrupar todas as informações em um objeto onde eu monte uma variavel com os dados do cidadão.

*/

/* 
null- indefined

nulo ou indefinido

*/

const meu = [{
    nome: "Celso",
    idade: 45,
    sexo: "Masculino",
    cidade: "São Paulo",
    casado: "Verdadeiro",
    conjuge: "Cibele"
}, {
    nome: "Celso",
    idade: 45,
    sexo: "Masculino",
    cidade: "São Paulo",
    casado: "Falso",
    conjuge: null
}, {
    nome: "Rodolfo",
    idade: 43,
    sexo: "Masculino",
    cidade: "São Vicente",
    casado: "Falso",
    conjuge: null
}, {
    nome: "Cibele",
    idade: 53,
    sexo: "Feminino",
    cidade: "São Paulo",
    casado: "Verdadeiro",
    conjuge: "Celso"
}]

console.log(meu[2])