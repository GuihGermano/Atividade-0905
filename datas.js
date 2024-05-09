// Função para retornar o parâmetro de data maior
function maiorData(data1, data2) {
    if (data1 > data2) {
        return data1;
    } else {
        return data2;
    }
}

// Função para calcular o intervalo entre datas
function calcularIntervalo(dataAntiga, dataNova) {
    if (dataAntiga > dataNova) {
        throw new Error("A primeira data deve ser mais antiga que a segunda data.");
    }
    const diffEmMS = Math.abs(dataNova - dataAntiga);
    const umDiaEmMS = 1000 * 60 * 60 * 24;
    const diffEmDias = Math.floor(diffEmMS / umDiaEmMS);
    return diffEmDias;
}

// Função para retornar a data atual em um formato específico
function dataAtual() {
    const data = new Date();
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0'); // Os meses começam em zero
    const ano = data.getFullYear();
    const hora = String(data.getHours()).padStart(2, '0');
    const minuto = String(data.getMinutes()).padStart(2, '0');
    return `${hora}:${minuto} - ${dia}/${mes}/${ano}`;
}

// Teste das funções
const data1 = new Date('2024-05-01');
const data2 = new Date('2024-05-09');

console.log("Maior data:", maiorData(data1, data2));
console.log("Intervalo em dias:", calcularIntervalo(data1, data2));
console.log("Data atual:", dataAtual());
