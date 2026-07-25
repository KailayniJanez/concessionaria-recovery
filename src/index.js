const path = require("path");
const DatabaseRecovery = require("./core/DatabaseRecovery");

// Cria uma instância da classe responsável pela recuperação dos arquivos
const recovery = new DatabaseRecovery();

// Caminhos dos arquivos de entrada
const vehiclesInput = path.join(
    __dirname,
    "../data/broken_database_1.json"
);

const brandsInput = path.join(
    __dirname,
    "../data/broken_database_2.json"
);

// Caminhos dos arquivos que serão gerados
const vehiclesOutput = path.join(
    __dirname,
    "../output/veiculos_corrigidos.json"
);

const brandsOutput = path.join(
    __dirname,
    "../output/marcas_corrigidas.json"
);

try {
    console.log("Iniciando recuperação dos arquivos...\n");

    recovery.recoverBrands(brandsInput, brandsOutput);

    recovery.recoverVehicles(vehiclesInput, vehiclesOutput);

    console.log("\nProcesso finalizado com sucesso!");

} catch (error) {

    console.error("\nErro durante a recuperação:");
    console.error(error.message);

}