// Corrige os caracteres alterados nos arquivos
function fixCharacters(text) {

    if (typeof text !== "string") {
        return text;
    }

    return text
        .replace(/æ/g, "a")
        .replace(/Æ/g, "A")
        .replace(/ø/g, "o")
        .replace(/Ø/g, "O")
        .trim();
}

// Converte o campo de vendas para número
function convertSales(value) {
    return Number(value);
}

module.exports = {
    fixCharacters,
    convertSales
};