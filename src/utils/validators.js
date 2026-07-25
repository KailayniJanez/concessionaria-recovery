// Verifica se o registro da marca está correto
function isValidBrand(brand) {

    return (
        brand &&
        typeof brand.id_marca === "number" &&
        typeof brand.marca === "string"
    );

}

// Verifica se o registro do veículo está correto
function isValidVehicle(vehicle) {

    return (
        vehicle &&
        typeof vehicle.data === "string" &&
        typeof vehicle.id_marca_ === "number" &&
        typeof vehicle.nome === "string" &&
        typeof vehicle.vendas === "number" &&
        typeof vehicle.valor_do_veiculo === "number"
    );

}  

module.exports = {
    isValidBrand,
    isValidVehicle
};