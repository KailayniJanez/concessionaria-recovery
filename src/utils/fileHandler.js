const fs = require("fs");
const path = require("path");

// Lê um arquivo JSON e retorna seu conteúdo
function readJson(filePath) {
    try {
        const fileContent = fs.readFileSync(filePath,"utf8");
        return JSON.parse(fileContent);
    } catch (error) {
        throw new Error ('Não foi possível ler o arquivo: ${error.message}');
    }
}

// Salva um arquivo JSON formatado
function writeJson(filePath, data) {
    try {
        const directory = path.dirname(filePath);

        // Cria a pasta caso ela não exista
        if (!fs.existsSync(directory)) {
            fs.mkdirSync(directory, { recursive: true });
        }

        fs.writeFileSync(
            filePath,
            JSON.stringify(data, null, 4),
            "utf8"
        );

    } catch (error) {
    throw new Error('Não foi possível salvar o arquivo: ${error.message}');
    }
}

module.exports = {
    readJson,
    writeJson
};