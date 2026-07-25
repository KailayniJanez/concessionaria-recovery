const { readJson, writeJson } = require("../utils/fileHandler");
const { fixCharacters, convertSales } = require("../utils/formatters");
const {
    isValidBrand,
    isValidVehicle
} = require("../utils/validators");

// Classe responsável por recuperar os arquivos corrompidos
class DatabaseRecovery {

    // Corrige o arquivo de marcas
    recoverBrands(input, output) {

        const brands = readJson(input);

        const correctedBrands = brands.map(brand => ({
            ...brand,
            marca: fixCharacters(brand.marca)
        }));

        correctedBrands.forEach(brand => {

            if (!isValidBrand(brand)) {
                throw new Erro("Registro de marca inválido.")
            }

        });

        writeJson(output, correctedBrands);

        console.log(`Marcas corrigidas: ${correctedBrands.length}`);
    }

    // Corrige o arquivo de veículos
    recoverVehicles(input, output) {

        const vehicles = readJson(input);

        const correctedVehicles = vehicles.map(vehicle => ({
            ...vehicle,
            nome: fixCharacters(vehicle.nome),
            vendas: convertSales(vehicle.vendas)
        }));

        correctedVehicles.forEach(vehicle => {

            if (!isValidVehicle(vehicle)) {
                throw new Error("Registro de veículo  inválido.");
            }

        });

        writeJson(output, correctedVehicles);

        console.log(`Veículos corrigidos: ${correctedVehicles.length}`);

    }

}

module.exports = DatabaseRecovery;