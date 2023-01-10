class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    calculaCategoria() {
        if (this.idade > 8 && this.idade < 12)
            return "Infantil";
        if (this.idade > 11 && this.idade < 14)
            return "Juvenil";
        if (this.idade > 13 && this.idade < 16)
            return "Intermediário";
        if (this.idade > 15 && this.idade < 31)
            return "Adulto";
    }

    calcularIMC() {
        return this.peso / (this.altura * this.altura);
    }

    calculaMediaValida() {
    // Ordenação das notas
   this.notas = this.notas.sort();

   // Eliminando as maiores e menores notas
   this.notas = this.notas.slice(1, 4);

   // Calculando a média
   // Acumulador para salvar a soma das notas
   var acumulador = 0;
   // Metodo forEach para somar as notas
   this.notas.forEach((nota) => {
     acumulador = nota + acumulador;
   });

   // Calculo da media utilizando o acumulador e a quantidade de notas
   let mediaValida = acumulador / this.notas.length;

   // Retorna a media valida do atleta
   return mediaValida;
 }

    obtemNomeAtleta(){
        return this.nome;
    } 

    obtemIdadeAtleta() {
        return this.idade;
    } 
    obtemPesoAtleta() {
        return this.peso;
    } 
    obtemAlturaAtleta(){
        return this.altura;
    }

    obtemNotasAtleta() {
        return this.notas;
    } 

    obtemCategoria() {
        return cezar.calculaCategoria();
    } 

    obtemIMC() {
        return cezar.calcularIMC();
    } 
   
}

let cezar = new Atleta("Cesar Abascal",30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);

console.log("Nome: " + cezar.obtemNomeAtleta());
console.log("Idade: " + cezar.obtemIdadeAtleta());
console.log("Peso: " + cezar.obtemPesoAtleta());
console.log("Altura: " + cezar.obtemAlturaAtleta());
console.log("Notas: " + cezar.obtemNotasAtleta());
console.log("Categoria: " + cezar.obtemCategoria());
console.log("IMC: " + cezar.obtemIMC());
console.log("Média válida: " + cezar.calculaMediaValida());
